import type { EmailResult, EmailTransport } from "./types";
import { SmtpTransport } from "./transports/smtp";
import { LogTransport } from "./transports/log";
import type { InquiryPayload } from "@/content/types";

const isSmtpConfigured = (): boolean =>
  Boolean(process.env.SMTP_HOST && process.env.CONTACT_EMAIL);

function buildTransport(): EmailTransport {
  if (!isSmtpConfigured()) {
    console.warn(
      "[email] SMTP not configured — set SMTP_HOST and CONTACT_EMAIL to send real mail. Falling back to LogTransport.",
    );
    return new LogTransport();
  }
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  return new SmtpTransport({
    host: process.env.SMTP_HOST as string,
    port,
    user: process.env.SMTP_USER || undefined,
    password: process.env.SMTP_PASSWORD || undefined,
    secure,
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "noreply@localhost",
    to: process.env.CONTACT_EMAIL as string,
  });
}

/**
 * The single seam the route handler depends on. Swap this implementation for
 * a Laravel/API-backed client later without touching the UI.
 */
export async function sendInquiryEmail(
  payload: InquiryPayload,
): Promise<EmailResult> {
  return buildTransport().sendInquiry(payload);
}