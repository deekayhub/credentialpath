import type { InquiryPayload } from "@/content/types";

export interface EmailTransport {
  sendInquiry(payload: InquiryPayload): Promise<EmailResult>;
}

export type EmailResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "smtp-error" };