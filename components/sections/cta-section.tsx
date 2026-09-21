import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection({
  eyebrow = "Get Started",
  title,
  description,
  primaryCta,
  secondaryCta,
  points,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  points?: string[];
  className?: string;
}) {
  return (
    <section
      className={cn("border-y border-line bg-surface text-ink", className)}
      aria-label={typeof title === "string" ? title : undefined}
    >
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton href={primaryCta.href} icon="arrowRight" iconRight>
                {primaryCta.label}
              </LinkButton>
              {secondaryCta && (
                <LinkButton
                  href={secondaryCta.href}
                  className="border-line text-body hover:border-primary hover:text-primary"
                  variant="secondary"
                >
                  {secondaryCta.label}
                </LinkButton>
              )}
            </div>
          </div>
          {points && (
            <ul className="grid gap-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-line bg-canvas px-4 py-3 text-[0.9375rem] text-body"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}