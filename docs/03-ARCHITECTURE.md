# 03 — Architecture

## 1. Conceptual Structure

```
app/            → Routes (pages, layouts, api)
components/     → Reusable React components
content/        → Typed business content (site, services, payers, faqs, process)
lib/            → Non-visual logic (email, validation, utils)
public/         → Static assets (images)
docs/           → This documentation
```

## 2. Rationale

- **Server Components by default**: marketing pages are static and fast.
- **Content modules**: business copy is separated from UI so a future API/CMS (or the Laravel backend) can provide it without re-rendering components.
- **Future API seam**: the email "transport" is behind an interface so the Laravel backend can later own inquiries (see `docs/19`).

## 3. Proposed Folder Tree

```
app/
  layout.tsx                 → root layout (html/body, fonts, metadata)
  globals.css                → Tailwind 4 + design tokens
  page.tsx                   → Home
  about/page.tsx
  services/
    page.tsx
    layout.tsx               → services section layout + breadcrumb
    provider-credentialing/  → page.tsx per service (data-driven from content/services.ts)
    payer-enrollment/
    provider-enrollment/
    re-credentialing/
    caqh/
    npi/
    pecos/
  payers/page.tsx
  how-it-works/page.tsx
  why-us/page.tsx
  faq/page.tsx
  contact/page.tsx
  request-credentialing/page.tsx
  thank-you/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
  api/inquiry/route.ts       → email endpoint (POST)

components/
  layout/       Header.tsx, Footer.tsx
  navigation/   MobileMenu.tsx
  sections/     Hero, TrustBar, CTASection, PageHero, ContactSection, WhyUs, FaqPreview
  services/     ServiceCard, ServiceGrid, ServiceProcess, ServiceFaq
  forms/        InquiryForm.tsx, Field components
  ui/           Button, SectionHeading, Container, Badge, Breadcrumbs, Accordion, Reveal
  icon.tsx      (single inline SVG icon set)

content/
  site.ts, navigation.ts, services.ts, payers.ts, process.ts, faqs.ts, answers.ts, seo.ts

lib/
  email/
    types.ts        → InquiryPayload, EmailTransport interface
    transports/
      smtp.ts       → built-in node:net SMTP transport
      log.ts        → dev/fallback transport (logs instead of sending)
    index.ts        → sendInquiryEmail(payload)
  validation/
    inquiry.ts      → zod-less schema + validator
  utils.ts
```

## 4. Server / Client Boundary

- Server Components: all pages, layout, section components, footer, header shell, content reads.
- Client Components: `InquiryForm`, mobile menu toggle, `Reveal` (motion) — each isolated with `"use client"`.

## 5. Data Flow — Inquiry

```
Page (server) ── renders ─▶ InquiryForm (client)
                                 │ POST /api/inquiry (fetch)
                                 ▼
                       Route handler (server, node runtime)
                                 │ validate → honeypot → rate-limit → transport
                                 ▼
                       EmailTransport.sendInquiryEmail(payload)
                                 ▼
                        Business inbox (CONTACT_EMAIL)
                                 ▼
                       200 JSON { ok:true } → client redirects to /thank-you
```

## 6. Routing Model

Static routes for all pages. `/api/inquiry` is a POST-only route handler (never cached).

## 7. Anti-Patterns

- No business logic in pages; pages compose components + content.
- No hard-coded copy in components; content comes from `content/*`.
- No client-side data fetching on marketing pages.
- No secrets in client code.