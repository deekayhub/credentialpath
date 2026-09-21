# 16 — Responsive Design

## 1. Breakpoints (Tailwind defaults)

| Prefix | Min-width | Behavior |
|---|---|---|
| (base) | 0 (375px+ phones) | Single column; menus overlay; forms stack |
| `sm` | 640px | Two-up service options |
| `md` | 768px | Hero two-column; grid 2–3 cols; page hero centered→left |
| `lg` | 1024px | Header full nav visible; grids 3–4 cols |
| `xl` | 1280px | Max container reached; large gaps |

## 2. Mobile Rules

- Navigation → overlay menu (hamburger) with services accordion.
- Touch targets ≥ 44px; sticky header CTA remains one tap.
- No horizontal overflow: `overflow-x-hidden` guards, fluid images (`max-width:100%`), grids reflow.
- Hero: stacked; composition visual below (or hidden on smallest with graceful fallback `[PROPOSED]`).
- Forms: full-width fields; primary button full width on mobile.
- CTA band: text + button stack.
- Timeline (How It Works): vertical on mobile, alternating 2-col rows on desktop.

## 3. Tablet / Desktop

- Process timeline: numbered cards in vertical rail or alternating grid.
- Payers: grouped chips that wrap naturally.
- Header: dropdown nav for Services.

## 4. Verification

Manual checks at 375/640/768/1024/1280/1440; also rotate landscape phones. Check: no scrollbar-width change, readable type scale, CTAs visible, no overlap.