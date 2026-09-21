import type { Service } from "@/content/types";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Accordion } from "@/components/ui/accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/content/services";

export function ServicePage({ service }: { service: Service }) {
  const related = relatedServices(service);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.pageTitle}
        description={service.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink">
                Why providers need this
              </h2>
              <ul className="space-y-3">
                {service.problem.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-body">
                    <Icon name="arrowRight" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink">How we handle it</h2>
              {service.explanation.map((para) => (
                <p key={para.slice(0, 48)} className="text-[0.9375rem] leading-relaxed text-body">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <SectionHeading
                eyebrow="What's included"
                title="Everything we cover"
              />
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-lg border border-line bg-surface p-3 text-[0.9375rem] text-ink"
                  >
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-canvas p-5">
              <h2 className="text-base font-semibold text-ink">Who this is for</h2>
              <ul className="mt-3 space-y-2">
                {service.audience.map((aud) => (
                  <li key={aud} className="flex items-start gap-2.5 text-sm text-body">
                    <Icon name="users" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {aud}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-line pt-5">
                <LinkButton href="/request-credentialing" size="md" icon="arrowRight" iconRight className="w-full">
                  Request this service
                </LinkButton>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-5">
              <h2 className="text-base font-semibold text-ink">Related services</h2>
              <ul className="mt-3 space-y-1">
                {related.map((relatedService) => (
                  <li key={relatedService.slug}>
                    <a
                      href={`/services/${relatedService.slug}`}
                      className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-primary"
                    >
                      {relatedService.shortTitle}
                      <Icon name="chevronRight" className="h-4 w-4 text-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title="How this service runs"
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-line bg-surface p-5">
                <span className="text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-ink">Benefits that show up in revenue</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-line bg-surface p-6">
                <Icon name="badgeCheck" className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {service.faqs.length > 0 && (
        <section className="border-t border-line py-14 md:py-20">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions about this service"
              className="mb-8"
            />
            <Accordion items={service.faqs} />
          </Container>
        </section>
      )}

      <CtaSection
        title={<>Need help with {service.shortTitle.toLowerCase()}?</>}
        description="Share a few details and we'll tell you exactly what's involved — and what to gather first."
        primaryCta={{ href: "/request-credentialing", label: "Request this service" }}
        secondaryCta={{ href: "/contact", label: "Ask a question" }}
        points={[
          "No obligation, no pressure",
          "A clear document list before anything is submitted",
          "One accountable point of contact throughout",
        ]}
      />
    </>
  );
}

function relatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}