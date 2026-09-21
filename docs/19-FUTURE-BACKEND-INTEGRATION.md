# 19 — Future Backend Integration

The website today has no backend. It is designed so a Laravel API (the sibling platform at `F:\september\credential`) can be connected later with minimal change.

## 1. Target Topology

```
Next.js (this site)
   │  public pages (SSR/static)
   │  inquiry form ───── POST ───▶ Next route handler (/api/inquiry)
   │                                    │ (MVP: SMTP to inbox)
   │                                    │ (future: forward to Laravel)
   ▼                                    ▼
content/* (typed modules)   Laravel API (F:\september\credential)
                                    │  inquiry_* tables → admin dashboard
                                    ▼
                               MySQL
```

## 2. Seams Already In Place

| Seam | File | Future use |
|---|---|---|
| Email transport interface | `lib/email/types.ts` | Replace getTransport with API client, or route POST to Laravel |
| `sendInquiryEmail(payload)` | `lib/email/index.ts` | Stable contract; UI unchanged |
| Typed content modules | `content/*.ts` | Swap for API/CMS fetch (payers, services, faqs) |
| Service catalog data model | `content/services.ts` | Map to backend `service` entities |
| Env-driven config | `site.ts`, `.env*` | Point API base URL when ready |

## 3. Validation Parity

Server-side validation in `lib/validation/inquiry.ts` echoes the Laravel Form Request rules (`[name,email,phone,organization,message…]`) so migrating the endpoint keeps identical behavior.

## 4. Recommended Backend Surface (for later phase)

- `POST /api/inquiries` — accept InquiryPayload (validated server-side).
- `POST /api/leads` (admin) — list/search/filter inquiries.
- `GET /api/payers`, `GET /api/services` — drive the public site content.
- Auth + roles per backend `docs/11` (Spatie permissions).
- Storage + document management belong to the backend platform, not this site.

## 5. Explicit Non-Goals (even later, unless scoped)

This marketing site will not itself host admin, portals, databases, or document storage. Those live in the Laravel platform; Next.js remains the public marketing front that may proxy selected endpoints.