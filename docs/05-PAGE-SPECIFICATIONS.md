# 05 — Page Specifications

Shared pattern for every page: `PageHero` (eyebrow, title, description, CTAs), breadcrumb on nested pages, main sections, final `CTASection`.

## Home `/`

- **SEO title:** "Medical Credentialing & Payer Enrollment Services | CredentialPath"
- **Meta description:** Explanatory, ~155 chars, conversion-oriented.
- **Hero:** Eyebrow "Provider Credentialing · Payer Enrollment · Re-Credentialing". H1 answers: what we do / who we help / why it matters. Primary CTA "Request Credentialing", secondary "Explore Services".
- **Sections:** Trust/value bar → Credentialing overview (editorial split) → Services grid → 6-stage process preview → Payers preview → Why choose us → Re-credentialing/ongoing support → FAQ preview → CTA.
- **Internal links:** to `/how-it-works`, `/services`, `/payers`, `/why-us`, `/request-credentialing`.

## About `/about`

- **Hero:** mission-focused. **Sections:** What we do (qualitative), how we work (dedicated coordination across the 6 stages), principles (clarity, accountability, timeliness), CTA.

## Services `/services`

- **Hero:** "Credentialing & Enrollment Services". **Sections:** description, ServiceGrid (7 cards), how to engage (steps), CTA.

## Service detail `/services/:slug` (reusable layout)

- **SEO:** per-service title/description from content.
- **Sections:** PageHero → Problem (why this matters) → Service explanation → What's included (checklist) → Process → Benefits → Who it's for → Related services → FAQ → CTA.
- Implemented once as a data-driven template (`app/services/[slug]/page.tsx`) OR per-page files reading shared content. Decision: **static files per service using a shared `<ServicePage>` component** to keep static generation explicit and URLs typo-safe. `[PROPOSED]`

## Payers `/payers`

- **SEO:** "Payers We Support | Medicare, Medicaid, Commercial Payers".
- **Sections:** intro with careful language ("support with payer enrollment"), grouped catalog (Governmental / Commercial / Registration services), "payer list not exhaustive" note, process recap, CTA.
- No guaranteed approval claims.

## How It Works `/how-it-works`

- **Hero:** "A Clear, Tracked Path From Data Collection to Enrollment".
- **Sections:** ProcessTimeline (6 stages with description + typical activities), why process matters, what to expect, CTA.

## Why Us `/why-us`

- **Hero:** trust-focused. **Sections:** qualitative differentiators (dedicated coordination, organized documentation, proactive follow-up, re-credentialing focus, single point of accountability), what we don't claim, CTA.

## FAQ `/faq`

- **Hero.** **Sections:** categorized FAQ accordion, "Still have questions?" → contact CTA.

## Contact `/contact`

- **Hero:** "Talk With Us". **Sections:** short inquiry form (name, email, phone, practice, message, preferred contact), direct email link, privacy note, CTA.

## Request Credentialing `/request-credentialing`

- **Hero:** "Request Credentialing". **Sections:** full inquiry form (see `docs/11`), privacy & no-PHI instruction, response expectations (no unsupported time guarantees).

## Thank You `/thank-you`

- noindex. Confirmation copy, next steps, contact info if configured, links back to services/home.

## Privacy Policy `/privacy-policy` & Terms `/terms`

- `[REQUIRES BUSINESS CONFIRMATION]` for legal specifics; neutral, factual baseline text `[PROPOSED]`.