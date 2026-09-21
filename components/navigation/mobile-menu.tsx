"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[4.5rem] z-40 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "mx-4 overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-all duration-200",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:text-primary",
                    pathname === item.href && "text-primary",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 ml-2 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-[0.9375rem] text-body transition-colors hover:text-primary",
                            pathname === child.href && "text-primary",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-line pt-4">
            <Link
              href="/request-credentialing"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Request Credentialing
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function MobileMenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-canvas lg:hidden"
    >
      <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
    </button>
  );
}