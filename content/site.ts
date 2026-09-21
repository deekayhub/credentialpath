export const site = {
  /** [PROPOSED] working brand name — confirm with business (QQ-01). */
  name: "CredentialPath",
  tagline: "Medical credentialing and payer enrollment services",
  description:
    "CredentialPath helps physicians, advanced practitioners, practices, and medical groups through the full credentialing lifecycle — data collection, documentation, payer enrollment, follow-up, and re-credentialing.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  /** Configure via env: CONTACT_EMAIL. Fallback is a proposed support address. */
  contactEmail: process.env.CONTACT_EMAIL ?? "inquiries@credentialpath.com",
  /** Configure via env: CONTACT_PHONE. Rendered only when set. */
  contactPhone: process.env.CONTACT_PHONE?.trim() || null,
  privacyEmailNote:
    "Your information is used only to respond to your inquiry and is never sold.",
};

export const navigation = [
  { label: "Services", href: "/services", children: [
    { label: "Provider Credentialing", href: "/services/provider-credentialing" },
    { label: "Payer Enrollment", href: "/services/payer-enrollment" },
    { label: "Provider Enrollment", href: "/services/provider-enrollment" },
    { label: "Re-Credentialing", href: "/services/re-credentialing" },
    { label: "CAQH", href: "/services/caqh" },
    { label: "NPI", href: "/services/npi" },
    { label: "PECOS", href: "/services/pecos" },
  ]},
  { label: "Payers", href: "/payers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Us", href: "/why-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceOptions = [
  { value: "Provider Credentialing", label: "Provider Credentialing" },
  { value: "Payer Enrollment", label: "Payer Enrollment" },
  { value: "Provider Enrollment", label: "Provider Enrollment" },
  { value: "Re-Credentialing", label: "Re-Credentialing" },
  { value: "CAQH", label: "CAQH" },
  { value: "NPI", label: "NPI" },
  { value: "PECOS", label: "PECOS" },
  { value: "Other", label: "Other" },
];

export const providerTypeOptions = [
  { value: "MD / DO", label: "MD / DO" },
  { value: "Nurse Practitioner (NP)", label: "Nurse Practitioner (NP)" },
  { value: "Physician Assistant (PA)", label: "Physician Assistant (PA)" },
  { value: "CRNA", label: "CRNA" },
  { value: "Medical Practice / Group", label: "Medical Practice / Group" },
  { value: "Other", label: "Other" },
];

export const stateOptions = [
  { value: "AL", label: "Alabama" }, { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" }, { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" }, { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" }, { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" }, { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" }, { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" }, { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" }, { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" }, { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" }, { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" }, { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" }, { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" }, { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" }, { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" }, { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" }, { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" }, { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" }, { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" }, { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" }, { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" }, { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" }, { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" }, { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" }, { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" }, { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" },
];

export const fieldDefinitions: { full: import("@/content/types").InquiryField[]; short: import("@/content/types").InquiryField[] } = {
  full: [
    { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "Jane Smith, MD", autoComplete: "name", maxLength: 120 },
    { name: "email", label: "Work email", type: "email", required: true, placeholder: "you@practice.com", autoComplete: "email", maxLength: 200 },
    { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "(555) 000-0000", autoComplete: "tel", maxLength: 30 },
    { name: "organization", label: "Practice / organization", type: "text", required: false, placeholder: "Practice name", autoComplete: "organization", maxLength: 160 },
    { name: "providerType", label: "Provider type", type: "select", options: providerTypeOptions, placeholder: "Select a provider type" },
    { name: "specialty", label: "Specialty", type: "text", required: false, placeholder: "e.g., Family Medicine", maxLength: 120 },
    { name: "state", label: "State", type: "select", options: stateOptions, placeholder: "Select a state" },
    { name: "services", label: "Services you need", type: "checkbox", options: serviceOptions },
    { name: "preferredContact", label: "Preferred contact method", type: "radio", options: [{ value: "Email", label: "Email" }, { value: "Phone", label: "Phone" }] },
    { name: "message", label: "Tell us about your needs", type: "textarea", required: false, placeholder: "A short overview helps us prepare a helpful first call.", maxLength: 2000, helper: "Please do not include Social Security numbers or other sensitive patient or provider identifiers." },
  ],
  short: [
    { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "Jane Smith, MD", autoComplete: "name", maxLength: 120 },
    { name: "email", label: "Work email", type: "email", required: true, placeholder: "you@practice.com", autoComplete: "email", maxLength: 200 },
    { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "(555) 000-0000", autoComplete: "tel", maxLength: 30 },
    { name: "organization", label: "Practice / organization", type: "text", required: false, placeholder: "Practice name", autoComplete: "organization", maxLength: 160 },
    { name: "preferredContact", label: "Preferred contact method", type: "radio", options: [{ value: "Email", label: "Email" }, { value: "Phone", label: "Phone" }] },
    { name: "message", label: "Message", type: "textarea", required: false, placeholder: "How can we help?", maxLength: 2000, helper: "Please do not include Social Security numbers or other sensitive patient or provider identifiers." },
  ],
};