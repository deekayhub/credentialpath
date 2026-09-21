# 15 — Security

Scope: public marketing site + one inquiry endpoint. No auth, no database, no PHI.

## 1. Inquiry Endpoint Hardening (`POST /api/inquiry`)

- **Server-side validation only is authoritative**; client validation is UX.
- Honeypot field; reject silently (pretend success) — no extra CPU on bots.
- Rate limit per IP (in-memory window, e.g. 3/15 min) → 429 `[PROPOSED]`.
- `FORM_SECRET` HMAC challenge token rendered in the form, verified server-side `[PROPOSED]`.
- Minimum-form-age check (bots submit instantly) `[PROPOSED]`.
- Body size cap (e.g. 64kb), JSON parse guarded.
- Timeout guard on SMTP send.

## 2. Secrets

- SMTP credentials only in `.env.local` (gitignored). Never `NEXT_PUBLIC_` for secrets.
- Reject commits that include `.env.local`/credential patterns.

## 3. User Input

- No reflection of user HTML into the page (React escapes by default).
- Emails constructed from validated plain fields only; no HTML injection into mail headers (reject CR/LF in fields; header-safe encoding).
- Trim + length-limit all fields.

## 4. No PHI

- Form instructs users not to submit sensitive IDs. No PHI fields exist.
- Do not log message bodies beyond field names.

## 5. Headers (production deployment)

`Content-Security-Policy` basics, `X-Content-Type-Options: nosniff`, `Referrer-Policy`. Applied via hosting platform `[PROPOSED]` unless in-app.

## 6. Dependencies

No new packages ⇒ small supply-chain surface. `next`/React receive security updates via normal upgrades. Pin via package-lock (already present).

## 7. Rate & Error Logging

Structured logs; never log full SMTP credentials or raw error internals to the client.