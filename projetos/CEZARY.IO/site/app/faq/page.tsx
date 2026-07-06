import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Preço, prazo, como decidir entre site, sistema e automação, e por que ainda não temos cases publicados.",
};

const perguntas = [
  {
    pergunta: "Quanto custa um projeto com a CEZARY.IO?",
    resposta:
      "Não trabalhamos com tabela de preço fixa, porque cada solução é dimensionada para o problema real do seu negócio — um site institucional simples e um sistema sob medida não custam o mesmo, e fingir que custam seria impreciso. O orçamento é feito depois de entender o que você precisa.",
  },
  {
    pergunta: "Não sei se preciso de site, sistema ou automação. Como decido?",
    resposta:
      "Você não precisa decidir sozinho — a página de Serviços foi feita justamente para isso. Se preferir pular essa etapa, pedir um orçamento já inclui essa conversa.",
    href: "/servicos",
  },
  {
    pergunta: "Preciso contratar as três frentes ao mesmo tempo?",
    resposta:
      "Não. Muitas vezes o problema certo é resolvido só com uma das três. Recomendamos com base no problema, não no que aumentaria o valor do projeto.",
  },
  {
    pergunta: "Vocês atendem negócios pequenos, ou só empresas maiores?",
    resposta:
      "Os dois. Trabalhamos tanto com negócios locais que ainda não têm presença digital séria quanto com empresas em expansão que precisam de soluções mais robustas.",
  },
  {
    pergunta: "Quanto tempo demora um projeto?",
    resposta:
      "Varia com o escopo — um site institucional tem um prazo bem diferente de um sistema feito sob medida. O prazo é definido depois que o escopo está claro, não antes.",
  },
  {
    pergunta: "Preciso entender de tecnologia para trabalhar com vocês?",
    resposta:
      "Não. Cada decisão é explicada em linguagem simples, sem jargão técnico — se algo não ficou claro, o problema é nosso, não seu.",
  },
  {
    pergunta: "O trabalho termina quando o projeto é entregue?",
    resposta:
      "Não necessariamente. Seguimos acompanhando depois da entrega, porque o negócio continua mudando e a solução precisa acompanhar esse ritmo.",
  },
  {
    pergunta: "Por que não tem cases ou portfólio no site?",
    resposta:
      "Porque ainda não temos um case real publicado, e preferimos isso a inventar prova que não existe. A autoridade que oferecemos vem de como pensamos o problema antes de sugerir tecnologia — não do tamanho do portfólio.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
            Perguntas frequentes
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Perguntas frequentes
          </h1>
          <p className="text-text-muted mt-6 max-w-xl text-lg">
            Se sua dúvida for mais específica do que o que está aqui, o
            formulário de orçamento também serve para perguntar.
          </p>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="divide-border mx-auto max-w-3xl divide-y px-6">
          {perguntas.map((item) => (
            <details key={item.pergunta} className="group py-6">
              <summary className="text-text focus-visible:outline-contrast flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2">
                {item.pergunta}
                <span
                  aria-hidden="true"
                  className="text-text-muted shrink-0 font-mono transition-transform duration-150 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-text-muted mt-3 max-w-2xl text-sm">
                {item.resposta}
                {item.href && (
                  <>
                    {" "}
                    <Link
                      href={item.href}
                      className="text-text hover:text-text-muted underline underline-offset-4 transition-colors duration-150 ease-out"
                    >
                      Ver página de Serviços
                    </Link>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <p className="text-text-muted mx-auto max-w-md">
            Ficou alguma dúvida fora dessa lista? O caminho mais rápido é
            perguntar direto, através do formulário de orçamento.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/orcamento">Pedir orçamento</Button>
          </div>
        </div>
      </section>
    </>
  );
}
