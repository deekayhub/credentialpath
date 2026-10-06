import { NextResponse } from "next/server";
import { validateInquiry } from "@/lib/validation/inquiry";
import { sendInquiryEmail } from "@/lib/email";
import { saveContactLeadToGoogleSheet } from "@/lib/saveContactLeadToGoogleSheet";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  return realIp ?? "local";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const input = (await req.json().catch(() => null)) as unknown;
  if (typeof input !== "object" || input === null) {
    return NextResponse.json(
      { ok: false, errors: { _form: ["Invalid request."] } },
      { status: 400 },
    );
  }

  const record = input as Record<string, unknown>;

  // Honeypot: a real human never fills this field. Fake a success so bots
  // can't tell the difference.
  if (typeof record.company_website === "string" && record.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const result = validateInquiry(input);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  const email = await sendInquiryEmail(result.data);
  if (!email.ok) {
    return NextResponse.json(
      { ok: false, message: "We couldn't send your request. Please try again." },
      { status: 500 },
    );
  }

  // Contact form leads only, and only once the email has gone out. A sheet
  // failure must not turn a successful inquiry into an error for the visitor.
  if (result.data.formType === "contact") {
    await saveContactLeadToGoogleSheet({
      name: result.data.fullName,
      email: result.data.email,
      phone: result.data.phone,
      company: result.data.organization,
      message: result.data.message,
    });
  }

  return NextResponse.json({ ok: true });
}