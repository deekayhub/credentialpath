# Requirements Traceability

Map: Business requirement → Page → Section → Component → Content → SEO → Test.

Legend: page/section/component/SEO links to this codebase; content links to `content/*`; "Test" = lint/build/manual QA.

## Core business requirements

| # | Business requirement | Page(s) | Section | Component | Content | SEO | Test |
|---|---|---|---|---|---|---|---|
| R1 | Explain credentialing & payer enrollment services | Home, Services, 7 detail pages | Services grid + detail layout | ServiceCard, ServiceGrid, ServicePage | `content/services.ts` | Services titles/descriptions | Routes 200; lint/build |
| R2 | List supported payers (commercial + governmental + reg services) | `/payers`, Home | Payers section | PayerGrid, PayerPreview | `content/payers.ts` | Payers page metadata | Content categories render |
| R3 | Describe 6-stage process | `/how-it-works`, Home | Process timeline | ProcessTimeline, ProcessPreview | `content/process.ts` | How-it-works metadata | Timeline renders 6 steps |
| R4 | Re-credentialing coverage | Re-Credentialing page, Home, /payers | Re-cred service + ongoing support | ServicePage | `content/services.ts` (re-credentialing) | Re-cred page metadata | Route + content |
| R5 | CAQH/NPI/PECOS/Availity support | CAQH, NPI, PECOS pages + /payers | Service detail + registration group | ServicePage, PayerGrid | `content/services.ts`, `content/payers.ts` | Service metadata | Routes render |
| R6 | Generate inquiries ("Get Started") | `/request-credentialing`, `/contact`, Home | Inquiry form / CTA band | InquiryForm, CtaSection | `content/site.ts` | noindex thank-you | Form POST → 200/redirect; error states |
| R7 | Email-based inquiry flow | Thank You | Confirmation section | ThankYou page | `content/site.ts` | noindex | POST /api/inquiry via transports |
| R8 | FAQ + Contact pages | `/faq`, `/contact` | FAQ accordion, short form | Accordion, InquiryForm (short) | `content/faqs.ts` | FAQ/Contact metadata | Accordion fully accessible |
| R9 | SEO-friendly & indexable | All public pages | Metadata, sitemap, robots, OG | RootLayout metadata; sitemap.ts; robots.ts | `content/seo.ts` | Unique title/desc per page | sitemap lists all routes |
| R10 | Public site must not expose internal data / PHI | All forms | No-PHI instruction | InquiryForm | `content/site.ts` | — | No PHI prompts; no sensitive fields |
| R11 | Trust without fabricated stats | Home, Why Us, About | Differentiators | Differentiators, TrustBar | `content/answers.ts` | — | Copy audit: no fabricated stats |
| R12 | Architecture ready for future backend | All | lib/email seam | transport interface | — | — | `sendInquiryEmail` contract stable |

## Website goals traceability

| Goal | Requirement(s) | Evidence |
|---|---|---|
| First-screen clarity | R1, R3 | Hero answers what/who/why/next |
| Conversion | R6, R7 | Persistent CTA + full form |
| Trust | R11, R2 | Qualitative differentiators + transparent payer list |
| Speed/accessibility/mobile | docs/14/13/16 | Server Components, WCAG checklist, responsive checks |
| Future integration | R12 | docs/19 seams |

## QA checklist index

- `npm run lint` passes (Phase 21).
- `npm run build` passes.
- All `docs/04` routes return 200 in a local run (`next start`).
- Form: success → /thank-you; validation errors inline; server error banner; honeypot/rate-limit safe.
- Mobile menu opens/closes with a11y wiring; reduced-motion respected.
- Metadata: every page unique title + description; OG fallback; sitemap/robots present.