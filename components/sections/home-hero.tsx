import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { heroCompositionBadges } from "@/content/answers";
import { processSteps } from "@/content/process";

export function HomeHero() {
  const preview = processSteps.slice(0, 4);
  return (
    <section className="border-b border-line bg-gradient-to-b from-white via-white to-canvas">
      <Container className="grid gap-12 pb-16 pt-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-3.5 py-1.5 text-[0.8125rem] font-semibold text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
              <path d="M12 3l6.5 2.8v4.7c0 4.2-2.8 7.7-6.5 9.5-3.7-1.8-6.5-5.3-6.5-9.5V5.8L12 3z" />
              <path d="M9 12l2 2 4-4.5" />
            </svg>
            Medical credentialing &amp; payer enrollment
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-[3.25rem]">
            Credentialed providers, enrolled payers, no revenue left waiting.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            We take providers through the full credentialing lifecycle —
            data collection, documentation, payer enrollment, follow-up, and
            re-credentialing — so the delay between hire and first billable
            encounter keeps shrinking.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/request-credentialing" icon="arrowRight" iconRight>
              Request Credentialing
            </LinkButton>
            <LinkButton href="/services" variant="secondary">
              Explore Services
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary-light to-transparent opacity-70 blur-2xl"
          />
          <div className="relative rounded-2xl border border-line bg-surface p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              The credentialing workflow
            </p>
            <ol className="mt-4 space-y-3">
              {preview.map((step, i) => (
                <li key={step.step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-light text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{step.title}</p>
                    <p className="text-xs text-muted">{step.summary}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                  5
                </span>
                <p className="text-sm font-semibold text-ink">…and into re-credentialing</p>
              </li>
            </ol>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
              {heroCompositionBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-line bg-canvas px-2.5 py-1 text-[0.75rem] font-semibold tracking-wide text-ink"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}