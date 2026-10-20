import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg" | "sm";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-tight rounded-chip transition-colors duration-150 select-none min-h-[48px] focus-visible:outline-3 focus-visible:outline-control focus-visible:outline-offset-2";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[44px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-3.5 text-lg min-h-[52px]",
  }[size];

  const variantClasses = {
    // Primary: Fill Coral + Teks INK (WCAG AA rasio 5.66:1, DILARANG TEKS PUTIH)
    primary:
      "bg-coral text-ink hover:bg-[#F45D74] active:bg-[#E84A62] shadow-sm",
    // Secondary: Background white + border control line + teks ink
    secondary:
      "bg-white border-2 border-line text-ink hover:border-control hover:bg-paper active:bg-paper/80 shadow-xs",
    // Ghost: transparan untuk aksi ringan
    ghost: "text-ink hover:bg-paper active:bg-paper/80",
  }[variant];

  const combinedClasses = twMerge(clsx(baseClasses, sizeClasses, variantClasses, className));

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
