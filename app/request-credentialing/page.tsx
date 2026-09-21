import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Icon } from "@/components/icon";
import { processSteps } from "@/content/process";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/request-credentialing"),
  alternates: { canonical: "/request-credentialing" },
};

const prepList = [
  "Provider names, types, and specialties",
  "The states where services will be delivered",
  "The payers you need to enroll with",
  "Any deadlines you're working against",
];

export default function RequestCredentialingPage() {
  return (
    <>
      <PageHero
        eyebrow="Request Credentialing"
        title="Start your credentialing request"
        description="Tell us what you're enrolling and we'll map the next steps, the document list, and the sequence before anything gets submitted."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request Credentialing" },
        ]}
      />

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-semibold text-ink">Request details</h2>
            <p className="mt-2 mb-6 text-body">
              Fields marked with an asterisk are required. Everything else just
              helps us respond faster.
            </p>
            <InquiryForm variant="full" submitLabel="Submit Request" />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-canvas p-6">
              <h2 className="text-base font-semibold text-ink">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {[
                  { title: "We review your request", body: "A person reads it and prepares a relevant reply — usually within one business day." },
                  { title: "We scope the work", body: "We outline the services, documents, and payer sequence your situation calls for." },
                  { title: "We start with intake", body: "If it's a fit, we begin structured data collection and documentation." },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{step.title}</p>
                      <p className="text-sm text-body">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-line bg-surface p-6">
              <h2 className="text-base font-semibold text-ink">Helpful to have ready</h2>
              <ul className="mt-4 space-y-2.5">
                {prepList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Don&apos;t worry if you don&apos;t have all of this yet — it&apos;s a starting
                point, not a requirement.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-canvas p-6">
              <h2 className="text-base font-semibold text-ink">The six stages</h2>
              <ol className="mt-3 space-y-1.5">
                {processSteps.map((step) => (
                  <li key={step.step} className="flex items-center gap-2 text-sm text-body">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                    {step.title}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}