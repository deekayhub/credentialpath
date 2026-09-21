import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-gradient-to-b from-white to-canvas py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
          <Icon name="badgeCheck" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-ink">Thank you — we&apos;ve got it.</h1>
        <p className="mt-4 text-lg leading-relaxed text-body">
          Your request has been received. A member of our credentialing team will
          review it and respond, typically within one business day. If your
          request is urgent, you&apos;re welcome to email us directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/" icon="arrowRight" iconRight>
            Back to home
          </LinkButton>
          <LinkButton href={`mailto:${site.contactEmail}`} variant="secondary">
            Email us directly
          </LinkButton>
        </div>
        <p className="mt-8 text-sm text-muted">
          In the meantime, you can{" "}
          <Link href="/how-it-works" className="font-medium text-primary hover:text-primary-dark">
            see how the process works
          </Link>{" "}
          or{" "}
          <Link href="/faq" className="font-medium text-primary hover:text-primary-dark">
            read the FAQ
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}