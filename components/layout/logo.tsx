import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /**
   * "auto" swaps on the `data-theme` attribute — for use on theme-aware surfaces
   * like the header. "onDark" always renders the transparent asset, for surfaces
   * that stay dark in both themes (the footer callout band).
   */
  variant?: "auto" | "onDark";
};

/* Both assets ship in the DOM and the `dark:` variant decides which one shows,
   mirroring ThemeToggle. Swapping `src` in JS instead would desync the server HTML
   from the first client render. The two files share an aspect ratio, so `h-9 w-auto`
   sizes either one correctly. Only one is ever display:none, so exactly one image
   lands in the accessibility tree. */
export function Logo({ className, variant = "auto" }: LogoProps) {
  const onDark = (
    <img
      src="/triorcm-logo-dark.png"
      alt="TrioRCM"
      className={cn("h-9 w-auto", variant === "auto" ? "hidden dark:block" : "block", className)}
    />
  );

  if (variant === "onDark") return onDark;

  return (
    <>
      <img
        src="/triorcm-logo.png"
        alt="TrioRCM"
        className={cn("h-9 w-auto dark:hidden", className)}
      />
      {onDark}
    </>
  );
}
