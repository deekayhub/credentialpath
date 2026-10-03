"use client";

import { useCallback, useLayoutEffect } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

/* Must match the inline script in app/layout.tsx. */
const STORAGE_KEY = "theme";

function readStoredTheme(): "light" | "dark" {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function currentTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/* The `data-theme` attribute on <html> is the single source of truth. Both icons
   ship in the DOM and the `dark:` variant decides which one shows, so the server
   HTML and the first client render are byte-identical — no hydration mismatch.
   That also means no React state is needed to repaint on toggle. */
export function ThemeToggle({ className }: { className?: string }) {
  /* React's Strict Mode remounts <html> in development and resets it to only the
     attributes JSX manages — which would wipe what the inline script set and hand
     the user back to `data-theme="light"`. Re-apply before paint; a no-op in prod. */
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", readStoredTheme());
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage unavailable (private mode) — the attribute still switches. */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-body transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
    >
      <Icon name="moon" className="h-5 w-5 dark:hidden" />
      <Icon name="sun" className="hidden h-5 w-5 dark:block" />
    </button>
  );
}