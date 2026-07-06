import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description: "Formulário de orçamento da CEZARY.IO.",
};

/**
 * Placeholder temporário — o fluxo multi-etapas real (Zod + Resend + canal
 * secundário) é escopo da Fase 4, ainda não iniciada. Todos os CTAs do site
 * já apontam para esta rota para não haver link quebrado em produção.
 */
export default function Orcamento() {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Pedir orçamento
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          O formulário está a caminho
        </h1>
        <p className="text-text-muted mt-4">
          Estamos finalizando essa etapa. Volte em breve para pedir seu
          orçamento diretamente por aqui.
        </p>
      </div>
    </section>
  );
}
