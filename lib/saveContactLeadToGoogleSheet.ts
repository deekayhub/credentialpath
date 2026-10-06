export type ContactLead = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
};

const TIMEOUT_MS = 5_000;

/**
 * Appends a contact form lead to Google Sheets via an Apps Script Web App.
 *
 * Server-side only: the Web App URL comes from CONTACT_LEAD_SHEET_URL and must
 * never be referenced from client code. Never throws, so a failed sheet write
 * returns false and leaves the caller's own flow (inquiry email) untouched.
 */
export async function saveContactLeadToGoogleSheet(
  lead: ContactLead,
): Promise<boolean> {
  const url = process.env.CONTACT_LEAD_SHEET_URL?.trim();
  if (!url) {
    console.warn(
      "[sheet:contact-lead] Skipped - CONTACT_LEAD_SHEET_URL is not configured.",
    );
    return false;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone ?? "",
        company: lead.company ?? "",
        message: lead.message ?? "",
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `[sheet:contact-lead] Web App responded with ${res.status}.`,
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("[sheet:contact-lead] Web App request failed.", error);
    return false;
  }
}