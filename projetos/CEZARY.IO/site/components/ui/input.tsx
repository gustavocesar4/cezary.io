import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const fieldStyles =
  "w-full rounded-sm border border-border bg-bg-card px-3 py-2.5 font-sans text-sm text-text placeholder:text-text-muted transition-[border-color,box-shadow] duration-150 ease-out hover:border-border-hover focus:border-contrast focus:shadow-[0_0_0_1px_var(--color-contrast)] focus:outline-none";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldStyles, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldStyles, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}
