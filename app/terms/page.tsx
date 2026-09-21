import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/content/site";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/terms"),
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Use of this website",
    body: [
      "This website is provided for general information about our credentialing and payer enrollment services. By using it, you agree to use it lawfully and not to interfere with its operation or security.",
    ],
  },
  {
    title: "No professional or legal advice",
    body: [
      "Content on this website is informational and does not constitute legal, compliance, billing, or professional advice. Credentialing and enrollment requirements vary by payer, state, and provider. We recommend confirming specific requirements with the relevant payer or authority.",
    ],
  },
  {
    title: "No guarantee of outcomes",
    body: [
      "Payer approval, enrollment decisions, and review timelines are controlled by the payers and other third parties, not by us. While we prepare and follow through on applications, we cannot guarantee approval, enrollment, or a specific timeline.",
    ],
  },
  {
    title: "Inquiries and communications",
    body: [
      "Submitting an inquiry through this site does not create a service agreement or a professional relationship. Any engagement is governed by a separate agreement between you and us.",
      "Please do not submit confidential or sensitive information such as Social Security numbers or patient data through website forms.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The content, branding, and design of this website are owned by us or our licensors and may not be reproduced or used without permission, except as needed to view the site normally.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This site may reference third-party portals, payers, or resources. We are not responsible for the content, availability, or practices of those third parties.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern your use of this website and its inquiry services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        align="left"
      />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed text-body">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-line bg-canvas p-6">
              <h2 className="text-xl font-semibold text-ink">Questions</h2>
              <p className="mt-3 leading-relaxed text-body">
                Reach us at{" "}
                <a href={`mailto:${site.contactEmail}`} className="font-medium text-primary hover:text-primary-dark">
                  {site.contactEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}