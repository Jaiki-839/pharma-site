import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  ariaLabel,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] font-heading font-semibold transition-colors duration-200 focus-ring";

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-white text-primary border border-border hover:border-primary",
    outline: "bg-transparent text-white border border-white/70 hover:bg-white/10",
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {icon}
      {children}
    </Link>
  );
}
