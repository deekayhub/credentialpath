import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Data Collection",
    summary:
      "We gather the provider's identity, contacts, licensing, education, training, and work history through a structured intake.",
    details: [
      "Structured provider intake that covers what payers actually ask for",
      "Demographics, education, training, and professional history",
      "License, certification, and DEA information where applicable",
      "Clear checklist so nothing is silently left out",
    ],
  },
  {
    step: "02",
    title: "Documentation",
    summary:
      "Supporting documents are requested, collected, and organized — with completeness tracked against each payer's requirements.",
    details: [
      "Document request lists mapped to payer and provider type",
      "Collection organized by document type with status tracking",
      "Expiry dates captured so renewals are visible",
      "One complete packet instead of scattered emails",
    ],
  },
  {
    step: "03",
    title: "Application to Payer",
    summary:
      "Enrollment applications are prepared from the completed credential and submitted through the applicable payer process.",
    details: [
      "Payer-specific preparation with consistent provider data",
      "Document packaging matching each payer's expectations",
      "Submission through the applicable portal or channel",
      "Reference numbers and submission details recorded",
    ],
  },
  {
    step: "04",
    title: "Follow Up",
    summary:
      "Applications are tracked through review — questions answered, corrections handled, and the file kept moving.",
    details: [
      "Scheduled follow-up so applications don't sit in-review",
      "Corrections and documentation requests handled quickly",
      "Communication with payers logged and organized",
      "Status visible to you at every step",
    ],
  },
  {
    step: "05",
    title: "Ensure Enrollment",
    summary:
      "We confirm the enrollment is active and effective so the provider can begin billing that payer.",
    details: [
      "Enrollment confirmation verified with the payer",
      "Effective dates recorded",
      "Billing-readiness confirmed with your team",
      "Rolled into the maintenance cycle for the future",
    ],
  },
  {
    step: "06",
    title: "Re-Credentialing",
    summary:
      "Credential and enrollment cycles are tracked so renewals happen before coverage lapses.",
    details: [
      "Expiration and re-credentialing cycle tracking",
      "Advance reminders for licenses, certifications, and enrollments",
      "Updated documentation collected and re-submitted on schedule",
      "Reimbursement protected from credential lapses",
    ],
  },
];

export const processIntro = {
  eyebrow: "The Process",
  title: "A six-stage process, managed end to end",
  description:
    "Credentialing is a sequence, not a single event. Each stage builds on the one before it — and each one can stall the whole process if it's left to chance. We run all six stages as one coordinated effort, so providers move from data collection to confirmed enrollment without the usual gaps.",
};