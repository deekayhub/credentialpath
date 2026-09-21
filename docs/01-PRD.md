# 01 — Product Requirements Document (PRD)

**Project:** CredentialPath (proposed brand) — Medical Credentialing & Payer Enrollment Public Website
**Status:** Draft for business review
**Source:** `F:\september\credential\docs\01-PRD.md` (business source of truth)

---

## 1. Product Vision

A premium, trustworthy, conversion-focused public website that explains medical credentialing and payer enrollment services, builds confidence with healthcare providers and practices, and turns visitors into qualified business inquiries.

## 2. Business Objective

Generate qualified leads (provider inquiries) for the credentialing business by making the service clear, credible, and easy to request.

## 3. Website Objective

Explain *what* the business does, *who* it helps, *why* it matters, and *how* to get started — within the first screen — then convert visitors through a professional inquiry form.

## 4. Target Users

| Audience | Role | Primary? |
|---|---|---|
| Physicians and medical providers | Need to become credentialed and enrolled to bill payers | Primary |
| Medical practices, groups, and clinics | Need their providers credentialed / re-credentialed / enrolled | Primary |
| Healthcare organizations and staffing agencies | Manage credentialing for many providers | Secondary `[PROPOSED]` |
| Practice managers / administrators | Decide which credentialing service to use | Primary |

## 5. User Problems

- Credentialing is slow, manual, and error-prone; providers wait months before they can bill.
- Documents are collected repeatedly across payers (especially via CAQH).
- No visibility into application status without phone calls and emails.
- Re-credentialing cycles lapse and interrupt payment.
- No single point of accountability for the process.

## 6. Website Goals

1. Communicate the 6-stage credentialing process clearly. `[CONFIRMED FROM BUSINESS SOURCE]`
2. Present services and supported payers accurately. `[CONFIRMED FROM BUSINESS SOURCE]`
3. Convert visitors to inquiries ("Request Credentialing"). `[PROPOSED]`
4. Be SEO-visible for credentialing/enrollment search intent. `[PROPOSED]`
5. Be fast, accessible, mobile-first. `[PROPOSED]`

## 7. Conversion Goals

- Primary: complete inquiry form (`/request-credentialing` and `/contact`).
- Secondary: contact via email (footer/contact page).
- Tertiary: navigate to a service page and return later.

## 8. Services (from business source)

`[CONFIRMED FROM BUSINESS SOURCE]`

- Provider credentialing
- Payer enrollment
- Provider enrollment
- Re-credentialing
- CAQH profile setup/maintenance
- NPI registration support
- PECOS enrollment support
- Availity registration support

## 9. Supported Payers (from business source)

`[CONFIRMED FROM BUSINESS SOURCE]` — not asserted as exhaustive.

- **Governmental:** Medicare, Medicare Part B, Railroad Medicare, Medicaid
- **Commercial:** Aetna, Cigna, Anthem, Blue Cross Blue Shield, TriCare, Humana, UnitedHealthcare, Oxford
- **Registration / Portals:** PECOS, CAQH, NPI, Availity

## 10. Page Requirements

| Page | Requirement |
|---|---|
| Home | Value proposition, process overview, services, payers, FAQ preview, CTA |
| About | Mission and approach (qualitative, no fabricated stats) |
| Services + 7 detail pages | Reusable service layout |
| Payers | Grouped payer catalog with careful language (no guarantees) |
| How It Works | 6-stage process timeline |
| Why Us | Qualitative differentiators |
| FAQ | Common questions |
| Contact | Inquiry form (name, email, phone, practice, message) |
| Request Credentialing | Full inquiry form with service checkboxes |
| Thank You | Confirmation + next-step guidance |
| Privacy / Terms | Legal pages `[PROPOSED — requires business confirmation for specifics]` |

## 11. Non-Goals

- No admin panel, provider portal, authentication, or database.
- No credentialing case management, payer application tracking, document upload, or CRM.
- No claims/billing functionality.
- No pricing (`[PROPOSED — not confirmed, QQ-01]`).
- No fabricated statistics, testimonials, or compliance certifications.

## 12. Future Expansion

Provider portal, admin dashboard, inquiry management, provider onboarding, credentialing cases — via backend integration. See `docs/19`.

## 13. Open Questions Impact

See `docs/18-OPEN-QUESTIONS.md` (QQ-01 brand, QQ-02 format of contact/phone, QQ-03 compliance claims).