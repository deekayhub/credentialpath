# Documentation Index — Medical Credentialing Public Website

The public-facing marketing website for the Medical Credentialing and Payer Enrollment Platform.

This directory is the **design and build source of truth** for `credential-website` (Next.js frontend). It is informed by the backend platform requirements documented in the sibling Laravel repository at `F:\september\credential\docs`, which is the **business source of truth**.

---

## Relationship to the backend project

| Item | Backend platform (`F:\september\credential`) | Public website (`this project`) |
|---|---|---|
| Audience | Providers, Credentialing staff, Admins | Prospective provider practices and healthcare organizations |
| Purpose | Run credentialing operations | Explain services, build trust, generate inquiries |
| Stack | Laravel 13 · Blade/Livewire · Bootstrap 5 · MySQL | Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 |
| Status | Future phase (admin/portal) | **This build** — public marketing site only |

This website does **not** implement the admin panel, provider portal, auth, database, or credentialing workflow engine. Those belong to the backend platform. See `docs/19-FUTURE-BACKEND-INTEGRATION.md`.

## File index

| File | Covers | Read before |
|---|---|---|
| `README.md` | This index + terminology + markers | Anything |
| `01-PRD.md` | Product vision, goals, users, scope, non-goals | Feature decisions |
| `02-TECHNICAL-REQUIREMENTS.md` | Next.js/React/TypeScript stack rules, env vars | Any code |
| `03-ARCHITECTURE.md` | Folder structure, server/client boundaries, future API seam | Any structural change |
| `04-SITE-MAP.md` | Full route tree with purpose per page | Any route |
| `05-PAGE-SPECIFICATIONS.md` | Per-page SEO title, meta, hero, CTAs, sections | Any page |
| `06-UI-UX-DESIGN.md` | Visual direction, layout rules, interaction standards | Any UI work |
| `07-DESIGN-SYSTEM.md` | Brand, color tokens, typography, components | Any style |
| `08-COMPONENT-ARCHITECTURE.md` | Component inventory and data contracts | Any component |
| `09-CONTENT-STRATEGY.md` | Voice, claims policy, content sourcing | Any copy |
| `10-SEO-STRATEGY.md` | Metadata, sitemap, robots, OG strategy | Any SEO |
| `11-INQUIRY-FORM.md` | Form fields, validation, states | The inquiry form |
| `12-EMAIL-FLOW.md` | Email pipeline, SMTP abstraction | The email route |
| `13-ACCESSIBILITY.md` | WCAG 2.1 AA checklist | Any interactive UI |
| `14-PERFORMANCE.md` | Core Web Vitals targets and techniques | Any optimization |
| `15-SECURITY.md` | Input handling, spam protection, secrets | The email endpoint |
| `16-RESPONSIVE-DESIGN.md` | Breakpoints and mobile behavior | Any responsive work |
| `17-DEVELOPMENT-PLAN.md` | Build phases and acceptance checks | The plan itself |
| `18-OPEN-QUESTIONS.md` | Items requiring business confirmation | Blocked or flagged work |
| `19-FUTURE-BACKEND-INTEGRATION.md` | How a Laravel/API backend plugs in later | Architecture decisions |
| `20-REFERENCE-WEBSITE-ANALYSIS.md` | TLSCred reference review: useful/not-copied | Content decisions |
| `REQUIREMENTS-TRACEABILITY.md` | Requirement → page → section → component → test | Coverage checks |

## Requirement markers

- `[CONFIRMED FROM BUSINESS SOURCE]` — stated in the backend platform docs / business requirements (see `F:\september\credential\docs\01-PRD.md`), which trace to the Credentialing PPT.
- `[REFERENCE-INSPIRED]` — pattern/idea taken as inspiration from tlscred.com without copying content.
- `[PROPOSED]` — design or content proposal by this build; needs business approval.
- `[REQUIRES BUSINESS CONFIRMATION]` — blocks finalization until the business answers.

Markers are used in this documentation. Production copy does not expose internal markers.

## Terminology

- **Credentialing** — verifying a provider's education, training, licensure, and professional history.
- **Payer enrollment** — enrolling a provider with insurance payers so they can bill and receive payment.
- **Provider enrollment** — used interchangeably with payer enrollment in this domain.
- **Re-credentialing** — the periodic re-verification of a provider's credentials to maintain payer enrollment.
- **CAQH** — Council for Affordable Quality Healthcare; the shared provider data repository used by many payers.
- **NPI** — National Provider Identifier.
- **PECOS** — Medicare Provider Enrollment, Chain and Ownership System.
- **Availity** — a portal used to manage payer interactions.

## Core process (business source)

```
Data Collection
  → Documentation
    → Application to Payer
      → Follow Up
        → Ensure Enrollment
          → Re-credentialing
```