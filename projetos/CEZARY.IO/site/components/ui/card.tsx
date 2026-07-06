import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border-border bg-bg-card rounded-md border p-6",
        interactive &&
          "hover:border-border-hover hover:bg-bg-card-hover cursor-pointer transition-[background-color,border-color] duration-150 ease-out",
        className,
      )}
      {...props}
    />
  );
}
