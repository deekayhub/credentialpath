import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/triorcm-logo.png"
      alt="TrioRCM"
      className={cn("h-9 w-auto", className)}
    />
  );
}