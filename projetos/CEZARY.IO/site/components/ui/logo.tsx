import { type SVGAttributes } from "react";

/**
 * Símbolo "Corte Preciso" (Variação D) — identidade/design-guide.md.
 * Silhueta pura, sem curvas; herda a cor do texto via currentColor.
 */
export function Logo({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <polygon points="16,14 58,14 85,38 40,38 40,62 85,62 58,86 16,86" />
    </svg>
  );
}
