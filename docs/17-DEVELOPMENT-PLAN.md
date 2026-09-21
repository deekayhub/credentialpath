# 17 — Development Plan

## Phases

| # | Phase | Deliverable | Acceptance |
|---|---|---|---|
| 1 | Analyze existing project + business source | Baseline notes | Stack verified, business docs read |
| 2 | Analyze TLSCred reference | `docs/20` | Analysis doc written |
| 3 | Documentation | `docs/*` | Internal review, traceability built |
| 4 | Design system | `globals.css` tokens, font, theme | Tokens + type scale in place |
| 5 | Global layout | RootLayout, Header, MobileMenu, Footer | All pages share chrome; mobile menu works |
| 6 | UI primitives | Button, Container, SectionHeading, Icon, Badge, Breadcrumbs, Accordion, Reveal, PageHero, CtaSection | Reusable everywhere |
| 7 | Home | Hero + all sections | First-screen clarity; all CTAs link |
| 8 | Services | `/services` + 7 detail pages | Reusable ServicePage, breadcrumbs |
| 9 | Payers | `/payers` | Grouped catalog, careful language |
| 10 | How It Works | `/how-it-works` | 6-stage timeline strong section |
| 11 | About / Why Us | `/about`, `/why-us` | Qualitative trust content |
| 12 | FAQ | `/faq` | Accordion, content from `content/faqs.ts` |
| 13 | Contact | `/contact` | Short inquiry + contact info |
| 14 | Inquiry form | `/request-credentialing` | Full form per `docs/11` |
| 15 | Email | `lib/email/*`, `api/inquiry` | end-to-end via LogTransport, optional SMTP |
| 16 | Thank You | `/thank-you` | Confirmation + next steps |
| 17 | SEO | metadata, sitemap, robots, OG | Unique titles/descriptions; sitemap lists routes |
| 18 | Accessibility review | — | Checklist `docs/13` passed |
| 19 | Responsive review | — | Checklist `docs/16` passed |
| 20 | Performance | — | `docs/14` targets |
| 21 | Final QA | — | `npm run lint` + `npm run build` pass; all routes 200; form success/error; 404 page |

## Verification Commands

```
npm run lint
npm run build
npm run start
```

Manual route check list: all `docs/04` routes, plus `/api/inquiry` POST behavior, thank-you noindex, mobile menu, form edge cases (empty, bad email, honeypot hit, rate limit).