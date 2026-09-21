# 08 — Component Architecture

## 1. Inventory

### Layout / Navigation
| Component | Type | Purpose |
|---|---|---|
| `Container` | server | Max-width wrapper + padding |
| `Header` | server (+ `MobileMenu` client) | Sticky header, nav, CTA |
| `MobileMenu` | client | Overlay navigation |
| `Footer` | server | Footer columns + contact |

### Sections
| Component | Type | Purpose |
|---|---|---|
| `PageHero` | server | Eyebrow + title + description + CTAs |
| `Hero` | server | Homepage hero + composition visual |
| `TrustBar` | server | Micro-trust row (CAQH/NPI/PECOS chips) |
| `ServiceOverview` (editorial split) | server | Text + inside list |
| `ServiceGrid` | server | Grid of `ServiceCard` |
| `ProcessPreview` | server | 6-step strip → link to /how-it-works |
| `PayerGrid` | server | Grouped payer catalog from `content/payers.ts` |
| `PayerPreview` | server | Compact strip on home |
| `Differentiators` | server | Why-us cards (qualitative) |
| `FaqPreview` | server | Top 3–4 FAQs + link |
| `CtaSection` | server | Dark band CTA |
| `ContactStrip` | server | Email/phone + CTA on contact page |

### Services
| Component | Type | Purpose |
|---|---|---|
| `ServicePage` | server | Reusable full service-detail layout |
| `ServiceCard` | server | Icon + title + summary + link |
| `Checklist` | server | "What's included" list |
| `ProcessSteps` | server | Numbered inline steps (service-level) |

### Process
| Component | Type | Purpose |
|---|---|---|
| `ProcessTimeline` | server | Vertical/desktop grid of 6 stages (strong section) |

### Forms
| Component | Type | Purpose |
|---|---|---|
| `InquiryForm` | client | Full form + submit → `/api/inquiry` |
| `Field` set (`TextField`, `SelectField`, `TextareaField`, `CheckboxGroup`) | client | Accessible labeled fields |

### UI
| Component | Type | Purpose |
|---|---|---|
| `Button` (as `LinkButton` + `button`) | server | Styled CTA/link |
| `SectionHeading` | server | Eyebrow + heading + subcopy |
| `Breadcrumbs` | server | Nested page breadcrumb |
| `Accordion` | server (details/summary) | FAQ items — no JS |
| `Badge` | server | Pill tag |
| `Icon` | server | Inline SVG set by name |
| `Reveal` | client (optional) | Subtle fade-up on scroll; disabled with reduced motion |

## 2. Data Contracts

```ts
type Service = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  icon: IconName
  pageTitle: string
  metaDescription: string
  eyebrow: string
  heroDescription: string
  problem: string[]
  explanation: string[]
  included: string[]
  process: { title: string; description: string }[]
  benefits: { title: string; description: string }[]
  audience: string[]
  related: string[]        // slugs
  faqs: { q: string; a: string }[]
}

type Payer = { name: string; category: 'governmental' | 'commercial' | 'registration'; note?: string }

type ProcessStep = { step: string; title: string; summary: string; details: string[] }

type FaqCategory = { title: string; items: { q: string; a: string }[] }

type InquiryPayload = {
  fullName: string
  email: string
  phone?: string
  organization?: string
  providerType?: string
  specialty?: string
  state?: string
  services: string[]
  preferredContact?: string
  message?: string
}
```

## 3. Composition Rules

- Pages are thin: `import { HomeSections }` composition, never logic.
- Sections receive content as props from `content/*` modules.
- No component fetches data; pages own data and pass down.
- Client components are isolated leaves (no client ancestors for server children).

## 4. Naming

- Components: PascalCase files, default export, named prop types.
- Content keys: camelCase.
- Icon names: `camelCase` enum-like union type.