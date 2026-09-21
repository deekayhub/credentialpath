import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "provider-credentialing",
    shortTitle: "Provider Credentialing",
    title: "Provider Credentialing",
    summary:
      "Complete verification of a provider's education, training, licensure, and professional history — so they're ready to meet payer and facility requirements.",
    icon: "shieldCheck",
    pageTitle: "Provider Credentialing Services",
    metaDescription:
      "Provider credentialing services for physicians, NPs, PAs, and practices — verification of licensure, education, training, and professional history to support payer enrollment.",
    eyebrow: "Credentialing",
    heroDescription:
      "We help you assemble and verify everything payers and facilities need to know about a provider — licensure, education, training, malpractice history, and work history — in one organized, complete credential.",
    problem: [
      "Providers can't bill most payers until their credentials have been verified and their enrollment approved.",
      "Credentialing packages require evidence collected from many sources — state boards, hospitals, employers, and insurers.",
      "Missing or expired documentation is the most common reason enrollment is delayed.",
    ],
    explanation: [
      "Provider credentialing is the process of collecting and verifying a provider's professional qualifications. Payers and facilities use these verified credentials to decide whether a provider may render and bill for services.",
      "We manage the credential for you: a complete, current, organized profile that supports payer enrollment, hospital and facility applications, and ongoing re-credentialing cycles.",
    ],
    included: [
      "Credential collection and verification from primary sources",
      "State medical licenses and state-specific requirements",
      "Education, training, and board certification verification",
      "DEA and state controlled-substance registrations (where required)",
      "Malpractice insurance verification",
      "Work history and professional references",
      "Gap analysis on missing or expired items",
      "A complete, organized credentialing packet, ready for submission",
    ],
    process: [
      { title: "Data collection", description: "Gather the provider's demographic, license, education, and work-history data through a structured intake." },
      { title: "Documentation", description: "Request and collect supporting documents, organized by document type with clear completeness tracking." },
      { title: "Verification", description: "Check information against primary sources where applicable and flag anything incomplete or expired." },
      { title: "Packaging", description: "Assemble the complete credentialing packet, ready for the payer application process." },
    ],
    benefits: [
      { title: "Fewer delays", description: "Complete, accurate packets reduce the back-and-forth that slows enrollment." },
      { title: "One organized source", description: "Every provider's credentials live in one place, easy to reuse for multiple payers." },
      { title: "Less staff time", description: "One coordinated process instead of your team chasing documents across sources." },
    ],
    audience: [
      "Independent physicians and advanced practitioners",
      "Medical practices and group practices",
      "Clinics expanding their billing provider network",
      "Organizations onboarding providers who need payer enrollment",
    ],
    related: ["payer-enrollment", "provider-enrollment", "re-credentialing"],
    faqs: [
      { q: "What is the difference between credentialing and enrollment?", a: "Credentialing is verifying a provider's qualifications. Enrollment is getting that verified provider set up with a payer so they can bill. We coordinate both, in sequence." },
      { q: "Which documents are typically needed?", a: "Common items include state licenses, DEA registration, board certification, malpractice coverage, education and training history, work history, and professional references. Our intake identifies what applies to each provider." },
    ],
  },
  {
    slug: "payer-enrollment",
    shortTitle: "Payer Enrollment",
    title: "Payer Enrollment",
    summary:
      "Support enrolling providers with governmental and commercial payers so they meet payer requirements and can bill for covered services.",
    icon: "building",
    pageTitle: "Payer Enrollment Services",
    metaDescription:
      "Payer enrollment services supporting Medicare, Medicaid, and commercial payers such as Aetna, Cigna, Anthem, Humana, and UnitedHealthcare.",
    eyebrow: "Enrollment",
    heroDescription:
      "We prepare and submit payer enrollment applications for providers — Medicare, Medicaid, and commercial plans — then follow through so the enrollment is confirmed and the provider is billable."
      ,
    problem: [
      "Each payer has its own application, its own portal, and its own requirements.",
      "Applications that are incomplete or inconsistent get returned, adding weeks to the timeline.",
      "Without proactive follow-up, applications can sit in-review far longer than necessary.",
    ],
    explanation: [
      "Payer enrollment is the process of applying to insurance payers so a provider can be added to their provider network and bill for services rendered.",
      "We manage enrollment applications end to end: prep, submission, tracking, corrections, and follow-up — with careful, accurate language about what payers require and no promises about any payer's approval decisions.",
    ],
    included: [
      "Payer-specific application preparation and submission",
      "Medicare (Part A / Part B) and Railroad Medicare via applicable enrollment channels",
      "Medicaid enrollment support",
      "Commercial payer applications, including Aetna, Cigna, Anthem, BCBS, TriCare, Humana, UnitedHealthcare, and Oxford",
      "Document packaging matching each payer's requirements",
      "Submission tracking with dates and reference numbers",
      "Correction and resubmission handling when a payer returns an application",
    ],
    process: [
      { title: "Payer planning", description: "Identify which payers matter for your providers and practice panel." },
      { title: "Application preparation", description: "Prepare each payer's application with accurate, consistent provider data." },
      { title: "Submission", description: "Submit through the applicable portal or process and record reference details." },
      { title: "Follow-up", description: "Track the file, respond to requests, and keep it moving through review." },
      { title: "Enrollment confirmation", description: "Confirm the effective enrollment so the provider can begin billing." },
    ],
    benefits: [
      { title: "Consistent applications", description: "One coordinated process across multiple payers instead of ad-hoc submissions." },
      { title: "Visible progress", description: "You always know which payer, which application, and which stage it's in." },
      { title: "Billing-ready sooner", description: "Follow-through on corrections and review requests helps keep timelines moving." },
    ],
    audience: [
      "Practices adding providers who need to join payer networks",
      "Independent providers establishing their own payer relationships",
      "Medical groups onboarding providers across multiple payers",
      "Providers moving to new states or new practice settings",
    ],
    related: ["provider-credentialing", "provider-enrollment", "pecos"],
    faqs: [
      { q: "Do you guarantee enrollment approval?", a: "No. Payer approval decisions rest with each payer. Our role is to prepare complete, accurate applications and follow them through the process." },
      { q: "Which payers do you support enrollment with?", a: "We support enrollment applications for Medicare, Medicaid, Railroad Medicare, and commercial payers including Aetna, Cigna, Anthem, Blue Cross Blue Shield, TriCare, Humana, UnitedHealthcare, and Oxford. The full catalog is on our Payers page." },
    ],
  },
  {
    slug: "provider-enrollment",
    shortTitle: "Provider Enrollment",
    title: "Provider Enrollment",
    summary:
      "Establish and maintain provider enrollment profiles across programs and portals — so identities, profiles, and registrations stay consistent wherever payers look.",
    icon: "users",
    pageTitle: "Provider Enrollment Services",
    metaDescription:
      "Provider enrollment services — maintaining consistent provider identity and registrations across Medicare, Medicaid, CAQH, PECOS, NPI, and Availity.",
    eyebrow: "Provider Enrollment",
    heroDescription:
      "Provider enrollment ties a provider's identity together across the programs and portals payers check — NPI, PECOS, CAQH, Availity, Medicare, and Medicaid. We build and maintain that full picture.",
    problem: [
      "Payers pull provider data from several sources — NPPES, PECOS, CAQH, portals like Availity — and inconsistencies between them trigger verification holds.",
      "A Medicare or Medicaid enrollment that isn't maintained can affect the ability to bill those programs.",
      "Provider identities that drift across systems are the source of many enrollment rejections.",
    ],
    explanation: [
      "Provider enrollment is the ongoing practice of keeping a provider's identity and enrollment records accurate and consistent across the programs, registries, and portals payers rely on.",
      "We manage the components — NPI, PECOS, CAQH, Medicare and Medicaid enrollment, and portal profiles — so the provider data each payer sees matches.",
    ],
    included: [
      "NPI registration and NPPES record maintenance",
      "PECOS enrollment and revalidation tracking for Medicare",
      "CAQH ProView profile setup and ongoing attestation",
      "Medicare and Medicaid enrollment coordination",
      "Availity portal profile support",
      "Cross-system consistency checks across registries and portals",
      "Revalidation and profile maintenance reminders",
    ],
    process: [
      { title: "Identity snapshot", description: "Map the provider's data across NPI, PECOS, CAQH, and relevant portals." },
      { title: "Registration", description: "Establish or correct each registration and profile." },
      { title: "Alignment", description: "Reconcile discrepancies so every system tells the same story." },
      { title: "Maintenance", description: "Track attestations, revalidations, and updates to keep records current." },
    ],
    benefits: [
      { title: "Consistent identity", description: "The same provider data in every system payers check." },
      { title: "Fewer review holds", description: "Aligned records reduce the discrepancy flags that slow enrollment." },
      { title: "Maintained, not forgotten", description: "Revalidation and attestation cycles tracked so nothing lapses silently." },
    ],
    audience: [
      "Providers enrolling in Medicare and Medicaid programs",
      "Practices joining Availity and payer portals",
      "Providers who need NPI and PECOS records aligned with payer applications",
      "Organizations onboarding providers across multiple states",
    ],
    related: ["npi", "pecos", "caqh", "payer-enrollment"],
    faqs: [
      { q: "What is Availity?", a: "Availity is a widely used portal for payer interactions, including eligibility and claim management. We support setting up and maintaining provider profiles within it." },
      { q: "Why do my records need to match across systems?", a: "Payers verify against sources like NPPES, PECOS, and CAQH. If a provider's name, address, or identifiers differ between systems, applications can be flagged and delayed." },
    ],
  },
  {
    slug: "re-credentialing",
    shortTitle: "Re-Credentialing",
    title: "Re-Credentialing",
    summary:
      "Stay ahead of credential and enrollment renewal cycles so providers keep their payer relationships without a gap in reimbursement.",
    icon: "refresh",
    pageTitle: "Re-Credentialing Services",
    metaDescription:
      "Re-credentialing services that keep provider credentials and payer enrollments current — avoiding the reimbursement interruptions that happen when credentials lapse.",
    eyebrow: "Re-Credentialing",
    heroDescription:
      "Credentials and enrollments expire on their own cycles, and when they lapse, so does a provider's ability to bill. We track the cycles and prepare the renewals before they become interruptions.",
    problem: [
      "Payers re-verify providers on recurring cycles — commonly every three years — and expect updated documentation each time.",
      "Expiring licenses, malpractice coverage, or enrollments cause payment holds that are costly and disruptive.",
      "Without a scheduled process, re-credentialing always becomes an urgent scramble.",
    ],
    explanation: [
      "Re-credentialing repeats the verification process on the cycles each payer sets, so a provider's record stays current and their enrollments remain active.",
      "We track license expirations, certification renewals, and payer re-credentialing schedules, and prepare the updated documentation each cycle requires.",
    ],
    included: [
      "Re-credentialing schedule tracking per payer and provider",
      "Renewal reminders for licenses, DEA, certifications, and malpractice coverage",
      "Updated documentation collection and verification",
      "Preparation of re-credentialing applications for each payer",
      "Coordination with your team so renewal items are supplied on time",
      "Tracking that keeps re-verification cycles from being missed",
    ],
    process: [
      { title: "Cycle tracking", description: "Map each payer's re-credentialing cycle and each document's expiration date." },
      { title: "Advance notice", description: "Flag upcoming renewals early so nothing is collected at the last minute." },
      { title: "Document refresh", description: "Collect updated licenses, certifications, and coverage before they lapse." },
      { title: "Re-submission", description: "Prepare and file re-credentialing applications with each payer." },
    ],
    benefits: [
      { title: "No billing gaps", description: "Renewals handled while coverage is still active, so payment continues." },
      { title: "Time to prepare", description: "Renewal requests reach you well before deadlines, not days before." },
      { title: "One tracking view", description: "Expirations and cycles are tracked in one place instead of calendars and spreadsheets." },
    ],
    audience: [
      "Practices managing providers across multiple payers with different cycles",
      "Providers whose payers require periodic re-verification",
      "Groups that have experienced lapses after a credential expired",
      "Organizations that want credential maintenance managed proactively",
    ],
    related: ["provider-credentialing", "payer-enrollment", "caqh"],
    faqs: [
      { q: "How often does re-credentialing happen?", a: "Many payers re-verify on a roughly three-year cycle, and state licenses and certifications have their own renewal dates. We track each independently." },
      { q: "What happens if a payer's cycle is different from another payer's?", a: "Every payer and document runs on its own schedule. Our tracking accounts for each one rather than applying a single blanket date." },
    ],
  },
  {
    slug: "caqh",
    shortTitle: "CAQH",
    title: "CAQH ProView Management",
    summary:
      "Setup and upkeep of the CAQH ProView provider profile many commercial payers use to standardize credentialing data.",
    icon: "layers",
    pageTitle: "CAQH ProView Services",
    metaDescription:
      "CAQH ProView profile setup, attestation, and maintenance services — keeping the shared provider profile that commercial payers rely on accurate and current.",
    eyebrow: "CAQH",
    heroDescription:
      "Many commercial payers pull credentialing data from a provider's CAQH ProView profile. We set the profile up correctly, keep it attested, and make sure the data matches what each payer expects.",
    problem: [
      "A CAQH profile that is incomplete or not attested isn't usable by payers.",
      "Profiles that go stale must be reviewed and updated, which reopens the data-collection loop.",
      "Inconsistent CAQH data is one of the most common reasons commercial applications stall.",
    ],
    explanation: [
      "CAQH ProView is the shared provider data repository used by many payers to standardize how they collect and verify credentialing information.",
      "We manage the full CAQH lifecycle — initial setup, data entry, document attachment, attestation, and periodic profile maintenance — so the profile always reflects the provider accurately.",
    ],
    included: [
      "CAQH ProView account setup and provider profile creation",
      "Complete and accurate data entry across credentialing sections",
      "Document attachment aligned with CAQH requirements",
      "Attestation on schedule so payers can access the profile",
      "Ongoing maintenance and updates as provider information changes",
      "Coordination with payer enrollment so commercial applications can draw on the profile",
    ],
    process: [
      { title: "Setup", description: "Create the provider's CAQH ProView account and begin the profile." },
      { title: "Completion", description: "Enter credentials, work history, and documents with accuracy." },
      { title: "Review", description: "Check the profile against the source-of-truth credential packet." },
      { title: "Attestation", description: "Complete the attestation that makes the profile available to payers." },
      { title: "Maintenance", description: "Keep the profile current with updates and re-attestation cycles." },
    ],
    benefits: [
      { title: "One rich profile", description: "A complete ProView profile supports many commercial applications at once." },
      { title: "Fewer repeated requests", description: "Payers that use CAQH stop asking the provider for the same data separately." },
      { title: "Always attested", description: "Attestation cycles tracked so commercial enrollments aren't blocked." },
    ],
    audience: [
      "Providers joining commercial payer networks that use CAQH",
      "Practices that repeatedly recreate provider data for different payers",
      "Providers whose profiles are incomplete, stale, or un-attested",
      "Organizations preparing providers for network participation",
    ],
    related: ["payer-enrollment", "provider-credentialing", "provider-enrollment"],
    faqs: [
      { q: "What is CAQH ProView?", a: "CAQH ProView is a shared online database where providers store their credentialing and practice information. Many commercial payers download that data when processing enrollment applications." },
      { q: "Why do I need to 'attest' my profile?", a: "Attestation confirms the profile is current and gives payers access to it. An un-attested profile typically can't be used by payers." },
    ],
  },
  {
    slug: "npi",
    shortTitle: "NPI",
    title: "NPI Registration & Maintenance",
    summary:
      "National Provider Identifier registration and NPPES record maintenance — the foundation of every provider's enrollment identity.",
    icon: "idCard",
    pageTitle: "NPI Registration Services",
    metaDescription:
      "NPI (National Provider Identifier) registration and NPPES record maintenance — get your provider identity established and keep it consistent across enrollments.",
    eyebrow: "NPI",
    heroDescription:
      "The National Provider Identifier is the standard identifier every provider needs to bill electronically. We register NPIs and keep NPPES records consistent with the rest of the provider's enrollment data.",
    problem: [
      "Practically every HIPAA-covered transaction requires an NPI.",
      "NPPES records with outdated or inconsistent data cause verification problems downstream.",
      "Providers sometimes practice under records that were never properly established or maintained.",
    ],
    explanation: [
      "The NPI is a unique 10-digit identifier assigned to healthcare providers for use in standard electronic transactions.",
      "We handle NPI registration through the NPPES application process and maintain the record so names, addresses, and taxonomy remain accurate across all payer-facing systems.",
    ],
    included: [
      "NPI application preparation and submission via NPPES",
      "Record setup with correct provider name, address, and taxonomy codes",
      "NPPES record review and correction",
      "Consistency checks between the NPPES record and payer applications",
      "Guidance on when an individual vs. organizational NPI applies",
    ],
    process: [
      { title: "Assessment", description: "Determine the correct NPI type and taxonomy for the provider." },
      { title: "Application", description: "Prepare and submit the NPPES application accurately." },
      { title: "Verification", description: "Confirm issuance and that the record is complete." },
      { title: "Maintenance", description: "Keep the NPPES record current as provider facts change." },
    ],
    benefits: [
      { title: "Correct setup the first time", description: "Right taxonomy, right record — the foundation for clean enrollments." },
      { title: "One consistent identity", description: "NPPES data aligned with every payer application we prepare." },
      { title: "Fast to establish", description: "A clean NPI process removes the first bottleneck in enrollment." },
    ],
    audience: [
      "New providers who do not yet have an NPI",
      "Practices onboarding providers without established NPPES records",
      "Providers whose NPPES records need correction or maintenance",
    ],
    related: ["provider-enrollment", "pecos", "payer-enrollment"],
    faqs: [
      { q: "Do I apply for an NPI myself?", a: "NPI applications are free and open to providers directly. We prepare and route the application accurately so it's done right the first time and stays consistent with your enrollment data." },
      { q: "What is a taxonomy code?", a: "A taxonomy code classifies the provider's type and specialty. Choosing the correct code matters because it shapes how payers see and process the provider." },
    ],
  },
  {
    slug: "pecos",
    shortTitle: "PECOS",
    title: "PECOS Enrollment Support",
    summary:
      "Medicare provider enrollment and revalidation through PECOS — preparation, submission, and maintenance of your Medicare record.",
    icon: "fileCheck",
    pageTitle: "PECOS Enrollment Services",
    metaDescription:
      "PECOS enrollment support for Medicare — preparing and submitting provider enrollment and revalidation applications through the Medicare Provider Enrollment, Chain, and Ownership System.",
    eyebrow: "PECOS",
    heroDescription:
      "PECOS is the system Medicare uses to enroll providers and suppliers. We prepare and submit PECOS enrollments and track revalidation so Medicare enrollment stays in good standing.",
    problem: [
      "Medicare won't pay for services from a provider who is not enrolled through PECOS.",
      "PECOS applications are detailed, and errors are returned for correction.",
      "CMS also requires periodic revalidation of enrolled providers — missing it interrupts Medicare billing.",
    ],
    explanation: [
      "The Medicare Provider Enrollment, Chain, and Ownership System (PECOS) is where Medicare provider enrollment and revalidation happen.",
      "We support PECOS enrollment for Medicare and Medicaid programs that rely on it, and track revalidation cycles so the Medicare enrollment never silently lapses.",
    ],
    included: [
      "PECOS enrollment application preparation and submission",
      "Medicare enrollment data aligned with NPPES and other registries",
      "Revalidation tracking and preparation on CMS schedules",
      "Correction handling when CMS returns an application",
      "Support for Railroad Medicare via applicable enrollment channels",
      "Coordination with Medicare Administrative Contractor (MAC) correspondence where needed",
    ],
    process: [
      { title: "Eligibility review", description: "Confirm the provider and practice type and applicable enrollment scope." },
      { title: "Application prep", description: "Prepare the PECOS application with complete, consistent data." },
      { title: "Submission", description: "Route the application through the proper PECOS channel." },
      { title: "Revalidation tracking", description: "Schedule and prepare the periodic revalidation CMS requires." },
    ],
    benefits: [
      { title: "Medicare-ready", description: "Enrollment completed so Medicare claims are payable." },
      { title: "Revalidation never missed", description: "CMS revalidation cycles tracked proactively, not discovered at a denial." },
      { title: "Consistent with NPPES", description: "PECOS and NPPES records aligned to avoid review holds." },
    ],
    audience: [
      "Providers new to Medicare participation",
      "Practices adding providers who plan to bill Medicare Part B",
      "Providers facing an upcoming CMS revalidation",
      "Organizations managing Medicare enrollment across a provider panel",
    ],
    related: ["provider-enrollment", "npi", "payer-enrollment"],
    faqs: [
      { q: "What is PECOS?", a: "PECOS is the Medicare Provider Enrollment, Chain, and Ownership System. Providers enroll in Medicare through it, and CMS also uses it for periodic revalidation." },
      { q: "What is revalidation?", a: "CMS periodically requires enrolled providers to revalidate their Medicare enrollment information. If revalidation is missed, Medicare billing can be interrupted." },
    ],
  },
];

export function getServicesBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSummary = (slug: string): string =>
  getServicesBySlug(slug)?.summary ?? "";

export const registrationServiceSlugs = ["caqh", "npi", "pecos"];