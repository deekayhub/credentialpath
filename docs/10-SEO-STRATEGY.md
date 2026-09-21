# 10 — SEO Strategy

## 1. Targets

Indexability: public marketing pages indexable; `/thank-you` noindex.
Primary keywords (single concepts, no stuffing): medical credentialing services, payer enrollment, provider enrollment, re-credentialing, CAQH, NPI, PECOS, credentialing for private practice.

## 2. Metadata API

- Root layout: `metadataBase` from `NEXT_PUBLIC_SITE_URL`, default title template `%s | CredentialPath`, description, OG/Twitter defaults, canonical strategy, `robots` index follow.
- Every page: unique `title` + `description` (see `content/seo.ts` and `docs/05`).
- Per-service `generateMetadata` from `content/services.ts`.

## 3. Canonical & Structuring

- Canonical = absolute route URL from `metadataBase`.
- OG image: generated `opengraph-image` (Next file convention, branded 1200×630) using `ImageResponse` `[PROPOSED]`.
- JSON-LD: `Organization` + `Service` + `FAQPage` schema on relevant pages using `<script type="application/ld+json">` in Server Components `[PROPOSED]`.

## 4. File Conventions

- `app/sitemap.ts` — all public URLs (lastModified static).
- `app/robots.ts` — allow all; disallow `/thank-you`, `/api`.
- `app/opengraph-image.tsx` — generator for branded OG image.

## 5. On-Page SEO

- Single H1 per page; heading hierarchy sequential.
- Semantic landmarks: `header/nav/main/footer`, `address`.
- Descriptive link text ("Request credentialing" not "click here").
- Breadcrumbs on nested pages (`/services/x`).
- Internal linking: services ↔ payers ↔ how-it-works ↔ request.
- Alt/aria handled; decorative SVGs `aria-hidden`.

## 6. Performance Signals

Core Web Vitals treated as SEO: static prerender, minimal JS, no CLS (set image/font metrics), fast LCP (server text).

## 7. Non-Goals

No keyword stuffing, doorway pages, or auto-generated thin content.