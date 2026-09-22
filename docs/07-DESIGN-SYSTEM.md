# 07 — Design System

Brand (proposed): **AKSCredential** — medical credentialing & payer enrollment services.
Visual tone: professional, clinical-calm, trustworthy. No playful accents.

## 1. Brand Name Handling

`[PROPOSED]` — "AKSCredential" is a working brand used throughout this build. It is configurable in `content/site.ts`. Business must confirm the final brand/domain before launch.

## 2. Color Tokens (Tailwind 4 `@theme`)

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#0B5EA8` | Primary buttons, links, eyebrow text, active nav, focus |
| `--color-primary-dark` | `#084A86` | Hover |
| `--color-primary-light` | `#E8F1FA` | Soft primary backgrounds, icon chips |
| `--color-secondary` | `#2E7D32` | Success/verified accents (sparingly) |
| `--color-danger` | `#C62828` | Errors |
| `--color-ink` | `#12263A` | Headings (dark text) |
| `--color-body` | `#40566E` | Body copy |
| `--color-muted` | `#64748B` | Secondary text |
| `--color-surface` | `#FFFFFF` | Cards, surfaces |
| `--color-canvas` | `#F7FAFD` | Page background |
| `--color-line` | `#E3E9F0` | Borders/dividers |
| `--color-callout` | `#0F2C4C` | Dark CTA band background |

Contrast check: primary `#0B5EA8` on white = 5.9:1 ✓; ink on white ✓; muted `#64748B` on white = 4.6:1 ✓.

## 3. Typography

- **Display/headings:** Geist Sans (bundled via `next/font`), 600 weight, tracking `-0.02em`, line-height 1.1–1.2.
- **Body:** Geist Sans 400, 1.5–1.6 line-height.
- Monospace only where literal (NPI examples) using Geist Mono.
- Scale: display 2.5–3rem / h1 2–2.5rem / h2 1.5–1.875rem / h3 1.25rem / body 1rem / small 0.875rem / caption 0.75rem.

## 4. Buttons

- Size lg: h-12 px-6; md: h-11 px-5; sm: h-9 px-4. Radius 8px. Font 600.
- Primary: filled `primary`, white text, hover `primary-dark`.
- Secondary: 1px `line` border, ink text, hover border-primary + text-primary.
- Ghost: text-only, hover text-primary.
- Focus: 2px ring `primary`/40.

## 5. Cards

White surface, 1px `line` border, radius 12px, padding 1.5rem, hover: border-primary/30 + soft shadow + translate-y-[-2px].

## 6. Badges

Pill radius-full, 0.75rem, 500 weight. Variants: `primary-light` text-primary, `neutral` canvas text-body, `amber` (attention).

## 7. Forms

Label 0.875rem 500 ink. Input: h-11, 1px line border, radius 8px, focus ring primary/35 + border primary. Error: danger border + danger text. Helper: muted 0.8125rem.

## 8. Section Rhythm

Section eyebrow (uppercase 0.75rem tracking-wide primary 600), heading h2, body copy muted. Spacing tokens: `space-y-*` with `py-16 md:py-24`.

## 9. Dark CTA Band

`--color-callout` background, white heading, primary-light accent text, primary button (lifted), pattern via CSS radial gradients.

## 10. Radius & Shadow Tokens

- Radius: sm 6px / md 8px / lg 12px / xl 16px.
- Shadow `--shadow-soft`: `0 1px 2px rgb(15 44 76 / 0.06), 0 8px 24px -12px rgb(15 44 76 / 0.18)`.

## 11. Accessibility Baseline

- Text contrast ≥ 4.5:1 (verified above).
- Touch targets ≥ 44px. Visible focus everywhere.
- Reduced-motion support.

## 12. Fonts & Assets

Geist via `next/font/google`. No external images in MVP — all visuals are CSS/SVG compositions. Public assets folder reserved for future photography/logos.