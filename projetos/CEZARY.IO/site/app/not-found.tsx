import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Erro 404
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Essa página não existe
        </h1>
        <p className="text-text-muted mt-4">
          O link pode estar errado ou a página pode ter mudado de endereço.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Voltar para a home</Button>
          <Button variant="secondary" href="/servicos">
            Ver serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
