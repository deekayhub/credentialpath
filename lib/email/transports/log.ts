import type { EmailTransport, EmailResult } from "../types";
import type { InquiryPayload } from "@/content/types";

/**
 * Fallback transport used when SMTP is not configured. Logs the inquiry
 * server-side so the flow works in preview/staging without credentials.
 */
export class LogTransport implements EmailTransport {
  async sendInquiry(payload: InquiryPayload): Promise<EmailResult> {
    console.info("[inquiry:logged]", JSON.stringify({ ...payload }));
    return { ok: true };
  }
}