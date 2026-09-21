import type { Payer } from "./types";

export const payerCatalog: Payer[] = [
  // Governmental
  { name: "Medicare", category: "governmental" },
  { name: "Medicare Part B", category: "governmental" },
  { name: "Railroad Medicare", category: "governmental" },
  { name: "Medicaid", category: "governmental", note: "State-administered" },
  // Commercial
  { name: "Aetna", category: "commercial" },
  { name: "Cigna", category: "commercial" },
  { name: "Anthem", category: "commercial" },
  { name: "Blue Cross Blue Shield", category: "commercial" },
  { name: "TriCare", category: "commercial" },
  { name: "Humana", category: "commercial" },
  { name: "UnitedHealthcare", category: "commercial" },
  { name: "Oxford", category: "commercial" },
  // Registration services & portals
  { name: "PECOS", category: "registration" },
  { name: "CAQH", category: "registration" },
  { name: "NPI (NPPES)", category: "registration" },
  { name: "Availity", category: "registration" },
];

export const payerGroups: {
  id: Payer["category"];
  title: string;
  description: string;
}[] = [
  {
    id: "governmental",
    title: "Governmental Programs",
    description:
      "Medicare and Medicaid enrollment support, including Part B and Railroad Medicare, plus the programs' registration requirements.",
  },
  {
    id: "commercial",
    title: "Commercial Payers",
    description:
      "Enrollment support with major commercial plans, prepared to each payer's application and review requirements.",
  },
  {
    id: "registration",
    title: "Registration Services & Portals",
    description:
      "The systems payers draw from — PECOS, CAQH, NPI/NPPES, and Availity — kept accurate and current.",
  },
];

export const payerDisclaimer =
  "The payer list above is based on our current service catalog and is not intended to be exhaustive. Payer approval and enrollment decisions rest with each payer; our role is to support the preparation, submission, and follow-through of enrollment applications.";