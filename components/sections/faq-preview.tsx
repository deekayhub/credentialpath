import Link from "next/link";
import type { FaqItem } from "@/content/types";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FaqPreview({
  items,
  title = "Questions, answered",
  href,
  className,
}: {
  items: FaqItem[];
  title?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-ink">{title}</h2>
          {href && (
            <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
              View all FAQs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
                <path d="M4 12h16M13 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      )}
      <Accordion items={items} />
    </div>
  );
}