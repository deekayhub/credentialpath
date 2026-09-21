import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/content/site";
import { getPageMeta } from "@/content/seo";

export const metadata: Metadata = {
  ...getPageMeta("/privacy-policy"),
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "We collect the information you choose to provide when you submit an inquiry or request credentialing services. This may include your name, email address, phone number, practice or organization name, provider type, specialty, state, the services you're interested in, your preferred contact method, and any message you include.",
      "We also collect limited technical information automatically when you visit the site, such as your browser type and general usage patterns, to help us keep the site working correctly.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you submit to respond to your inquiry, to scope and provide credentialing and enrollment services, and to communicate with you about your request.",
      "We do not sell your personal information. We do not share it with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "Sensitive information",
    body: [
      "Please do not submit patient information, Social Security numbers, or other sensitive provider or patient identifiers through the website forms. If documentation is needed for credentialing, we will request it through a secure intake process after we connect.",
    ],
  },
  {
    title: "Where your information goes",
    body: [
      "Inquiry submissions are delivered to our team by email. Depending on our configuration, submissions may pass through a third-party email provider strictly for the purpose of delivery.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We retain inquiry information for as long as needed to respond to your request and to maintain records of our communications. You may ask us to delete your inquiry information at any time.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to access, correct, or delete the information you have submitted by contacting us at the email address below. You can also ask us to stop contacting you, and we will honor that request.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we do, we will revise the effective date at the top of this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect the information you share with us through this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
              <h2 className="text-xl font-semibold text-ink">Contact us</h2>
              <p className="mt-3 leading-relaxed text-body">
                Questions about this policy? Email us at{" "}
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