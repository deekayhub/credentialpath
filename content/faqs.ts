import type { FaqCategory } from "./types";

export const faqCategories: FaqCategory[] = [
  {
    id: "basics",
    title: "Credentialing basics",
    items: [
      {
        q: "What is medical credentialing?",
        a: "Medical credentialing is the process of collecting and verifying a provider's professional qualifications — licensure, education, training, work history, and malpractice coverage. Payers and facilities rely on verified credentials before allowing a provider to render and bill for services.",
      },
      {
        q: "What is the difference between credentialing and enrollment?",
        a: "Credentialing verifies that a provider's qualifications are genuine and complete. Enrollment is the next step: adding the verified provider to a payer's network so they can bill. We coordinate both so they flow in sequence instead of being done as disconnected tasks.",
      },
      {
        q: "Why does credentialing take so long?",
        a: "Credentialing touches many external sources — state boards, employers, insurers, and registries such as CAQH and PECOS — each with its own process and response time. Much of the delay comes from incomplete documentation and unanswered follow-ups. An organized process with proactive tracking avoids those self-inflicted gaps.",
      },
    ],
  },
  {
    id: "process",
    title: "The process",
    items: [
      {
        q: "How does the credentialing process work?",
        a: "Our process follows six stages: data collection, documentation, application to payer, follow-up, enrollment confirmation, and re-credentialing. You can see the full sequence on our How It Works page.",
      },
      {
        q: "What information and documents does the provider need to supply?",
        a: "It depends on the provider type and the payers involved. Common items include state licenses, DEA registration, board certification, malpractice coverage, education and training history, work history, and professional references. We provide a structured checklist so you know exactly what is needed at each step.",
      },
      {
        q: "Who handles follow-up with the payers?",
        a: "We do. Follow-up is a dedicated stage in our process — applications are tracked, and questions or corrections from payers are handled rather than waiting for them to resolve themselves.",
      },
    ],
  },
  {
    id: "payers",
    title: "Payers & registrations",
    items: [
      {
        q: "Which payers do you support enrollment with?",
        a: "We support enrollment applications for Medicare, Medicaid, Railroad Medicare, and commercial payers including Aetna, Cigna, Anthem, Blue Cross Blue Shield, TriCare, Humana, UnitedHealthcare, and Oxford. See our Payers page for the full catalog.",
      },
      {
        q: "Will I be guaranteed enrollment approval?",
        a: "No. Approval decisions rest with each payer, and no one can guarantee them. Our job is to prepare complete, accurate applications and follow them through review so the process moves as smoothly as possible.",
      },
      {
        q: "What are CAQH, NPI, and PECOS?",
        a: "CAQH ProView is a shared profile many commercial payers use; the NPI is the standard national identifier for HIPAA transactions; and PECOS is the Medicare enrollment and revalidation system. We handle all three as part of enrollment support.",
      },
    ],
  },
  {
    id: "engagement",
    title: "Working with us",
    items: [
      {
        q: "Who do you work with?",
        a: "Independent physicians and advanced practitioners, medical practices and groups, clinics, and organizations onboarding providers. If a provider needs to be credentialed or enrolled with payers, that's what we focus on.",
      },
      {
        q: "How do I get started?",
        a: "Request credentialing through our form or contact us directly. We'll confirm your needs, identify the payers and registrations involved, and outline the first steps.",
      },
      {
        q: "What should I prepare before requesting credentialing?",
        a: "Nothing has to be perfect. Having the provider's licenses, certifications, and basic practice details handy helps the intake go faster — but our structured checklist drives what's actually needed.",
      },
      {
        q: "Do you handle re-credentialing on an ongoing basis?",
        a: "Yes. Re-credentialing is a built-in stage of the process. We track expiration and re-verification cycles so renewals happen before coverage lapses.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & data",
    items: [
      {
        q: "Is my information kept confidential?",
        a: "Yes. Inquiry information is used only to respond to you, and provider documentation is handled with confidentiality as part of the engagement. We do not sell information to third parties.",
      },
      {
        q: "Should I include patient information in my inquiry?",
        a: "No. Please don't send patient information, Social Security numbers, or other sensitive identifiers through the inquiry form. We'll request any documentation needed through the secure intake process after we connect.",
      },
    ],
  },
];

export const homepageFaqPreview = [
  faqCategories[0].items[1],
  faqCategories[1].items[0],
  faqCategories[2].items[1],
  faqCategories[3].items[1],
];