# Planejamento — Plataforma oficial Cezary.io

> Documento de planejamento. Nenhum código foi escrito ainda — esse arquivo consolida
> as decisões da entrevista de descoberta antes do início do desenvolvimento.

**Data:** 2026-07-04
**Status:** planejamento fechado — pronto para iniciar a Fase 0

---

## 1. Resumo executivo

Site institucional + geração de leads da Cezary.io, construído em Next.js e hospedado
na Vercel. Objetivo: transmitir autoridade técnica e estratégica, atender tanto pequenos
negócios quanto empresas em expansão, e converter visitantes através de um formulário
de orçamento qualificado. Identidade visual dark, minimalista e sofisticada. Sem prazo
fixo — prioridade é solidez.

---

## 2. Objetivo e posicionamento

- **Tipo de site:** híbrido — vitrine institucional com foco forte em geração de leads.
- **Ação principal esperada do visitante:** pedir orçamento.
- **Mensagem central / diferencial:** a Cezary.io não entrega só site ou sistema — une
  estratégia de negócio, desenvolvimento de software e inteligência artificial para
  gerar eficiência, crescimento e resultado real para o cliente. Essa frase deve
  aparecer, em variações, na Home e na página Sobre.
- **Tom de voz:** o já definido em `_memoria/preferencias.md` — claro, objetivo,
  consultivo. Sem jargão de marketing ("alavanque", "sinergia", "disruptivo").

## 3. Público-alvo

Dois perfis atendidos igualmente, sem hierarquia de prioridade:

1. **Pequenos negócios locais** buscando modernizar com site, sistema ou automação.
2. **Empresas em expansão** buscando soluções sob medida e mais robustas.

A copy deve funcionar para ambos sem soar genérica — evitar linguagem que fale só
com startups de tech ou só com pequeno comércio.

## 4. Arquitetura de informação (sitemap)

```
/                       Home
/servicos               Serviços (visão geral)
  /servicos/sites
  /servicos/sistemas
  /servicos/automacoes-ia
/sobre                  Sobre (posicionamento, diferencial, forma de trabalho)
/cases                  Cases / Portfólio (fora do menu até existir o 1º case — ver seção 10)
/blog                   Blog (listagem)
  /blog/[slug]          Artigo individual
/faq                    Perguntas frequentes
/orcamento              Formulário de orçamento qualificado (CTA principal)
```

Notas:
- **Sem exibição de preços em nenhuma página** — tudo direciona pro formulário
  de orçamento (`/orcamento`), conforme decidido.
- **Sem área de cliente logada** neste momento — não foi selecionada como
  funcionalidade prioritária.
- WhatsApp flutuante aparece em todas as páginas (ver seção 5).

## 5. Funcionalidades

| Funcionalidade | Incluído no lançamento | Observação |
|---|---|---|
| Formulário de orçamento qualificado | Sim | Multi-etapas — ver seção 6 |
| Blog com SEO | Sim | Peça-mãe do conteúdo, já integrado ao pipeline `/publicar-tema` e `/aprovar-post` |
| WhatsApp flutuante | Sim | Número ainda pendente de configuração (ver seção 11) |
| Calculadora/simulador de orçamento | Não | Não selecionada |
| Área de cliente (login) | Não | Não selecionada |
| Multi-idioma | Não | Site só em português |

## 6. Formulário de orçamento (qualificado, multi-etapas)

Estrutura sugerida (a refinar na fase de conteúdo):

1. **Etapa 1 — Tipo de necessidade:** site / sistema / automação-IA / não sei ainda
2. **Etapa 2 — Contexto do negócio:** nome da empresa, segmento, tamanho aproximado
3. **Etapa 3 — Escopo:** o que já existe hoje (nada / site desatualizado / sistema manual etc.)
4. **Etapa 4 — Investimento e prazo:** faixa de investimento disponível (opcional, sem travar envio) e urgência
5. **Etapa 5 — Contato:** nome, e-mail, WhatsApp, melhor horário de contato

Como não há preços públicos, a etapa de investimento ajuda a qualificar o lead sem
expor tabela de valores.

## 7. Identidade visual

**Direção definida:** dark premium — minimalista, sofisticado, inspirado em tecnologia
de alto padrão, autoridade e estratégia. Referências sutis a império/liderança, sem
elementos históricos explícitos (nada literal — herança visual, não iconografia).
Interface elegante, limpa, moderna. Transmitir confiança, exclusividade, inovação.

**Logo:** não existe — precisa ser criado como parte da Fase 0 (identidade).

