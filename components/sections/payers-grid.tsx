import Link from "next/link";
import type { Payer } from "@/content/types";
import { cn } from "@/lib/utils";

const categoryConfig: Record<
  Payer["category"],
  { label: string; blurb: string }
> = {
  governmental: {
    label: "Government & Public Payers",
    blurb: "Medicare, Medicaid, and Railroad Medicare enrollment support.",
  },
  commercial: {
    label: "Commercial Payers",
    blurb: "Private insurance plans and networks commonly used by practices.",
  },
  registration: {
    label: "Registries & Portals",
    blurb: "CAQH ProView, PECOS, NPI/NPPES, and Availity profile maintenance.",
  },
};

export function PayerGrid({ payers }: { payers: Payer[] }) {
  const groups: Payer["category"][] = ["governmental", "commercial", "registration"];

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {groups.map((category) => {
        const members = payers.filter((p) => p.category === category);
        const config = categoryConfig[category];
        return (
          <div key={category} className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {config.label}
            </p>
            <p className="mt-1 text-sm text-body">{config.blurb}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {members.map((payer) => (
                <li
                  key={payer.name}
                  className="flex items-center gap-2.5 rounded-lg border border-line bg-canvas px-3 py-2.5 text-[0.9375rem] font-medium text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {payer.name}
                  {payer.note && (
                    <span className="ml-auto text-xs font-normal text-muted">{payer.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function PayerDisclaimer({ note, className }: { note?: string; className?: string }) {
  if (!note) return null;
  return (
    <p className={cn("text-sm leading-relaxed text-muted", className)}>{note}</p>
  );
}

export function PayerLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
        <path d="M4 12h16M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}