import type { Metadata } from "next";

import {
  ServiceClosing,
  ServiceHero,
  ServicePoints,
  ServiceTechNote,
} from "@/components/site/service-sections";

export const metadata: Metadata = {
  title: "Sistemas",
  description:
    "Um sistema deixa de ser custo quando o problema que ele resolve já custava mais do que ele.",
};

export default function Sistemas() {
  return (
    <>
      <ServiceHero
        eyebrow="Sistemas"
        headline="Um sistema deixa de ser custo quando o problema que ele resolve já custava mais do que ele."
        subheadline="Retrabalho, erro manual e processo que não escala têm um custo real, mesmo sem aparecer numa nota fiscal. Um sistema bem pensado existe para eliminar esse custo invisível — não para adicionar mais tecnologia à sua operação."
      />

      <ServicePoints
        titulo="O que muda quando o processo passa a ter um sistema"
        pontos={[
          {
            titulo: "Organização",
            texto:
              "Cada etapa do processo passa a ter um lugar certo — não depende mais de lembrar, perguntar ou torcer para que alguém não esqueça.",
          },
          {
            titulo: "Menos erro, menos retrabalho",
            texto:
              "O que antes dependia de digitar duas vezes, copiar de um lugar para o outro ou conferir manualmente, passa a acontecer uma vez só, certo.",
          },
          {
            titulo: "Previsibilidade",
            texto:
              "Crescer deixa de significar contratar mais gente só para dar conta do mesmo processo manual — o sistema absorve o volume que a operação humana não escala.",
          },
        ]}
      />

      <ServiceTechNote
        titulo="A tecnologia entra depois do processo, não antes"
        texto="Linguagem de programação, banco de dados, integração entre plataformas — essas escolhas técnicas resolvem o como, nunca definem o quê. Primeiro entendemos o processo que precisa de um sistema; a arquitetura técnica é montada para servir exatamente esse processo, não para caber num pacote pronto."
      />

      <ServiceClosing texto="Quanto mais a operação cresce, mais alto tende a ficar o custo de continuar sem um sistema pensado para ela." />
    </>
  );
}