**Cores, tipografia e design system:** definidos apenas na Fase 0 de identidade
visual, não neste planejamento. Este documento fixa a direção (dark premium,
tecnologia, autoridade, minimalismo) — as escolhas concretas de paleta, fontes,
espaçamento, border-radius etc. serão decididas na Fase 0 e gravadas em
`identidade/design-guide.md` naquele momento.

## 8. Stack técnico e infraestrutura

- **Framework:** Next.js (App Router) + React + TypeScript
- **Estilização:** Tailwind CSS (agilidade de manutenção solo, consistente com design
  system dark definido acima)
- **Conteúdo do blog:** arquivos Markdown/MDX com frontmatter (`title`, `description`,
  `publishedAt`, `author`, `keywords`, `draft`) — compatível com o pipeline já existente
  das skills `/publicar-tema` e `/aprovar-post`
- **Hospedagem:** Vercel, deploy automático a partir do `main` no GitHub
- **Domínio:** `cezary.io` — **ainda não registrado**, é pendência (seção 11)
- **Formulário → backend:** recomendação é uma API route no próprio Next.js que
  dispara e-mail de notificação (ex: via Resend ou similar) e opcionalmente grava o
  lead numa planilha/banco simples — a decidir em detalhe na fase técnica, não neste
  documento
- **Analytics:** Google Analytics, Google Search Console, Meta Pixel — todos
  configurados desde o lançamento

## 9. Compatibilidade com o pipeline de conteúdo existente

As skills `/publicar-tema` e `/aprovar-post` já pressupõem:

- Pasta `site/` na raiz do workspace com o blog
- Posts em Markdown com `draft: true/false` no frontmatter
- Imagens de carrossel copiadas para `site/.../public/img/posts/<slug>/`
- Deploy automático via Git push (Netlify ou Vercel)
- Variável `SITE_URL` no `.env`

**Isso será respeitado**: a estrutura de pastas do Next.js vai seguir esse padrão
(`site/content/blog/<slug>.mdx` ou equivalente), para que as skills de conteúdo
continuem funcionando sem adaptação manual quando o site entrar no ar.

## 10. Conteúdo necessário para o lançamento

Como tudo começa do zero, antes do desenvolvimento visual entra uma fase de
conteúdo/copy:

- Textos institucionais: Home, Sobre, cada página de Serviço, FAQ
- **Cases/Portfólio:** lança **sem cases reais**. Decidido: a rota `/cases` existe no
  código mas **fica fora do menu principal** até existir o primeiro case real — evita
  a seção vazia soar como falta de experiência. Adicionar ao menu assim que o primeiro
  case for publicado.
- Estratégia de conteúdo do blog: ainda não existe `marketing/seo/05-estrategia-conteudo.md`
  — recomenda-se rodar `/seo` antes ou em paralelo à Fase 2, pra já lançar com pauta
  de artigos definida em vez de decidir tema por tema.

## 11. Pendências (fora do controle do planejamento, precisam de ação do usuário)

- [ ] Registrar o domínio `cezary.io`
- [ ] Configurar número de WhatsApp Business dedicado (hoje não existe)
- [ ] Definir paleta, tipografia e design system na Fase 0 e gravar em `identidade/design-guide.md`
- [ ] Criar contas de Google Analytics, Search Console e Meta Pixel (se ainda não existirem)
- [ ] Decidir backend do formulário (e-mail simples vs. planilha vs. CRM leve)

## 12. Fases confirmadas

1. **Fase 0 — Identidade:** aprovar direção visual, criar logo, preencher
   `identidade/design-guide.md` definitivo
2. **Fase 1 — Conteúdo base:** escrever textos institucionais (Home, Sobre, Serviços, FAQ)
3. **Fase 2 — Estrutura técnica:** scaffold do Next.js, estrutura de pastas compatível
   com o pipeline de blog, configuração Tailwind, deploy inicial na Vercel (página em
   construção)
4. **Fase 3 — Páginas institucionais:** implementação visual de Home, Serviços, Sobre, FAQ
5. **Fase 4 — Formulário de orçamento:** fluxo multi-etapas + integração de backend/notificação
6. **Fase 5 — Blog:** listagem, página de artigo, integração com `/publicar-tema` e `/aprovar-post`
7. **Fase 6 — Analytics e lançamento:** GA, GSC, Meta Pixel, domínio, revisão final, ar

---

## Próximos passos

Planejamento fechado. Todas as decisões da seção 12 (ordem de fases) e da seção 10
(Cases fora do menu) estão confirmadas. Próximo passo é iniciar a **Fase 0 —
Identidade**: definir paleta, tipografia, logo e design system, e gravar o resultado
em `identidade/design-guide.md`.
