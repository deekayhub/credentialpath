import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Icon } from "@/components/icon";
import { site } from "@/content/site";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/contact"),
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with our credentialing team"
        description="Tell us what you're working on and we'll respond with next steps — or just answers, if that's all you need."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Direct contact</h2>
              <p className="mt-2 text-body">
                Prefer to reach out yourself? Use either of these and you&apos;ll hear
                back from a person, not an autoresponder.
              </p>
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">Email</span>
                    <span className="block text-sm text-body">{site.contactEmail}</span>
                  </span>
                </a>
              </li>
              {site.contactPhone && (
                <li>
                  <a
                    href={`tel:${site.contactPhone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">Phone</span>
                      <span className="block text-sm text-body">{site.contactPhone}</span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
            <div className="rounded-xl border border-line bg-canvas p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon name="clock" className="h-4 w-4 text-primary" />
                What to expect
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We typically respond within one business day. If your request is
                urgent, mention it in your message and we&apos;ll prioritize it.
              </p>
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Please don&apos;t include Social Security numbers or other sensitive
              identifiers in your message.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-semibold text-ink">Send us a message</h2>
            <p className="mt-2 mb-6 text-body">
              A few details help us give you a useful first reply.
            </p>
            <InquiryForm variant="short" submitLabel="Send Message" />
          </div>
        </Container>
      </section>
    </>
  );
}