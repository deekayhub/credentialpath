export type IconName =
  | "shieldCheck"
  | "building"
  | "users"
  | "refresh"
  | "layers"
  | "idCard"
  | "fileCheck"
  | "globalNetwork"
  | "clipboardList"
  | "document"
  | "searchCheck"
  | "badgeCheck"
  | "check"
  | "arrowRight"
  | "chevronDown"
  | "phone"
  | "mail"
  | "clock"
  | "menu"
  | "close"
  | "mapPin"
  | "calendar"
  | "quote"
  | "chevronRight";

export type UserField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  placeholder?: string;
  helper?: string;
  maxLength?: number;
  autoComplete?: string;
};

export type SelectOption = { value: string; label: string };

export type SelectField = {
  name: string;
  label: string;
  type: "select";
  options: SelectOption[];
  placeholder?: string;
};

export type CheckboxField = {
  name: string;
  label: string;
  type: "checkbox";
  options: SelectOption[];
};

export type RadioField = {
  name: string;
  label: string;
  type: "radio";
  options: SelectOption[];
};

export type InquiryField =
  | UserField
  | SelectField
  | CheckboxField
  | RadioField;

export type InquiryPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  providerType?: string;
  specialty?: string;
  state?: string;
  services: string[];
  preferredContact?: string;
  message?: string;
};

export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  icon: IconName;
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroDescription: string;
  problem: string[];
  explanation: string[];
  included: string[];
  process: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  audience: string[];
  related: string[];
  faqs: { q: string; a: string }[];
};

export type Payer = {
  name: string;
  category: "governmental" | "commercial" | "registration";
  note?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  summary: string;
  details: string[];
};

export type FaqItem = { q: string; a: string };

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type Anchor = { id: string; title: string; description: string; icon: IconName };