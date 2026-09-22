import type { Anchor } from "./types";

export const differentiators: Anchor[] = [
  {
    id: "coordinated",
    title: "One coordinated process",
    description:
      "Data collection, documentation, applications, and follow-up run as one continuous effort — not disconnected tasks spread across desks and emails.",
    icon: "clipboardList",
  },
  {
    id: "organized",
    title: "Organized, complete documentation",
    description:
      "Nothing gets lost in email threads. Every document is tracked by type, status, and expiry, so nothing silently expires or goes missing.",
    icon: "document",
  },
  {
    id: "proactive",
    title: "Proactive follow-up",
    description:
      "Applications don't sit in-review because no one called. Follow-up is a scheduled stage, not an afterthought.",
    icon: "searchCheck",
  },
  {
    id: "prevention",
    title: "Re-credentialing built in",
    description:
      "Credential and enrollment cycles are tracked from day one, so renewals happen before coverage lapses — protecting reimbursement continuity.",
    icon: "refresh",
  },
  {
    id: "accountability",
    title: "A clear point of accountability",
    description:
      "Providers and practices always know who owns each file and what comes next. Credentialing is our focus, not a side task.",
    icon: "shieldCheck",
  },
  {
    id: "transparency",
    title: "Transparent about what we can and can't do",
    description:
      "We can't guarantee a payer's approval, and we won't claim otherwise. What we commit to is complete, accurate preparation and persistent follow-through.",
    icon: "badgeCheck",
  },
];

export const whyIntro = {
  eyebrow: "Why AKSCredential",
  title: "Credentialing deserves a dedicated process, not a part-time scramble",
  description:
    "Most delays in credentialing are preventable. They come from missing documents, unanswered follow-ups, and cycles that lapse because nobody was tracking them. We exist to remove those failure points — with an organized, accountable process built around the credentialing workflow.",
};

export const aboutCopy = {
  intro: [
    "AKSCredential is a credentialing-focused operation built around one thing: getting providers credentialed, enrolled, and re-credentialed without the delays that typically slow the process down.",
    "Credentialing sits between a practice and its revenue. A provider who isn't enrolled can treat patients but can't bill. Every week spent on disorganized documentation and unanswered follow-ups is revenue deferred — and too often, lost.",
  ],
  sections: [
    {
      title: "What we do",
      body: "We manage the full credentialing lifecycle for providers and practices — data collection, documentation, payer enrollment applications, follow-up, enrollment confirmation, and re-credentialing. We also keep the underlying registries and portals current: CAQH, PECOS, NPI/NPPES, and Availity.",
    },
    {
      title: "How we work",
      body: "Every engagement runs through the same proven process. We take a structured intake, build a complete credential, package it for each payer, submit and track applications, follow through until enrollment is confirmed, and then keep the cycles from lapsing. Providers always know what's been done and what's next.",
    },
    {
      title: "What we don't do",
      body: "We don't sell medical billing or claims services, and we don't promise outcomes only payers can deliver. We focus on credentialing and enrollment — the stage before claims — and we're honest about what each payer controls.",
    },
  ],
  principles: [
    { title: "Clarity", body: "You should never wonder where an application stands." },
    { title: "Accountability", body: "Someone owns every file, and you know who." },
    { title: "Timeliness", body: "Cycles are tracked so deadlines are met, not discovered." },
    { title: "Honesty", body: "Realistic about what depends on payers and providers, too." },
  ],
};

export const trustPoints = [
  "CAQH ProView profile management",
  "PECOS & NPI registration support",
  "Medicare, Medicaid & commercial payer enrollment",
  "Re-credentialing cycle tracking",
];

export const heroCompositionBadges = [
  "CAQH",
  "NPI",
  "PECOS",
  "MEDICARE",
  "MEDICAID",
  "AVALITY",
];