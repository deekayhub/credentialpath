# 13 — Accessibility

Compliance target: WCAG 2.1 AA where feasible for a marketing site `[PROPOSED]`.

## 1. Structure & Semantics

- Single `<main>` per page; `<header>`, `<nav>`, `<footer>`, `<address>` landmarks.
- One `<h1>` per page; heading order sequential (h1 → h2 → h3). Sections use h2/h3 within `section`/`article`.
- Lists for nav and feature lists; `aria-current="page"` on active nav link.
- Skip link "Skip to content" as first focusable element.

## 2. Forms

- Every control labeled (`<label for>`); required marked visually + `aria-required` where needed.
- Errors: inline text `role="alert"`-ish via `aria-describedby`, error summary linking to fields, `aria-invalid` on invalid controls.
- Fieldsets/legends for checkbox and radio groups.
- Autocomplete attributes on name/email/tel/organization.

## 3. Keyboard & Focus

- All interactive elements reachable and operable by keyboard.
- Mobile menu: focus moves into dialog, Escape closes and returns focus, focus trap while open.
- Visible focus ring on all interactive elements (2px primary).
- No keyboard traps.

## 4. Color & Contrast

- All text ≥ 4.5:1 (verified tokens in `docs/07`).
- State not conveyed by color alone (icons/labels accompany status).

## 5. Motion

- `prefers-reduced-motion`: disable animations/transitions; content always visible.
- `Reveal` component: renders visible content by default; JS only adds entrance when motion is allowed.

## 6. Images & Icons

- All meaningful SVG icons carry `aria-hidden` when decorative or an accessible name when meaningful (`<title>`/`role="img"`).
- No photographic dependencies; any future images require alt text.

## 7. Content

- Plain language; abbreviations expanded on first use (CAQH, NPI, PECOS).
- Links describe destination.

## 8. QA Checklist

Semantic outline, tab through entire site, no focus loss, contrast samples, reduced-motion emulation, screen-reader pass of hero + form + FAQ.