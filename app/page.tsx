import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceGrid } from "@/components/sections/service-card";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Differentiators } from "@/components/sections/differentiators";
import { FaqPreview } from "@/components/sections/faq-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/content/services";
import { processSteps, processIntro } from "@/content/process";
import { payerCatalog } from "@/content/payers";
import { homepageFaqPreview } from "@/content/faqs";
import { whyIntro } from "@/content/answers";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/"),
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const topPayers = payerCatalog.filter((p) => p.category !== "registration").slice(0, 8);

  return (
    <>
      <HomeHero />

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we handle"
              title="Credentialing services across the full lifecycle"
              description="From verifying a provider's record to submitting applications and keeping cycles current — one coordinated service instead of a dozen scattered tasks."
            />
            <LinkButton href="/services" variant="secondary" icon="arrowRight" iconRight className="shrink-0">
              All services
            </LinkButton>
          </div>
          <ServiceGrid services={services} className="mt-10" />
        </Container>
      </section>

      <section className="border-y border-line bg-canvas py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              {...processIntro}
              align="left"
            />
            <LinkButton href="/how-it-works" variant="secondary" icon="arrowRight" iconRight className="shrink-0">
              See how it works
            </LinkButton>
          </div>
          <ProcessTimeline steps={processSteps} compact className="mt-10" />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            {...whyIntro}
            align="center"
          />
          <Differentiators className="mt-10" />
        </Container>
      </section>

      <section className="border-y border-line bg-canvas py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Payers we support"
                title="Enrollment prepared for the payers your practice actually bills"
                description="We prepare and submit enrollment applications for Medicare and Medicaid programs and the major commercial plans practices work with every day."
              />
              <ul className="mt-6 flex flex-wrap gap-2">
                {topPayers.map((payer) => (
                  <li
                    key={payer.name}
                    className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                  >
                    {payer.name}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LinkButton href="/payers" variant="secondary" icon="arrowRight" iconRight>
                  View all payers &amp; registries
                </LinkButton>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon name="globalNetwork" className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-ink">The systems behind every payer</h3>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                Payers pull provider data from a handful of shared systems. We keep the underlying
                profiles accurate and current so the applications built on them hold up —
                regardless of which payer, facility, or network they go to.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {payerCatalog
                  .filter((p) => p.category === "registration")
                  .map((p) => (
                    <li
                      key={p.name}
                      className="flex items-center gap-2 rounded-lg bg-canvas px-3 py-2 text-sm font-semibold text-ink"
                    >
                      <Icon name="check" className="h-4 w-4 text-primary" />
                      {p.name.replace(" (NPPES)", "")}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FaqPreview items={homepageFaqPreview} href="/faq" />
        </Container>
      </section>

      <CtaSection
        title={<>Credentialing done right the first time.</>}
        description="Tell us what you're enrolling and we'll map the next steps — and the document list — before anything gets submitted."
        primaryCta={{ href: "/request-credentialing", label: "Request Credentialing" }}
        secondaryCta={{ href: "/contact", label: "Talk to our team" }}
        points={[
          "Structured intake keeps data collection painless",
          "Documentation tracked to each payer's requirements",
          "Follow-up until enrollment is confirmed, not just submitted",
        ]}
      />
    </>
  );
}