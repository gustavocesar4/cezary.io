import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites, sistemas e automações com IA resolvem problemas diferentes. Descubra qual frente faz sentido para o seu negócio.",
};

const diagnostico = [
  {
    titulo: "Indica Sites",
    texto:
      "Sua presença digital não existe, está desatualizada ou não gera contato nenhum.",
    href: "/servicos/sites",
    cta: "Ver frente de Sites",
  },
  {
    titulo: "Indica Sistemas",
    texto:
      "Uma parte da operação ainda roda no improviso, sem uma ferramenta pensada especificamente pra ela.",
    href: "/servicos/sistemas",
    cta: "Ver frente de Sistemas",
  },
  {
    titulo: "Indica Automações com IA",
    texto:
      "Você já tem site e sistema, mas eles não conversam entre si — ou uma tarefa repetitiva consome tempo que poderia ir para outra coisa.",
    href: "/servicos/automacoes-ia",
    cta: "Ver frente de Automações com IA",
  },
];

export default function Servicos() {
  return (
    <>
      {/* Abertura */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
            Serviços
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Qual das três frentes resolve o seu problema?
          </h1>
          <p className="text-text-muted mt-6 max-w-xl text-lg">
            Sites, sistemas e automações com IA resolvem problemas diferentes.
            Esta página ajuda a identificar qual delas — ou qual combinação —
            faz sentido para o seu negócio.
          </p>
        </div>
      </section>

      {/* Diagnóstico */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Comece pelo que você está sentindo, não pelo nome do serviço
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {diagnostico.map((item) => (
              <Card key={item.href} className="flex flex-col">
                <p className="text-text-muted font-mono text-xs tracking-wide uppercase">
                  {item.titulo}
                </p>
                <p className="text-text-muted mt-3 flex-1 text-sm">
                  {item.texto}
                </p>
                <Button
                  variant="ghost"
                  href={item.href}
                  className="mt-4 self-start px-0"
                >
                  {item.cta}
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-text-muted mt-8 max-w-xl">
            Não tem certeza qual se aplica? Pedir um orçamento também serve pra
            isso — a gente ajuda a identificar antes de qualquer coisa.
          </p>
        </div>
      </section>

      {/* Fechamento */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <p className="text-text-muted mx-auto max-w-md">
            As três frentes aparecem separadas nesta página só para facilitar a
            navegação — na prática, muitas vezes elas se combinam. Se quiser
            entender por que trabalhamos assim, veja a página Sobre.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/orcamento">Pedir orçamento</Button>
            <Button variant="secondary" href="/sobre">
              Sobre
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
