# 20 — Reference Website Analysis (TLSCred)

Reference: `https://www.tlscred.com/` — a medical billing + credentialing company site, provided as inspiration for this project. Reviewed via homepage crawl.

## 1. Useful Ideas `[REFERENCE-INSPIRED]`

| Idea | How we adapt (without copying) |
|---|---|
| Hero answer model: eyebrow + headline + subcopy + two CTAs ("what/who/why/next") | Our hero mirrors the same answer structure `[REFERENCE-INSPIRED]` |
| Trust strip under hero (compliance/credentials) | We show relevant registries (CAQH, NPI, PECOS, Medicare/Medicaid) — factual to our services, not badges we can't claim `[REFERENCE-INSPIRED]` |
| Service cards → detail pages | 7 service cards linking to dedicated pages `[REFERENCE-INSPIRED]` |
| Payer logo wall | Payer catalog grouped by category (text chips, not third-party logos) `[REFERENCE-INSPIRED]` |
| Numbered advantage cards (01–04) | Distinct 6-stage process timeline `[REFERENCE-INSPIRED]` |
| Dark CTA band near the bottom with bullet trust points | Our `CtaSection` band `[REFERENCE-INSPIRED]` |
| Footer with solution columns + legal links | Same footer anatomy `[REFERENCE-INSPIRED]` |
| Case-study/consultation framing | We use an inquiry ("Request Credentialing") rather than an audit to match our conversion goal `[REFERENCE-INSPIRED]` |

## 2. Ideas NOT Copied

| Reference element | Why excluded |
|---|---|
| RCM / medical billing / denial management services | Out of scope — this project is credentialing + enrollment only |
| Statistical claims (99.2% clean claims, $2.4M recovered, 40 specialties, <24h) | Unverified for this business; fabricating stats is prohibited |
| HIPAA-compliant / AAPC-certified / SOC 2 claims | Belong to that company; unconfirmed for ours (see `docs/09`, `docs/18` QQ-03) |
| "800+ EDI connections" claims | Unverified; we do not claim payer relationships |
| Specific page copy, headlines, logos, branding, phone/footer content | Proprietary/copied content — never reuse |
| Payer brand logos | Trademark concerns; we use plain text names from the business source |
| "Join 500+ specialized providers" | Fabricated social proof — excluded |
| Blog/Resources section | Not in scope for this phase (could be future) |

## 3. Page Structure Inspirations

| Reference | Our equivalent |
|---|---|
| Services hub → category → detail | `/services` → `/services/:slug` detail |
| States page (geographic) | Not scoped; ours is `/payers` for payer coverage instead `[PROPOSED]` |
| FAQ, Privacy, Terms, Contact | `/faq`, `/privacy-policy`, `/terms`, `/contact` |
| Schedule Demo | `/request-credentialing` |

## 4. UX / CTA Patterns `[REFERENCE-INSPIRED]`

- Persistent header CTA (ours: "Request Credentialing").
- CTA appears twice in hero (menu + hero right).
- Section-level CTA after high-value content.
- Final dark band with simple bullets + single CTA.
- Mobile-friendly stacked layouts and readable hierarchy.

## 5. Trust-Building Patterns `[REFERENCE-INSPIRED]`

The reference demonstrates *trust through specificity*. We replicate the *pattern* with truthful specifics:
- Concrete service lists ("What's included" checklists).
- Transparent payer list.
- Process clarity (steps show competence).
- Plain human copy; no gimmicks.

We deliberately do **not** copy its certifications/statistics.

## 6. Differences (This Project vs Reference)

| Axis | TLSCred | This project |
|---|---|---|
| Focus | RCM + credentialing (billing-first) | Credentialing + payer enrollment only |
| Claims | Aggressive stats + compliance badges | Qualitative, source-confirmed content |
| Visual | Photo + logo-heavy | Abstract CSS/SVG composition `[PROPOSED]` |
| Conversion | Free performance audit | Request credentialing / contact |
| Stack | Next.js (diagnosed) | Next.js 16 + Tailwind 4 + Server Components |