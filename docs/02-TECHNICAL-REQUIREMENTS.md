# 02 — Technical Requirements

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Node 20.9+ `[CONFIRMED]`

## 1. Existing Project Baseline

The repository is a `create-next-app` Next.js 16.3.5 project. Verified:

- `next: 16.3.5`, `react: 19.2.8`, `react-dom: 19.2.8`
- `typescript: ^5`, strict mode on
- `tailwindcss: ^4` + `@tailwindcss/postcss` (PostCSS plugin configured)
- `eslint: ^9` with `eslint-config-next` flat config; lint via `npm run lint` (= `eslint`) — `next lint` is removed in Next 16
- Path alias `@/*` → project root
- App Router at `app/`, global styles at `app/globals.css`

## 2. Next.js 16 Conventions (breaking changes to heed)

- **Async request APIs:** `params`, `searchParams`, `cookies()`, `headers()` are async only. Await them.
- **Turbopack** is default for `dev`/`build`.
- Typed route props helpers: `PageProps<'/route'>`, `LayoutProps<'/route'>`, `RouteContext<'/route'>` are global.
- `next/image`: local images require width/height; default usable qualities.
- Metadata API (`generateMetadata`, static `metadata`) unchanged and used throughout.
- Route Handlers (`route.ts`) for the email endpoint; POST handlers are never cached.
- `sitemap.ts` and `robots.ts` file conventions generate the SEO files.

## 3. Dependencies Policy

No new runtime dependencies unless required and justified:

- **No icon library.** Use inline SVG icons (deterministic, tree-shaken, light). Justification: zero dependency, controlled design.
- **No email client library.** Use Node built-in `node:net` SMTP client for the MVP email transport, behind an abstraction. Justification: standard library only, swappable later. `[PROPOSED]`
- **No animation library.** CSS transitions + a small intersection-observer React hook. Justification: minimal JS.
- **No form library.** Native React form state + server-side validation. Justification: small form, avoid bundle weight.

If the business later needs transactional email at scale, replace the transport with Nodemailer/Resend/SMTP service behind the same interface (see `docs/12`).

## 4. Environment Variables

| Variable | Required | Notes |
|---|---|---|
| `CONTACT_EMAIL` | Yes (fallback documented) | Destination inbox for inquiries |
| `SMTP_HOST` | No | SMTP server for sending inquiries |
| `SMTP_PORT` | No | Default 587 |
| `SMTP_USER` | No | SMTP auth user |
| `SMTP_PASSWORD` | No | SMTP auth password — never commit |
| `SMTP_SECURE` | No | TLS on/off (default true for 465, false for 587) |
| `CONTACT_PHONE` | No | Phone shown only if set |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical base URL (default `http://localhost:3000`) |
| `FORM_SECRET` | No | Server-side HMAC for form signing (production hardening) |

Create `.env.local` from `.env.example`. Never commit `.env.local`.

## 5. Scripts

- `npm run dev` — dev server
- `npm run build` — production build (Turbopack)
- `npm run start` — serve build
- `npm run lint` — ESLint

## 6. Server Components by Default

Static marketing pages render as Server Components. Only these are client components:

- Header mobile menu toggle
- Inquiry form (validation + submit state)
- Accordion (FAQ) — `[PROPOSED]` plain `<details>/<summary>` avoids JS; prefers progressive enhancement
- Reveal animation observer (optional, respects reduced motion)

## 7. TypeScript Rules

- Strict mode (inherited). No `any` without justification.
- Content lives in typed modules (`content/*.ts`) so a CMS/API can replace them later.
- Shared types in `lib/types.ts` (or per-module type files).