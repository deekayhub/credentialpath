import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/content/types";

const stepIcons = ["clipboardList", "document", "fileCheck", "searchCheck", "badgeCheck", "refresh"] as const;

export function ProcessTimeline({
  steps,
  compact,
  className,
}: {
  steps: ProcessStep[];
  compact?: boolean;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3", compact && "gap-6", className)}>
      {steps.map((step, i) => (
        <li key={step.step} className="relative">
          <div
            className={cn(
              "h-full rounded-xl border border-line bg-surface p-6 shadow-soft",
              compact && "p-5",
            )}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  {stepIconPath(stepIcons[i])}
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Step {step.step}
                </p>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              </div>
            </div>
            {!compact && (
              <>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">{step.summary}</p>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function stepIconPath(name: string) {
  const inner: Record<string, ReactNode> = {
    clipboardList: (
      <>
        <path d="M9 5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h6" />
      </>
    ),
    document: (
      <>
        <path d="M8 3h8l4 4v14H8z" />
        <path d="M16 3v4h4" />
        <path d="M11 12h5M11 16h5" />
      </>
    ),
    fileCheck: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v4h4" />
        <path d="M9 14l2 2 4-4" />
      </>
    ),
    searchCheck: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4.3-4.3" />
        <path d="M8.5 11l2 2 3.5-3.5" />
      </>
    ),
    badgeCheck: (
      <>
        <path d="M12 3l2.2 1.7 2.8-.2 1 2.6 2.4 1.4-.6 2.7.6 2.7-2.4 1.4-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.4.6-2.7L3.6 7.5 6 6.1l1-2.6 2.8.2L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    refresh: (
      <>
        <path d="M21 12a9 9 0 1 1-2.6-6.4" />
        <path d="M21 4v5h-5" />
      </>
    ),
  };
  return inner[name];
}