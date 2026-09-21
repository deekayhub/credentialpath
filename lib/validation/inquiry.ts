import type { InquiryPayload } from "@/content/types";

export type FieldErrors = Record<string, string[]>;

export type ValidationResult =
  | { ok: true; data: InquiryPayload }
  | { ok: false; errors: FieldErrors };

const EMAIL_RE =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const PHONE_RE = /^[0-9+()\-\s.]{7,30}$/;

const allowedServices = new Set([
  "Provider Credentialing",
  "Payer Enrollment",
  "Provider Enrollment",
  "Re-Credentialing",
  "CAQH",
  "NPI",
  "PECOS",
  "Other",
]);

const allowedProviderTypes = new Set([
  "MD / DO",
  "Nurse Practitioner (NP)",
  "Physician Assistant (PA)",
  "CRNA",
  "Medical Practice / Group",
  "Other",
]);

const allowedContact = new Set(["Email", "Phone"]);

const allowedStates = new Set(
  [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
    "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
    "VA","WA","WV","WI","WY","DC",
  ],
);

export function validateInquiry(input: unknown): ValidationResult {
  const errors: FieldErrors = {};

  if (!isRecord(input)) {
    return { ok: false, errors: { _form: ["The request could not be processed."] } };
  }

  const fullName = str(input.fullName);
  if (!fullName || fullName.length < 2 || fullName.length > 120) {
    push(errors, "fullName", "Please enter your name.");
  }

  const email = str(input.email).trim();
  if (!email) {
    push(errors, "email", "Please enter your email address.");
  } else if (email.length > 200 || !EMAIL_RE.test(email)) {
    push(errors, "email", "Please enter a valid email address.");
  }

  const phone = str(input.phone).trim();
  if (phone && !PHONE_RE.test(phone)) {
    push(errors, "phone", "Please enter a valid phone number.");
  }
  if (phone && phone.length > 30) {
    push(errors, "phone", "Phone number is too long.");
  }

  const organization = str(input.organization);
  if (organization.length > 160) {
    push(errors, "organization", "Organization name is too long.");
  }

  const providerType = str(input.providerType);
  if (providerType && !allowedProviderTypes.has(providerType)) {
    push(errors, "providerType", "Please choose a valid provider type.");
  }

  const specialty = str(input.specialty);
  if (specialty.length > 120) {
    push(errors, "specialty", "Specialty is too long.");
  }

  const state = str(input.state);
  if (state && !allowedStates.has(state)) {
    push(errors, "state", "Please choose a valid state.");
  }

  const servicesRaw = input.services;
  const services: string[] = Array.isArray(servicesRaw)
    ? servicesRaw.filter((s): s is string => typeof s === "string")
    : [];
  if (services.some((s) => !allowedServices.has(s))) {
    push(errors, "services", "One of the selected services is not valid.");
  }

  const preferredContact = str(input.preferredContact);
  if (preferredContact && !allowedContact.has(preferredContact)) {
    push(errors, "preferredContact", "Please choose a valid contact method.");
  }

  const message = str(input.message);
  if (message.length > 2000) {
    push(errors, "message", "Message is too long (max 2000 characters).");
  }

  const value: InquiryPayload = {
    fullName: fullName.trim(),
    email,
    phone: phone || undefined,
    organization: organization.trim() || undefined,
    providerType: providerType || undefined,
    specialty: specialty.trim() || undefined,
    state: state || undefined,
    services,
    preferredContact: preferredContact || undefined,
    message: message.trim() || undefined,
  };

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, data: value };
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function push(
  errors: FieldErrors,
  field: string,
  message: string,
): void {
  errors[field] = errors[field] ?? [];
  errors[field].push(message);
}

/** Field definitions keyed for the form UI error mapping. */
export function errorCount(errors: FieldErrors): number {
  return Object.values(errors).reduce((n, list) => n + list.length, 0);
}