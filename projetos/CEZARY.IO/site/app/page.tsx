import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CEZARY.IO",
  description:
    "Sites, sistemas e automações com IA que resolvem problemas reais do seu negócio — sem complexidade desnecessária.",
};

const cenarios = [
  "Sabe que precisa de tecnologia, mas não sabe por onde começar — e teme contratar errado",
  "Cresceu, mas os processos continuam manuais e viraram gargalo",
  "Já investiu em sistemas que não conversam entre si",
  "Tem uma presença digital que não reflete a qualidade do trabalho que entrega",
];

const frentes = [
  {
    titulo: "Sites",
    texto:
      "Presença digital que reflete o nível do seu trabalho — rápida, clara e pensada para gerar contato qualificado, não só existir.",
    href: "/servicos/sites",
  },
  {
    titulo: "Sistemas",
    texto:
      "Ferramentas sob medida para os processos que hoje dependem de planilha, retrabalho manual ou boa vontade da equipe.",
    href: "/servicos/sistemas",
  },
  {
    titulo: "Automações com IA",
    texto:
      "Menos tempo em tarefas repetitivas, mais tempo para o que gera resultado — automatizando processos e conectando os sistemas que sua empresa já usa.",
    href: "/servicos/automacoes-ia",
  },
];

const compromissos = [
  {
    titulo: "Entendemos antes de sugerir",
    texto:
      "Nenhuma solução começa pela tecnologia. Começa por entender o que está travando o seu negócio.",
  },
  {
    titulo: "Clareza em cada etapa",
    texto:
      "Você sabe o que está sendo feito e por quê, sem jargão técnico e sem letras miúdas.",
  },
  {
    titulo: "Acompanhamos, não só entregamos",
    texto:
      "O trabalho não termina na entrega. Ajustamos a solução conforme o seu negócio muda.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
            Consultoria em tecnologia
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Resultado primeiro. Tecnologia depois.
          </h1>
          <p className="text-text-muted mt-6 max-w-xl text-lg">
            Sites, sistemas e automações com IA desenhados a partir do que a sua
            empresa realmente precisa — sem complexidade desnecessária.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/orcamento">Pedir orçamento</Button>
            <Button variant="secondary" href="/servicos">
              Conhecer os serviços
            </Button>
          </div>
        </div>
      </section>

      {/* O problema que resolvemos */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Onde o crescimento costuma travar
          </h2>
          <p className="text-text-muted mt-3">
            Reconhece algum destes cenários?
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {cenarios.map((cenario) => (
              <li
                key={cenario}
                className="border-border bg-bg-card text-text-muted rounded-md border p-5 text-sm"
              >
                {cenario}
              </li>
            ))}
          </ul>
          <p className="text-text-muted mt-8">
            Cada um desses cenários pede uma solução diferente — é por isso que
            trabalhamos assim:
          </p>
        </div>
      </section>

      {/* As frentes de trabalho */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            As três frentes de trabalho
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {frentes.map((frente) => (
              <div
                key={frente.titulo}
                className="border-border bg-bg-card flex flex-col rounded-md border p-6"
              >
                <h3 className="text-text font-semibold">{frente.titulo}</h3>
                <p className="text-text-muted mt-3 flex-1 text-sm">
                  {frente.texto}
                </p>
                <Button
                  variant="ghost"
                  href={frente.href}
                  className="mt-4 self-start px-0"
                >
                  Saiba mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Como trabalhamos
          </h2>
          <p className="text-text-muted mt-3">
            Três compromissos que guiam cada projeto, independente do tamanho.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {compromissos.map((compromisso) => (
              <div key={compromisso.titulo}>
                <h3 className="text-text font-semibold">
                  {compromisso.titulo}
                </h3>
                <p className="text-text-muted mt-2 text-sm">
                  {compromisso.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Vamos conversar sobre o seu negócio?
          </h2>
          <p className="text-text-muted mx-auto mt-3 max-w-md">
            Pedir um orçamento não compromete nada — é a forma mais rápida de
            entender se faz sentido trabalharmos juntos.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/orcamento">Pedir orçamento</Button>
          </div>
        </div>
      </section>
    </>
  );
}
