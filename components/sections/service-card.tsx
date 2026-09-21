import Link from "next/link";
import type { Service } from "@/content/types";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, compact }: { service: Service; compact?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex flex-col rounded-xl border border-line bg-surface p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card",
        compact && "p-5",
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className={cn("mt-4 text-lg font-semibold text-ink", compact && "text-base")}>
        {service.shortTitle}
      </h3>
      <p className={cn("mt-2 flex-1 text-[0.9375rem] leading-relaxed text-body", compact && "text-sm")}>
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ServiceGrid({ services, className }: { services: Service[]; className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}