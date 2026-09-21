import { site } from "./site";

export const defaultMetadata = {
  title: site.name,
  description: site.description,
};

export const pageMeta: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Medical Credentialing & Payer Enrollment Services",
    description:
      "Physician and provider credentialing, payer enrollment, re-credentialing, and CAQH, NPI, and PECOS support — from data collection to confirmed enrollment.",
  },
  "/about": {
    title: "About Us",
    description:
      "CredentialPath is a credentialing-focused service managing the full lifecycle — data collection, documentation, payer enrollment, follow-up, and re-credentialing.",
  },
  "/services": {
    title: "Credentialing & Enrollment Services",
    description:
      "Provider credentialing, payer enrollment, re-credentialing, and registration support for CAQH, NPI, and PECOS — one coordinated process.",
  },
  "/payers": {
    title: "Payers We Support",
    description:
      "Enrollment support for Medicare, Medicaid, Railroad Medicare, and commercial payers including Aetna, Cigna, Anthem, BCBS, TriCare, Humana, UnitedHealthcare, and Oxford.",
  },
  "/how-it-works": {
    title: "How The Credentialing Process Works",
    description:
      "Our six-stage credentialing process: data collection, documentation, application to payer, follow-up, enrollment confirmation, and re-credentialing.",
  },
  "/why-us": {
    title: "Why Choose CredentialPath",
    description:
      "A dedicated credentialing process with organized documentation, proactive follow-up, tracked re-credentialing, and clear accountability.",
  },
  "/faq": {
    title: "Credentialing FAQ",
    description:
      "Answers to common questions about medical credentialing, payer enrollment, CAQH, NPI, PECOS, re-credentialing, and how to work with us.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Talk with our credentialing team about provider credentialing and payer enrollment for your practice or organization.",
  },
  "/request-credentialing": {
    title: "Request Credentialing",
    description:
      "Request credentialing and payer enrollment support for your providers. Tell us your needs and we'll outline the next steps.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "How CredentialPath collects, uses, and protects information submitted through this website.",
  },
  "/terms": {
    title: "Terms of Use",
    description: "The terms that govern use of the CredentialPath website and its inquiry services.",
  },
};

export const getPageMeta = (path: string): { title: string; description: string } =>
  pageMeta[path] ?? defaultMetadata;

export const metadataBase = site.url;