import Link from "next/link";
import { cn } from "@/lib/utils";
import type { IconName } from "@/content/types";
import { Icon } from "@/components/icon";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border border-line bg-surface text-ink hover:border-primary hover:text-primary",
  ghost: "text-primary hover:bg-primary-light",
  onDark:
    "bg-white text-ink hover:bg-primary-light",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: IconName;
  iconRight?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  icon,
  iconRight,
  ...rest
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {icon && !iconRight && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
      {children}
      {icon && iconRight && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "lg",
  className,
  icon,
  iconRight,
  ...rest
}: CommonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {icon && !iconRight && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
      {children}
      {icon && iconRight && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
    </button>
  );
}