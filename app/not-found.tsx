import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-white to-canvas py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-body">
          The page you&apos;re looking for may have moved or never existed. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/" icon="arrowRight" iconRight>
            Back to home
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact us
          </LinkButton>
        </div>
        <p className="mt-8 text-sm text-muted">
          Looking for a service?{" "}
          <Link href="/services" className="font-medium text-primary hover:text-primary-dark">
            Browse all services
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}