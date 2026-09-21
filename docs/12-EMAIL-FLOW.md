# 12 — Email Flow

## 1. Flow

```
Visitor → /request-credentialing (or /contact)
  → client validation
    → POST /api/inquiry
      → server validation + spam checks
        → EmailTransport.sendInquiryEmail(payload)
          → SMTP → CONTACT_EMAIL inbox
      → 200 { ok: true }
    → /thank-you
```

## 2. Abstraction

`lib/email/types.ts`:

```ts
export interface EmailTransport {
  sendInquiry(payload: InquiryPayload): Promise<void>
}

export function getTransport(): EmailTransport {
  if (SMTP configured) return new SmtpTransport()
  return new LogTransport() // dev/no-op fallback
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  await getTransport().sendInquiry(payload)
}
```

`sendInquiryEmail(data)` is the single seam the UI/route depends on. A future Laravel/API backend replaces the accessor, not the callers (`docs/19`).

## 3. SMTP Transport (`lib/email/transports/smtp.ts`)

Implemented with Node built-ins (`node:net`, `node:tls`) using the SMTP client `smtp-sm`-style command flow (`EHLO`, `STARTTLS`, `AUTH LOGIN/PLAIN`, `MAIL FROM`, `RCPT TO`, `DATA`, `QUIT`), or a small custom implementation. `[PROPOSED — standard library]`

Email format: plain-text + minimal HTML body with paired fields, from `SMTP_USER` (or `<noreply@>`), to `CONTACT_EMAIL`, subject `New credentialing inquiry — {fullName}`.

## 4. Log Transport (`lib/email/transports/log.ts`)

When SMTP env vars are absent: logs the payload server-side (dev) and returns success. This keeps the site fully functional in preview/static hosting without credentials. `[PROPOSED]`

## 5. Environment Variables

`CONTACT_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_SECURE` (see `docs/02 §4`). No credentials committed; `.env.local` gitignored.

## 6. Error Handling

- Transport failure → 200 to client only if logged? **No**: return 500 with generic message, client shows retry banner. Log structured error with masked details.
- Never echo raw SMTP errors to the client.
- Timeout guard (e.g. 15 s) so the route never hangs.

## 7. Future Replacement

Keep `sendInquiryEmail` signature stable. To connect Laravel: POST payload to Laravel endpoint (and store to DB) without touching the UI. See `docs/19`.

## 8. Deliverability Notes (not commitments)

Use a real sender domain with SPF/DKIM when SMTP is configured `[REQUIRES BUSINESS CONFIRMATION for domain]`. Avoid long-trip retries on the same request; rely on the caller's retry.