# 14 — Performance

## 1. Targets

- LCP < 2.5 s on 4G mobile (text hero → near-instant LCP).
- CLS < 0.1; INP < 200 ms.
- Initial JS minimal: client components only = mobile menu + inquiry form + (optional) reveal.

## 2. Techniques

| Area | Approach |
|---|---|
| Rendering | All public pages statically prerendered Server Components |
| CSS | Tailwind 4 generates only used utilities; tokens in `@theme` |
| JS budget | No third-party JS; no animation/libs; icons inline SVG |
| Fonts | `next/font/google` with `display: swap` + preload |
| Images | None in MVP (CSS/SVG art) → zero image requests; `next/image` only if photography added |
| Streaming | Not needed (static); avoid `searchParams`/dynamic APIs on content pages |
| Caching | Static assets cached; sitemap/robots static |
| DOM size | Grids and lists are small; avoid framer-level re-renders |

## 3. Measurement

- `npm run build` output review (route sizes).
- Optional Lighthouse pass in CI. Manual: DevTools network for JS payload, viewport offsetWidth === document width (no horizontal overflow).

## 4. Rules

- No analytic/tracking scripts by default (respect privacy). `[PROPOSED — add only when business requests]`
- No `use client` on content-only components.
- Debounce on-form typing not needed (native validation only).

## 5. Long-Tail

Serve headings/body split so CLS is zero; set font display swap; avoid layout-affecting animations (no big shift).