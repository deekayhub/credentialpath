import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: "primary" | "neutral" | "amber";
  className?: string;
}) {
  const tones = {
    primary: "bg-primary-light text-primary",
    neutral: "bg-canvas text-body border border-line",
    amber: "bg-amber-light text-amber",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.8125rem] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}