import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PayerGrid, PayerDisclaimer } from "@/components/sections/payers-grid";
import { payerCatalog, payerGroups, payerDisclaimer } from "@/content/payers";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/payers"),
  alternates: { canonical: "/payers" },
};

export default function PayersPage() {
  return (
    <>
      <PageHero
        eyebrow="Payers we support"
        title="Enrollment prepared for the payers your practice actually bills"
        description="We prepare, submit, and follow through on enrollment applications for government programs, commercial plans, and the shared registries most payers rely on."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Payers We Support" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Government programs, commercial plans, and shared registries"
            description="One organized enrollment effort across the payers that show up on your explanation of benefits."
            className="mb-4"
          />
          <PayerGrid payers={payerCatalog} />
          <PayerDisclaimer note={payerDisclaimer} className="mt-8" />
        </Container>
      </section>

      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why this matters"
            title="No payer exists in isolation"
            description="A CAQH profile that's stale, an NPI that's mis-registered, or a PECOS record with a mismatch can hold up enrollment with every payer at once. Keeping the shared systems accurate is the highest-leverage thing we do."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {payerGroups.map((group) => (
              <div key={group.id} className="rounded-xl border border-line bg-surface p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title={<>Not sure which payers apply to your situation?</>}
        description="Share your practice's payer mix and we'll tell you what enrollment each requires — and whether the registries are already lined up."
        primaryCta={{ href: "/request-credentialing", label: "Request Credentialing" }}
        secondaryCta={{ href: "/contact", label: "Talk to our team" }}
        points={[
          "Medicare and Medicaid enrollment support",
          "Commercial plans prepared per payer",
          "CAQH, PECOS, NPI, and Availity kept accurate",
        ]}
      />
    </>
  );
}