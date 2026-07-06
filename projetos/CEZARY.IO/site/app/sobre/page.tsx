import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Site, sistema e automação não deveriam ser três decisões separadas. Entenda por que a CEZARY.IO trabalha assim.",
};

export default function Sobre() {
  return (
    <>
      {/* Abertura (a tese) */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
            Por que existimos
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Site, sistema e automação não deveriam ser três decisões separadas.
          </h1>
          <p className="text-text-muted mt-6 max-w-xl text-lg">
            A CEZARY.IO existe porque a maioria dos problemas de tecnologia
            nasce antes da tecnologia — na forma como estratégia de negócio,
            desenvolvimento de software e IA são tratados como escolhas
            independentes, em vez de partes do mesmo processo.
          </p>
        </div>
      </section>

      {/* O raciocínio por trás da forma de trabalhar */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Por que separar essas decisões custa caro
          </h2>
          <div className="text-text-muted mt-6 max-w-2xl space-y-4">
            <p>
              Um site bem feito não gera resultado se não nasceu de uma
              estratégia real de crescimento. Um sistema automatiza um processo
              mais rápido, mas continua errado se o processo em si nunca foi
              questionado. E uma automação com IA encaixada sem entender o fluxo
              da operação vira uma ferramenta que ninguém usa.
            </p>
            <p>
              Isso acontece quando site, sistema e automação são tratados como
              produtos à venda, escolhidos antes de entender o problema. Na
              CEZARY.IO, a ordem é inversa: primeiro entendemos o problema real
              do negócio, depois decidimos qual combinação das três frentes
              resolve isso de verdade — não qual delas faz mais sentido vender.
            </p>
          </div>
        </div>
      </section>

      {/* A forma de trabalhar na prática */}
      <section className="border-border border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Nem todo problema precisa das três frentes
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl">
            Um negócio pode precisar só de um site bem construído. Outro pode
            não precisar de site nenhum, e sim de um sistema que resolva um
            gargalo interno. A integração entre estratégia, desenvolvimento e IA
            não significa vender as três frentes sempre — significa ter clareza
            suficiente sobre o negócio para recomendar só o que ele realmente
            precisa, mesmo que seja menos do que poderíamos vender.
          </p>
        </div>
      </section>

      {/* Fechamento */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <p className="text-text-muted mx-auto max-w-md">
            Se essa forma de pensar faz sentido para o seu negócio, o próximo
            passo é simples: nos conte o que está travando, e nós dizemos o que
            realmente faz sentido fazer a respeito.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/orcamento">Pedir orçamento</Button>
            <Button variant="secondary" href="/servicos">
              Conhecer as frentes de trabalho
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
