import type { Metadata } from "next";

import {
  ServiceClosing,
  ServiceHero,
  ServicePoints,
  ServiceTechNote,
} from "@/components/site/service-sections";

export const metadata: Metadata = {
  title: "Automações com IA",
  description:
    "A pergunta certa não é se sua empresa precisa de IA. É o que, na rotina de hoje, ainda é feito à mão sem precisar ser.",
};

export default function AutomacoesIA() {
  return (
    <>
      <ServiceHero
        eyebrow="Automações com IA"
        headline="A pergunta certa não é se sua empresa precisa de IA. É o que, na rotina de hoje, ainda é feito à mão sem precisar ser."
        subheadline={
          'Automação com IA existe para resolver duas coisas concretas: processos manuais que consomem horas todo mês, e sistemas que hoje não trocam informação entre si — não para adicionar um recurso "com IA" que ninguém no seu negócio vai usar.'
        }
      />

      <ServicePoints
        pontos={[
          {
            titulo: "Tempo devolvido",
            texto:
              "Tarefas repetitivas que hoje consomem horas da sua equipe — preenchimento, cópia de dados, respostas padronizadas — passam a acontecer sozinhas.",
          },
          {
            titulo: "Informação em um lugar só",
            texto:
              "Um cadastro feito uma vez aparece automaticamente em todos os lugares que precisam dele — sem digitar de novo, sem exportar planilha, sem depender de alguém lançar isso manualmente em outro sistema.",
          },
          {
            titulo: "Decisão só onde precisa de humano",
            texto:
              "A automação cuida do repetitivo; as decisões que exigem julgamento continuam sendo feitas por pessoas, não por um algoritmo tentando substituir isso.",
          },
        ]}
      />

      <ServiceTechNote
        titulo="A tecnologia entra depois de mapear o processo, não antes"
        texto="Modelo de IA, integração via API, automação de fluxo de trabalho — são as ferramentas, não o objetivo. Primeiro mapeamos exatamente onde o tempo está sendo perdido; a solução técnica — que pode incluir IA, ou simplesmente conectar dois sistemas sem nenhuma IA envolvida — vem depois, para resolver isso."
      />

      <ServiceClosing texto="Se existe uma tarefa que sua equipe repete toda semana, exatamente da mesma forma, ela provavelmente já pode ser automatizada." />
    </>
  );
}
