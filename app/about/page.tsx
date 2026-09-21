import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Icon } from "@/components/icon";
import { aboutCopy, trustPoints } from "@/content/answers";
import { processSteps } from "@/content/process";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/about"),
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The operation behind CredentialPath"
        description="A credentialing-focused operation built around one thing: getting providers credentialed, enrolled, and re-credentialed without the usual delays."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5">
              {aboutCopy.intro.map((para) => (
                <p key={para.slice(0, 40)} className="text-lg leading-relaxed text-body">
                  {para}
                </p>
              ))}
              {aboutCopy.sections.map((section) => (
                <div key={section.title} className="rounded-xl border border-line bg-surface p-6">
                  <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                  <p className="mt-2 leading-relaxed text-body">{section.body}</p>
                </div>
              ))}
            </div>
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-line bg-canvas p-6">
                <h2 className="text-base font-semibold text-ink">What we hold ourselves to</h2>
                <ul className="mt-4 space-y-3">
                  {aboutCopy.principles.map((principle) => (
                    <li key={principle.title} className="flex items-start gap-3">
                      <Icon name="badgeCheck" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-ink">{principle.title}</p>
                        <p className="text-sm text-body">{principle.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our system, in short"
            title="The process that runs every engagement"
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li key={step.step} className="rounded-xl border border-line bg-surface p-5">
                <span className="text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.summary}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="rounded-2xl border border-line bg-surface p-8 shadow-soft md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <SectionHeading
                eyebrow="The tools we keep current"
                title="Where your providers' data lives"
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 rounded-lg border border-line bg-canvas px-4 py-3 text-sm font-medium text-ink"
                >
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        title={<>Want to see the process in action?</>}
        description="Send us your situation and we'll walk through exactly how we'd run credentialing for your providers."
        primaryCta={{ href: "/request-credentialing", label: "Request Credentialing" }}
        secondaryCta={{ href: "/contact", label: "Contact us" }}
        points={[
          "A personal conversation, not a sales deck",
          "A clear sense of what's involved before you commit",
          "No fabricated promises about approval timelines",
        ]}
      />
    </>
  );
}