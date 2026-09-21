import { cn } from "@/lib/utils";

/**
 * Collapsible FAQ item. Uses native <details>/<summary> — no JavaScript,
 * keyboard accessible by default.
 */
export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-line rounded-xl border border-line bg-surface", className)}>
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-primary sm:px-6">
            {item.q}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-200 group-open:rotate-180"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <div className="border-t border-line px-5 pb-5 pt-4 text-[0.9375rem] leading-relaxed text-body sm:px-6">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}