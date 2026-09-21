import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqCategories } from "@/content/faqs";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/faq"),
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Credentialing questions, answered plainly"
        description="Common questions about credentialing, payer enrollment, registries like CAQH and PECOS, and how we work."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="py-12 md:py-16">
        <Container>
          <nav aria-label="FAQ topics" className="mb-10 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-medium text-body transition-colors hover:border-primary hover:text-primary"
              >
                {category.title}
              </Link>
            ))}
          </nav>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <SectionHeading title={category.title} className="mb-5" />
                <Accordion items={category.items} />
              </section>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title={<>Still have a question?</>}
        description="If it's about your specific providers or payers, the fastest answer is a short conversation."
        primaryCta={{ href: "/contact", label: "Ask a question" }}
        secondaryCta={{ href: "/request-credentialing", label: "Request Credentialing" }}
        points={[
          "Real answers, not a script",
          "No obligation to proceed",
          "We'll tell you if we're not the right fit",
        ]}
      />
    </>
  );
}