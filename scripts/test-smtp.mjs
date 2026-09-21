#!/usr/bin/env node
/**
 * Standalone SMTP diagnostic for the CredentialPath contact form.
 *
 * Reads the same variables from `.env` as `lib/email/index.ts`, then performs
 * a real SMTP conversation (connect, EHLO, STARTTLS, AUTH LOGIN, send) with
 * verbose PASS/FAIL output per step. No Next.js needed.
 *
 * Run:  node scripts/test-smtp.mjs
 */
import net from "node:net";
import tls from "node:tls";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const env = loadEnv(path.join(root, ".env"));

const HOST = env.SMTP_HOST;
const CONTACT_EMAIL = env.CONTACT_EMAIL;

if (!HOST || !CONTACT_EMAIL) {
  console.error(
    "[FAIL] SMTP is not configured. Both SMTP_HOST and CONTACT_EMAIL are required in .env.",
  );
  console.error("       Current values: SMTP_HOST=%s CONTACT_EMAIL=%s", HOST ?? "<empty>", CONTACT_EMAIL ?? "<empty>");
  process.exit(1);
}

const PORT = Number(env.SMTP_PORT ?? 587);
const SECURE = env.SMTP_SECURE === "true" || PORT === 465;
const USER = env.SMTP_USER || undefined;
const PASSWORD = env.SMTP_PASSWORD ? "(set, " + env.SMTP_PASSWORD.length + " chars)" : "(not set)";
const FROM = env.SMTP_FROM ?? env.SMTP_USER ?? "noreply@localhost";

console.log("== SMTP test ==");
console.log("host      : %s", HOST);
console.log("port      : %d", PORT);
console.log("secure    : %s", SECURE);
console.log("user      : %s", USER ?? "(anonymous)");
console.log("password  : %s", PASSWORD);
console.log("from      : %s", FROM);
console.log("to        : %s", CONTACT_EMAIL);
console.log("");

const log = (label, ok, detail = "") =>
  console.log("%s %-28s %s", ok ? "[ OK ]" : "[FAIL]", label, detail);

let socket = null;

function requireSocket() {
  if (!socket) throw new Error("not connected");
  return socket;
}

function readReply() {
  return new Promise((resolve, reject) => {
    const sock = requireSocket();
    let buffer = "";
    const onData = (chunk) => {
      buffer += chunk.toString("utf8");
      let idx;
      while ((idx = buffer.indexOf("\r\n")) !== -1) {
        const line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 2);
        const m = /^(\d{3})([ -])/.exec(line);
        if (!m) continue;
        const code = Number(m[1]);
        if (m[2] === "-") continue;
        sock.removeListener("data", onData);
        if (code >= 200 && code < 400) return resolve({ code, line });
        return reject(new Error(`server replied ${code}: ${line}`));
      }
    };
    sock.on("data", onData);
  });
}

function writeLine(text) {
  return new Promise((resolve, reject) => {
    requireSocket().write(text + "\r\n", (err) => (err ? reject(err) : resolve()));
  });
}

async function command(cmd) {
  await writeLine(cmd);
  return readReply();
}

function b64(s) {
  return Buffer.from(s, "utf8").toString("base64");
}

async function main() {
  try {
    socket = SECURE
      ? tls.connect({ host: HOST, port: PORT, servername: HOST })
      : net.connect(PORT, HOST);
    socket.setTimeout(15000, () => socket.destroy(new Error("connection timeout")));
    socket.on("error", (err) => socket.destroy(err));

    const waitEvent = SECURE ? "secureConnect" : "connect";
    await new Promise((resolve, reject) => {
      socket.once(waitEvent, () => readReply().then(resolve, reject));
      socket.once("error", reject);
    });
    log(`connect to ${HOST}:${PORT}`, true);

    await command("EHLO test.local");
    log("EHLO (identity)", true);

    if (!SECURE && USER) {
      await command("STARTTLS");
      log("STARTTLS", true);
      const plain = requireSocket();
      const secured = tls.connect({ socket: plain, servername: HOST });
      socket = secured;
      secured.on("error", (err) => secured.destroy(err));
      console.log("       ... upgrading socket to TLS");
      await new Promise((resolve, reject) => {
        secured.once("secureConnect", resolve);
        secured.once("error", reject);
      });
      await command("EHLO test.local");
      log("EHLO over TLS", true);
    }

    if (USER && PASSWORD !== "(not set)") {
      await command("AUTH LOGIN");
      await writeLine(b64(USER));
      await readReply();
      await writeLine(b64(env.SMTP_PASSWORD));
      await readReply();
      log("AUTH LOGIN", true);
    } else {
      log("AUTH (skipped - no credentials)", true);
    }

    await command(`MAIL FROM:<${FROM}>`);
    log("MAIL FROM", true);
    await command(`RCPT TO:<${CONTACT_EMAIL}>`);
    log("RCPT TO", true);

    await command("DATA");
    const msg = [
      `From: <${FROM}>`,
      `To: <${CONTACT_EMAIL}>`,
      "Subject: SMTP test from credential-website",
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "",
      "This is a test email sent by scripts/test-smtp.mjs.",
      "",
    ].join("\r\n");
    await writeLine(msg + "\r\n.\r\n");
    await readReply();
    log("DATA (message submitted)", true);

    await command("QUIT").catch(() => undefined);
    console.log("");
    console.log("RESULT: SMTP works. The contact form should now deliver mail.");
    console.log("Next: check the inbox of %s (and the spam folder).", CONTACT_EMAIL);
  } catch (err) {
    console.log("");
    console.log("RESULT: FAILED — %s", err?.message || err);
    if (socket) socket.destroy();
    process.exitCode = 1;
  }
}

function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) {
    console.warn("[warn] .env not found at %s — only shell vars will be used.", file);
    return out;
  }
  for (const raw of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    let k = line.slice(0, eq).trim();
    let v = line.slice(eq + 1).trim();
    if (k.startsWith("export ")) k = k.slice(7).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    out[k] = v;
  }
  return out;
}

main();