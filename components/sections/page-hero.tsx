import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  breadcrumbs?: { label: string; href?: string }[];
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-line bg-gradient-to-b from-white to-canvas",
        className,
      )}
    >
      <Container
        className={cn(
          "py-16 md:py-20",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {breadcrumbs && (
          <Breadcrumbs
            items={breadcrumbs}
            className={cn("mb-6", align === "center" && "justify-center")}
          />
        )}
        {eyebrow && (
          <p className="mx-auto mb-4 inline-block text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div
            className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
              align === "center" && "justify-center",
            )}
          >
            {primaryCta && (
              <LinkButton href={primaryCta.href} icon="arrowRight" iconRight>
                {primaryCta.label}
              </LinkButton>
            )}
            {secondaryCta && (
              <LinkButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </LinkButton>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}