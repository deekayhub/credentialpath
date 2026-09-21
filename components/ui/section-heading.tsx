import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold text-ink md:text-[2.25rem] md:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed text-body", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}