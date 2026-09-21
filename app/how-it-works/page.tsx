import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { processSteps, processIntro } from "@/content/process";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/how-it-works"),
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="How the credentialing process works"
        description="Credentialing is a sequence, not a single event. These six stages take a provider from structured data collection to confirmed enrollment — and then keep the cycle from lapsing."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <ol className="space-y-6">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                className="grid gap-6 rounded-xl border border-line bg-surface p-6 shadow-soft md:grid-cols-[180px_1fr] md:p-8"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-white">
                    {Number(step.step)}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Stage {step.step}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-ink">{step.title}</h2>
                  </div>
                </div>
                <div>
                  <p className="text-[0.9375rem] leading-relaxed text-body">{step.summary}</p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-body">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        >
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {i < processSteps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-sm text-muted">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">Next</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
                        <path d="M4 12h16M13 5l7 7-7 7" />
                      </svg>
                      {processSteps[i + 1].title}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="The short version"
            title="The same six stages, at a glance"
            description={processIntro.description}
            align="center"
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps} compact />
          </div>
        </Container>
      </section>

      <CtaSection
        title={<>The process is proven. The next step is yours.</>}
        description="Start the process by telling us what you're enrolling. We'll take it from data collection through confirmed enrollment."
        primaryCta={{ href: "/request-credentialing", label: "Start the process" }}
        secondaryCta={{ href: "/services", label: "Browse services" }}
        points={[
          "Every stage owned by one accountable team",
          "Follow-up is scheduled, not hoped for",
          "Re-credentialing tracked from day one",
        ]}
      />
    </>
  );
}