import { Icon } from "@/components/icon";
import { differentiators } from "@/content/answers";
import { cn } from "@/lib/utils";

export function Differentiators({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {differentiators.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-line bg-surface p-6 shadow-soft transition-shadow hover:shadow-card"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
            <Icon name={item.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}