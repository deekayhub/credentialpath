import net from "node:net";
import tls from "node:tls";
import type { EmailTransport, EmailResult } from "../types";
import type { InquiryPayload } from "@/content/types";

type SmtpConfig = {
  host: string;
  port: number;
  user?: string;
  password?: string;
  secure: boolean;
  from: string;
  to: string;
};

const LINE_END = "\r\n";

export class SmtpTransport implements EmailTransport {
  private config: SmtpConfig;

  constructor(config: SmtpConfig) {
    this.config = config;
  }

  async sendInquiry(payload: InquiryPayload): Promise<EmailResult> {
    try {
      const client = new SmtpClient(this.config);
      await client.send(buildMessage(this.config.to, payload));
      return { ok: true };
    } catch {
      return { ok: false, reason: "smtp-error" };
    }
  }
}

class SmtpClient {
  private socket: net.Socket | null = null;

  constructor(private config: SmtpConfig) {}

  async send(message: string): Promise<void> {
    await this.connectAndGreet();
    await this.command("EHLO credentialpath.local");
    const needsStartTls = !this.config.secure && this.config.port !== 465;
    if (needsStartTls && this.config.user) {
      await this.command("STARTTLS");
      await this.upgradeToTls();
      await this.command("EHLO credentialpath.local");
    }
    if (this.config.user && this.config.password) {
      await this.command("AUTH LOGIN");
      await this.line(b64(this.config.user));
      await this.line(b64(this.config.password));
    }
    await this.command(`MAIL FROM:<${this.config.from}>`);
    await this.command(`RCPT TO:<${this.config.to}>`);
    await this.command("DATA");
    await this.line(message + "." + LINE_END);
    await this.readReply();
    await this.command("QUIT").catch(() => undefined);
  }

  private connectAndGreet(): Promise<void> {
    return new Promise((resolve, reject) => {
      const { host, port } = this.config;
      let socket: net.Socket;
      let waitEvent: string;
      if (this.config.secure) {
        socket = tls.connect({ host, port, servername: host });
        waitEvent = "secureConnect";
      } else {
        socket = net.connect(port, host);
        waitEvent = "connect";
      }
      this.socket = socket;
      socket.setTimeout(15000, () =>
        socket.destroy(new Error("SMTP timeout")),
      );
      socket.once("error", (err) => socket.destroy(err));
      socket.once(waitEvent as "connect", () => {
        this.readReply().then(resolve).catch(reject);
      });
    });
  }

  private upgradeToTls(): Promise<void> {
    return new Promise((resolve) => {
      const plain = this.requireSocket();
      const { host } = this.config;
      const secured = tls.connect({ socket: plain, servername: host });
      this.socket = secured;
      secured.setTimeout(15000, () =>
        secured.destroy(new Error("SMTP timeout")),
      );
      secured.once("error", (err) => secured.destroy(err));
      secured.once("secureConnect", () => resolve());
    });
  }

  private command(cmd: string): Promise<void> {
    return this.line(cmd).then(() => this.readReply().then(() => undefined));
  }

  private line(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.requireSocket().write(text + LINE_END, (err) =>
        err ? reject(err) : resolve(),
      );
    });
  }

  private readReply(): Promise<void> {
    return new Promise((resolve, reject) => {
      const sock = this.requireSocket();
      let buffer = "";
      const onData = (chunk: Buffer) => {
        buffer += chunk.toString("utf8");
        if (!/^\d{3}[ ]/.test(buffer) || !buffer.endsWith(LINE_END)) return;
        sock.removeListener("data", onData);
        const code = Number(buffer.slice(0, 3));
        if (code >= 200 && code < 300) return resolve();
        reject(new Error(`SMTP server replied ${code}: ${buffer.trim()}`));
      };
      sock.on("data", onData);
    });
  }

  private requireSocket(): net.Socket {
    if (!this.socket) throw new Error("socket not connected");
    return this.socket;
  }
}

function b64(s: string): string {
  return Buffer.from(s, "utf8").toString("base64");
}

function buildMessage(
  to: string,
  payload: InquiryPayload,
): string {
  const subject = `New credentialing inquiry — ${lineSafe(payload.fullName)}`;
  const body = buildBody(payload);

  return [
    `From: <${payload.email}>`,
    `To: <${to}>`,
    `Reply-To: ${payload.email}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    'Content-Type: multipart/alternative; boundary="credpath-boundary"',
    "",
    "--credpath-boundary",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: quoted-printable",
    "",
    quotedPrintable(body.plain),
    "--credpath-boundary",
    "Content-Type: text/html; charset=UTF-8",
    "",
    body.html,
    "--credpath-boundary--",
    "",
  ].join(LINE_END);
}

function buildBody(payload: InquiryPayload): { plain: string; html: string } {
  const rows: [string, string][] = [
    ["Full name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone ?? ""],
    ["Practice / organization", payload.organization ?? ""],
    ["Provider type", payload.providerType ?? ""],
    ["Specialty", payload.specialty ?? ""],
    ["State", payload.state ?? ""],
    ["Services required", payload.services.join(", ")],
    ["Preferred contact method", payload.preferredContact ?? ""],
    ["Message", payload.message ?? ""],
  ];
  const present = rows.filter(([, v]) => v);
  const plain = `New credentialing website inquiry\n\n${present
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}\n`;

  const items = present
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#12263a;vertical-align:top;">${esc(k)}</td><td style="padding:6px 0;color:#40566e;">${esc(v)}</td></tr>`,
    )
    .join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f7fafd;font-family:Arial,Helvetica,sans-serif;color:#40566e;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <h2 style="color:#12263a;margin:0 0 16px;">New credentialing inquiry</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;background:#ffffff;border:1px solid #e3e9f0;border-radius:12px;">${items}</table>
      <p style="color:#64748b;font-size:12px;margin-top:16px;">Sent from the CredentialPath website inquiry form.</p>
    </div></body></html>`;

  return { plain, html };
}

function lineSafe(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function quotedPrintable(s: string): string {
  let out = "";
  for (const ch of s) {
    const code = ch.codePointAt(0) ?? 0;
    out += code > 127 ? `=${code.toString(16).toUpperCase()}` : ch;
  }
  return out;
}