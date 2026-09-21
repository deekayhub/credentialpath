# 09 — Content Strategy

## 1. Voice

Professional, human, plain-English. Confident but not hyperbolic. Healthcare-literate without jargon walls. No marketing fluff, no fabricated data, no guarantees.

## 2. Claims Policy

| Claim type | Policy |
|---|---|
| 6-stage process, services, payer list | `[CONFIRMED FROM BUSINESS SOURCE]` — use as-is |
| "Faster onboarding / fewer lapses" | Set up as problems-benefits, framed as outcomes of the process, not quantified stats. `[PROPOSED]` |
| Numbers/statistics (providers served, success rates, years) | **Never** include without business confirmation |
| Compliance (HIPAA, SOC 2, etc.) | Do not claim. Use neutral phrasing: "We keep provider documentation organized and confidential" `[PROPOSED]` |
| Payer relationships / guaranteed enrollment | Never. Use "support with payer enrollment" |
| Response times | No response-time promises (e.g. "within 24h") unless confirmed |

## 3. Sourcing & Markers

Every doc-level claim carries a marker. Production copy carries the confident, final phrasing only.

| Marker | Meaning |
|---|---|
| `[CONFIRMED FROM BUSINESS SOURCE]` | Stated in backend platform docs (trace to Credentialing PPT) |
| `[REFERENCE-INSPIRED]` | Pattern from tlscred.com, rewritten fresh |
| `[PROPOSED]` | This build's proposal |
| `[REQUIRES BUSINESS CONFIRMATION]` | Must be answered before go-live |

## 4. Hero Copy Direction (Home)

- Eyebrow: `Provider Credentialing · Payer Enrollment · Re-Credentialing`
- H1 (working): "Get Your Providers Credentialed and Enrolled With Payers — On Schedule"
- Subcopy: who we help + why it matters (avoid months-long billing delays), invite getting started.
- Approval: `[PROPOSED]` — refine with business.

## 5. Tone of Each Page

| Page | Angle |
|---|---|
| Home | Benefit-led: from data collection to enrollment |
| Services | Clear explanation + what's included |
| Payers | Transparency: who we work with, list not exhaustive |
| How It Works | Process confidence: tracked, step-by-step |
| Why Us | Trust: accountability, organization, follow-through |
| FAQ | Direct answers, no evasion |
| Contact / Request | Ease + low-friction + no-PHI guidance |

## 6. Standard CTA Language

- "Request Credentialing"
- "Explore Services"
- "Talk With Our Team"
- "Start Your Enrollment"
- Avoid "Learn More" alone unless space-constrained.

## 7. Content Modules

All copy lives in `content/*`:
- `site.ts` — brand, tagline, contact
- `services.ts` — 7 services (full copy)
- `payers.ts` — catalog
- `process.ts` — 6 stages
- `faqs.ts` — FAQ categories
- `answers.ts` — Why-us / differentiators / trust copy
- `seo.ts` — defaults + helper

## 8. Editing Gate

Legal pages (`/privacy-policy`, `/terms`) contain neutral baseline language `[PROPOSED]` and must be reviewed by the business owner before launch. `[REQUIRES BUSINESS CONFIRMATION]`.