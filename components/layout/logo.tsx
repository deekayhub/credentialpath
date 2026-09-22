import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-soft"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 3l6.5 2.8v4.7c0 4.2-2.8 7.7-6.5 9.5-3.7-1.8-6.5-5.3-6.5-9.5V5.8L12 3z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-semibold tracking-tight",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        <span className={tone === "light" ? "text-white" : "text-ink"}>AKS</span>
        <span className="text-primary">Credential</span>
      </span>
    </span>
  );
}