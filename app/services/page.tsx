import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-card";
import { CtaSection } from "@/components/sections/cta-section";
import { LinkButton } from "@/components/ui/button";
import { services } from "@/content/services";
import { providerTypeOptions } from "@/content/site";
import { getPageMeta } from "@/content/seo";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  ...getPageMeta("/services"),
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const audiences = providerTypeOptions
    .filter((o) => o.value !== "Medical Practice / Group" && o.value !== "Other")
    .map((o) => o.label);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Credentialing services across the full lifecycle"
        description="From verifying a provider's record to submitting applications and keeping cycles current — one coordinated service instead of a dozen scattered tasks."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <ServiceGrid services={services} className="mb-10" />
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-canvas px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-ink">Not sure where to start?</p>
              <p className="text-sm text-body">
                Tell us what you&apos;re trying to enroll and we&apos;ll map the services that fit.
              </p>
            </div>
            <LinkButton href="/request-credentialing" size="md" icon="arrowRight" iconRight>
              Get guidance
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who we support"
            title="Providers we typically credential"
            align="center"
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {audiences.map((aud) => (
              <li
                key={aud}
                className="flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink"
              >
                <Icon name="users" className="h-4 w-4 text-primary" />
                {aud}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        title={<>Any of these services, working as one process.</>}
        description="You don't have to pick a single service — the lifecycle works better as a whole. Tell us your situation and we'll scope what makes sense."
        primaryCta={{ href: "/request-credentialing", label: "Request Credentialing" }}
        secondaryCta={{ href: "/contact", label: "Talk to our team" }}
        points={[
          "Realistic about what each payer controls",
          "Documents gathered once, reused everywhere",
          "Re-credentialing tracked from day one",
        ]}
      />
    </>
  );
}