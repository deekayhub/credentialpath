import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Differentiators } from "@/components/sections/differentiators";
import { whyIntro } from "@/content/answers";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/why-us"),
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why CredentialPath"
        title="Credentialing deserves a dedicated process, not a part-time scramble"
        description={whyIntro.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Us" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <Differentiators />
        </Container>
      </section>

      <section className="border-t border-line bg-canvas py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where delays actually come from"
            title="Most credentialing delays are self-inflicted"
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Documents scattered across inboxes",
                body: "When every document lives in a different email thread, files go missing, versions conflict, and nothing expires visibly.",
              },
              {
                title: "Follow-up runs on hope",
                body: "Applications that 'were submitted' sit in review for weeks because nobody could point to the last time anyone called.",
              },
              {
                title: "Cycles lapse without a notice",
                body: "Enrollments quietly expire. By the time it surfaces, the practice has been billing against a coverage gap.",
              },
            ].map((block) => (
              <div key={block.title} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold text-ink">{block.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{block.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-body">
            Our process is designed to remove all three failure points — one
            organized credential, scheduled follow-up, and re-credentialing
            tracking that starts on day one.
          </p>
        </Container>
      </section>

      <CtaSection
        title={<>Fewer surprises, fewer stalled files.</>}
        description="If you're tired of chasing documents and nudging applications, tell us how things are going now — we'll take it from there."
        primaryCta={{ href: "/request-credentialing", label: "Get started" }}
        secondaryCta={{ href: "/contact", label: "Ask a question" }}
        points={[
          "One accountable point of contact",
          "Status visible at every stage",
          "Honest about what payers control",
        ]}
      />
    </>
  );
}