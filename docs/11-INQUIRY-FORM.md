# 11 — Inquiry Form

Page: `/request-credentialing` (+ shorter variant on `/contact`).

## 1. Fields

| Field | Name | Type | Required | Notes |
|---|---|---|---|---|
| Full Name | `fullName` | text | Yes | ≥ 2 chars |
| Email | `email` | email | Yes | format validated |
| Phone | `phone` | tel | No | US-style validation when present |
| Practice / Organization | `organization` | text | No | |
| Provider Type | `providerType` | select | No | MD/DO, NP, PA, CRNA, Group/Practice, Other `[PROPOSED choices]` |
| Specialty | `specialty` | text | No | |
| State | `state` | select | No | US states/territories |
| Services Required | `services` | checkbox group | No | Provider Credentialing, Payer Enrollment, Provider Enrollment, Re-Credentialing, CAQH, NPI, PECOS, Other |
| Preferred Contact Method | `preferredContact` | radio | No | Email / Phone |
| Message | `message` | textarea | No | maxLength 2000 |
| Honeypot | `website` | text (hidden) | — | Spam trap; must stay empty |

No PHI requested. Form includes the instruction: "Please do not include Social Security numbers or other sensitive patient or provider identifiers."

## 2. Client-Side Validation (UX only)

- Native `required`, `type=email`, `minLength`, `maxLength`.
- Inline error messages on blur after first submit attempt.
- Disable submit while pending; show spinner text.

## 3. Server-Side Validation (authority)

`lib/validation/inquiry.ts` — pure function returning `{ ok, errors }`; enforce:
- types, lengths, email regex, optional phone/optional select enums from a whitelist
- services ⊆ allowed list
- honeypot `website` empty else reject silently (pretend success)

## 4. States

| State | UI |
|---|---|
| Idle | Empty form |
| Validating/Submitting | Button spinner "Submitting…" |
| Success | Redirect to `/thank-you` |
| Validation error | Banner + inline field errors; values preserved |
| Server error | Banner + retry; values preserved |
| Honeypot hit | Redirect to thank-you (no email) |

## 5. Anti-Spam

- Honeypot field (invisible).
- Per-IP rate limit in `lib/email` route: e.g. 3 submits / 15 min → 429 `[PROPOSED]`.
- `FORM_SECRET` HMAC token embedded at render, verified server-side `[PROPOSED]`.
- Basic timestamp check (< 3 s between render and submit ⇒ bot) `[PROPOSED]`.

## 6. Accessibility

- Visible labels, required markers, `aria-describedby` for errors/help.
- Error summary links to first invalid field.
- Checkbox group with `<fieldset><legend>`.
- Submit via keyboard; focus moves to banner on error.