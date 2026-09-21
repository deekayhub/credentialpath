# 04 — Site Map

## 1. Full Route Tree

| URL | Page | Purpose | Primary CTA |
|---|---|---|---|
| `/` | Home | Value proposition + process + services + payers + inquiry CTA | Request Credentialing |
| `/about` | About | Mission, approach, how the business works | Request Credentialing |
| `/services` | Services | Overview of all credentialing services | Explore Services |
| `/services/provider-credentialing` | Service detail | Provider credentialing explained | Request Credentialing |
| `/services/payer-enrollment` | Service detail | Payer enrollment explained | Request Credentialing |
| `/services/provider-enrollment` | Service detail | Provider enrollment explained | Request Credentialing |
| `/services/re-credentialing` | Service detail | Re-credentialing explained | Request Credentialing |
| `/services/caqh` | Service detail | CAQH profile setup/maintenance | Request Credentialing |
| `/services/npi` | Service detail | NPI registration support | Request Credentialing |
| `/services/pecos` | Service detail | PECOS enrollment support | Request Credentialing |
| `/payers` | Payers | Supported payer/registration categories | Request Credentialing |
| `/how-it-works` | How It Works | 6-stage process timeline | Request Credentialing |
| `/why-us` | Why Us | Qualitative differentiators | Request Credentialing |
| `/faq` | FAQ | Common questions and answers | Request Credentialing |
| `/contact` | Contact | Direct contact + short inquiry | Send Inquiry |
| `/request-credentialing` | Inquiry | Full "Request Credentialing" form | Submit Request |
| `/thank-you` | Thank You | Post-submission confirmation | Explore Services |
| `/privacy-policy` | Legal | Privacy practices | Contact |
| `/terms` | Legal | Terms of use | Contact |
| `/not-found` | 404 | Route fallback | Explore Services |

## 2. Navigation (header)

Primary: Services (dropdown), Payers, How It Works, Why Us, FAQ, Contact.
CTA button: **Request Credentialing**.

## 3. Footer Navigation

- Services column (all 7 service pages)
- Company column: About, Why Us, How It Works, FAQ
- Legal column: Privacy Policy, Terms
- Contact block: email (from env), phone (only if configured)

## 4. Sitemap / Robots

- `sitemap.ts` lists all public routes (uses `NEXT_PUBLIC_SITE_URL`).
- `robots.ts` allows all, points to sitemap.
- `thank-you` excluded from index (noindex via metadata).
- All URLs canonicalized.

## 5. Notes

- Service pages are data-driven from `content/services.ts` → one slug per service.
- No dynamic routes needed for the marketing site.