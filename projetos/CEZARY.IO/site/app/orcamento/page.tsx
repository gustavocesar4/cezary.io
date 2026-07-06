import type { Metadata } from "next";

import { OrcamentoForm } from "@/components/site/orcamento-form";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description:
    "Conte sobre o seu negócio e o que precisa — sem tabela de preço fixa, o orçamento é feito depois de entender o problema.",
};

export default function Orcamento() {
  return (
    <section className="border-border border-b">
      <div className="mx-auto max-w-xl px-6 py-16 sm:py-24">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Pedir orçamento
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Vamos entender o seu negócio primeiro
        </h1>
        <p className="text-text-muted mt-4">
          5 etapas rápidas. Nenhuma pergunta trava o envio — se não souber
          responder algo, siga em frente.
        </p>

        <div className="mt-10">
          <OrcamentoForm />
        </div>
      </div>
    </section>
  );
}
