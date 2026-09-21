# 18 — Open Questions

Items that need business answer before go-live. Configure in `content/site.ts` when answered.

| ID | Question | Why it matters | Current assumption |
|---|---|---|---|
| QQ-01 | Brand name + domain? | All copy, metadata, OG, footer | "CredentialPath" `[PROPOSED]` |
| QQ-02 | Contact email + phone to publish? | Contact page, footer, thank-you | From env vars; phone optional |
| QQ-03 | Any compliance claims allowed (HIPAA, privacy statement specifics)? | Legal pages + trust copy | Neutral phrasing only `[PROPOSED]` |
| QQ-04 | Payer list complete? Add/remove? | `/payers` accuracy | Business-source list; "not exhaustive" note |
| QQ-05 | Any photography/logo assets? | Hero art direction | CSS/SVG composition `[PROPOSED]` |
| QQ-06 | Response-time commitment (e.g. reply by X)? | Contact expectations copy | None; no promises |
| QQ-07 | Service specialties/audience beyond practices (agencies, hospitals, locum, telehealth)? | Audience copy | Practices/groups/independent providers `[PROPOSED]` |
| QQ-08 | Require privacy-policy/terms legal review? | Legal pages | Baseline neutral text; needs review |

Blocking before launch: QQ-01, QQ-02, QQ-03, QQ-04. All others are content polish.

When answered, update `content/site.ts` + affected docs and flip markers to `[CONFIRMED]`.