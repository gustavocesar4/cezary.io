import type { Metadata } from "next";

import {
  ServiceClosing,
  ServiceHero,
  ServicePoints,
  ServiceTechNote,
} from "@/components/site/service-sections";

export const metadata: Metadata = {
  title: "Sites",
  description:
    "Um site não é uma página — é a primeira decisão de negócio que o seu cliente toma sobre você.",
};

export default function Sites() {
  return (
    <>
      <ServiceHero
        eyebrow="Sites"
        headline="Um site não é uma página — é a primeira decisão de negócio que o seu cliente toma sobre você."
        subheadline="Antes de entrar em contato, a maioria das pessoas decide se confia ou não na sua empresa só de ver o site. Essa decisão acontece em segundos, e afeta diretamente quantas delas viram cliente."
      />

      <ServicePoints
        titulo="O que decide essa confiança, na prática"
        pontos={[
          {
            titulo: "Clareza",
            texto:
              "Fica claro, em segundos, o que a empresa faz e para quem — sem exigir esforço de quem está visitando.",
          },
          {
            titulo: "Cuidado",
            texto:
              "O site parece atualizado e cuidado, não abandonado. Isso é lido como reflexo direto de como o negócio é gerido.",
          },
          {
            titulo: "Direção",
            texto:
              "Fica óbvio o que fazer a seguir. Confusão nesse momento custa contato — mesmo quando a empresa por trás é excelente.",
          },
        ]}
      />

      <ServiceTechNote
        titulo="A técnica existe para servir isso — não o contrário"
        texto="Framework, velocidade de carregamento, otimização para buscadores — tudo isso importa, mas como consequência de um objetivo já definido, nunca como ponto de partida. Primeiro decidimos o que o site precisa comunicar e para quem. As escolhas técnicas vêm depois, para sustentar isso — não para impressionar com jargão que o seu cliente final nunca vai ver."
      />

      <ServiceClosing texto="Se o seu site atual não gera essa confiança nos primeiros segundos, ele pode estar afastando clientes antes mesmo do primeiro contato." />
    </>
  );
}
