# 06 — UI/UX Design

## 1. Direction

Premium healthcare B2B: modern, clean, trustworthy, minimal, editorial. Strong typography, generous whitespace, subtle hierarchy. Not a generic template; not flashy.

Avoid:
- Generic bootstrap look, excessive gradients/animation, stock-template feel
- Crowded sections, too many cards, heavy decorative graphics

## 2. Layout System

- **Container:** max-width `72rem` (1152px), horizontal padding `1.5rem` mobile → `2rem` desktop.
- **Section spacing:** `py-16` mobile → `py-24` desktop; rhythm via consistent tokens.
- **Grid:** 12-column mental model; Tailwind `grid` with responsive columns.
- **Type scale:** display `text-4xl/5xl`, h1 `text-3xl/4xl`, h2 `text-2xl/3xl`, h3 `text-xl`, body `text-base/lg`, muted `text-sm`.
- **Surface contrast:** light page background (`#F8FBFE`), white cards, hairline borders (`#E3E9F0`), soft shadows on hover only.

## 3. Hero Design

Two-column on desktop: left = eyebrow, headline, description, primary CTA, secondary CTA, trust microcopy; right = a composed visual.

Right-side visual: **abstract verification/document composition** built with CSS + inline SVG (checkmark stamps, document stack, CAQH/NPI-style badges) rather than a generic stock doctor photo. `[PROPOSED]` — replaceable with photography later.

## 4. Interaction Standards

- Hover: background/border/color transitions ≤ 200ms, subtle translate on cards.
- Focus: 2px primary ring, visible.
- Reduced motion: fade/slide animations disabled; content always visible (`prefers-reduced-motion`).
- Touch targets ≥ 44px.

## 5. Navigation

- Desktop: left brand, center primary links, right CTA. Dropdown for Services (7 links).
- Mobile: overlay menu with accordion for services; CTA pinned inside menu.

## 6. Forms

- Labels above fields, required marker, helper text muted, inline error text + danger border, error summary on submit failure.
- Buttons: primary right/secondary stacked mobile.

## 7. Empty/Error States

- Form error: banner + inline field errors, values preserved.
- Server failure: retry affordance.
- 404: branded page with CTA.

## 8. Content Hierarchy per Section

Section = eyebrow (small caps, primary color) + heading + subcopy + supporting content. CTA placement after high-value sections, never twice in the same fold without purpose.

## 9. Visual Language

- Icons: 24px stroke icons, 1.5 stroke width, consistent set.
- Badges: payer/service tags, pill style.
- Numbers/steps: large outlined numerals (01–06) for the process timeline.
- Images: none (or optional photography) — abstract compositions keep zero-network-weight hero and consistent art direction `[PROPOSED]`.