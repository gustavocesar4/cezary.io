import { type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const base =
  "inline-flex items-center justify-center font-sans text-sm font-medium transition-[background-color,border-color,color,opacity,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-contrast disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-sm bg-contrast px-6 py-3 text-bg hover:opacity-85 active:scale-[0.98]",
  secondary:
    "rounded-sm border border-border-hover px-5 py-[calc(0.75rem-1px)] text-text hover:bg-bg-card active:scale-[0.98]",
  ghost:
    "px-1 py-3 text-text-muted hover:text-text hover:underline underline-offset-4",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
