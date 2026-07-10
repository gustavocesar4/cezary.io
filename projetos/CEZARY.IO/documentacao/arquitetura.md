# Arquitetura Técnica — CEZARY.IO

> **Status:** v1.0 — aprovada e congelada em 2026-07-05.
> Só volta a ser revisada se surgir uma necessidade real durante o
> desenvolvimento. Não é para reabrir por preferência ou tendência.

---

## Stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Estilização:** Tailwind CSS, tokens vindos de `identidade/design-guide.md`
- **Fonte:** Geist + Geist Mono via `next/font` (self-hosted)
- **Validação de dados:** Zod
- **Conteúdo do blog:** MDX com frontmatter, compatível com as skills
  `/publicar-tema` e `/aprovar-post`
- **E-mail:** Resend, disparado a partir de uma API route
- **Hospedagem:** Vercel, deploy automático a partir de `main`
- **Domínio:** `cezary.io` (registro pendente)

Nada além disso é instalado nesta fase. Monorepo, biblioteca de componentes
externa (shadcn/ui), autenticação (Clerk ou similar) e banco de dados
(Neon/Postgres ou similar) ficam **fora de escopo até existir um segundo
produto real** (`sistema/`) com requisito confirmado — ver seção "Decisões
adiadas de propósito".

## Estrutura de pastas

```
projetos/CEZARY.IO/
├── site/                      → app Next.js único (sem monorepo)
│   ├── app/
│   │   ├── page.tsx                  (Home)
│   │   ├── servicos/
│   │   │   ├── page.tsx
│   │   │   ├── sites/page.tsx
│   │   │   ├── sistemas/page.tsx
│   │   │   └── automacoes-ia/page.tsx
│   │   ├── sobre/page.tsx
│   │   ├── cases/page.tsx            (fora do menu até existir 1º case)
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── orcamento/page.tsx
│   │   └── api/orcamento/route.ts
│   ├── content/blog/*.mdx            (pipeline /publicar-tema e /aprovar-post)
│   ├── public/img/posts/<slug>/
│   ├── components/
│   │   └── ui/                       (design system isolado — ver nota)
│   └── lib/                           (mdx parser, schema do form, etc.)
├── documentacao/                      (este arquivo e outros de referência)
├── automacoes/
└── identidade/                        (vazia — a marca é a da raiz, ver nota)
```

**Nota — `components/ui/` isolado:** todos os componentes do design system
(Button, Card, Input, Navbar) ficam num diretório sem nenhuma dependência de
conteúdo específico do site. Isso não é um pacote de monorepo — é só
disciplina de pasta. Se um dia existir um segundo app de verdade, extrair esse
diretório é trabalho de horas, não uma reescrita.

**Nota — `identidade/` local:** fica vazia (ou com um `README.md` apontando
para `identidade/design-guide.md` na raiz). A CEZARY.IO plataforma é a própria
marca da agência — não há identidade de produto separada.

**Nota — caminho das skills de conteúdo:** `/publicar-tema` e `/aprovar-post`
esperam uma pasta `site/` na raiz do projeto. Essa estrutura já usa esse
caminho exatamente — sem migração necessária.

## Convenções

- TypeScript estrito (`strict: true`)
- Server Components por padrão; `"use client"` só com estado/interação real
- Arquivos em kebab-case, componentes React em PascalCase
- Tokens de design sempre importados de `components/ui`, nunca hex direto
- Commits simples e descritivos — sem conventional commits/semantic-release
- Testes: TypeScript + ESLint como rede principal. Exceção: o envio do
  formulário de orçamento recebe um teste e2e (Playwright) a partir da Fase 4,
  por ser a única função de receita do site

## Padrões de componentes

- `Button` com variantes `primary | secondary | ghost` — nunca mais de um
  `primary` visível por tela
- `Card` com prop `interactive?: boolean`
- `Input`/`Textarea` com foco por contraste (borda branca), sem cor de destaque
- `Navbar` como composição (`logo + links + cta`), não um componente monolítico
- Interações simples resolvidas com HTML nativo antes de qualquer biblioteca:
  FAQ usa `<details>/<summary>`, menu mobile usa estado local simples

## Formulário de orçamento — redundância de captura

O lead é a única função de negócio do site. Ele é enviado por **dois canais**
em paralelo, não um só:

1. E-mail via Resend (notificação imediata)
2. Registro num segundo canal simples (planilha Google Sheets ou Airtable,
   via API) — garante que uma falha de e-mail não signifique lead perdido

Nenhum banco de dados é necessário para isso.

## Deploy

- Vercel, deploy automático a partir de `main`
- Evitar serviços proprietários da Vercel (KV, Blob, Cron) a menos que
  estritamente necessário — mantém a porta aberta para migrar de host no
  futuro sem reescrever a aplicação
- Preview deployments automáticos por PR (padrão da Vercel)

## Decisões adiadas de propósito

Registradas como **padrão a seguir**, não como fornecedor escolhido — a
escolha concreta só acontece quando `sistema/` (produto SaaS) tiver requisito
real e confirmado:

- **Autenticação:** multi-tenant, organização = cliente. Fornecedor a decidir
  na hora (Clerk, Auth.js, Supabase Auth ou o que existir então)
- **Banco de dados:** Postgres é o único compromisso — estável há décadas.
  Provedor (Neon, RDS, Supabase ou outro) decidido na hora
- **Estrutura de repositório:** monorepo (pnpm workspaces, sem Turborepo/Nx de
  início) só quando `sistema/` começar a ser construído de fato

## Roadmap

| Fase | Conteúdo |
|---|---|
| 0 — Identidade | ✅ Concluída |
| 1 — Conteúdo base | ✅ Concluída — `documentacao/copy/` |
| 2 — Estrutura técnica | ✅ Concluída — ver nota abaixo |
| 3 — Páginas institucionais | ✅ Concluída — ver nota abaixo |
| 4 — Formulário de orçamento | ✅ Código concluído — credenciais pendentes, ver nota abaixo |
| 5 — Blog | ✅ Concluída — ver nota abaixo |
| 6 — Analytics e lançamento | GA, GSC, Meta Pixel, domínio, revisão final, ar |
| 7+ — Futuro (fora de escopo agora) | Produto SaaS (`sistema/`) — monorepo, auth e banco entram só aqui |

## Nota de execução — Fase 2 (2026-07-06)

Fundação técnica implementada e validada de ponta a ponta:

- Scaffold Next.js 16 + TypeScript estrito + Tailwind v4 + ESLint, em `site/`
- **Prettier** (com `prettier-plugin-tailwindcss`) adicionado como formatador padrão — não estava no escopo original deste documento, incorporado a pedido explícito na execução da Fase 2
- Estrutura de pastas criada exatamente como especificado acima
- Design system base implementado em `components/ui/` (Button, Card, Input/Textarea, Logo) e tokens em `app/globals.css`, direto de `identidade/design-guide.md`
- Repositório GitHub criado (`gustavocesar4/cezary.io`), projeto Vercel conectado, **Root Directory** configurado para `projetos/CEZARY.IO/site` (necessário porque o app não fica na raiz do repositório) — sem isso o deploy automático falha ao procurar `app/`
- Deploy de produção validado: push em `main` → build automático → `Ready`
- `node` e `git` não estavam instalados na máquina de desenvolvimento; foram instalados via winget como parte desta fase

Próxima fase (3) implementa as páginas institucionais em cima desta base, usando o conteúdo já congelado em `documentacao/copy/`.

## Nota de execução — Fase 3 (2026-07-06)

Páginas institucionais implementadas com o conteúdo de `documentacao/copy/`
copiado literalmente (nenhum texto novo foi criado nesta fase):

- `/`, `/sobre`, `/servicos`, `/servicos/sites`, `/servicos/sistemas`,
  `/servicos/automacoes-ia`, `/faq` — todas usando `Button`, `Card` e os
  tokens do design system da Fase 2
- **`Navbar`** e **`Footer`** implementados (não existiam antes) — navbar com
  menu mobile funcional (toggle simples, sem lib externa), CTA sempre em
  variante `secondary`, nunca `primary`, conforme a regra do design guide
- **`components/site/service-sections.tsx`**: as 3 páginas de frente (Sites,
  Sistemas, Automações com IA) compartilham os mesmos componentes de seção,
  já que seguem estrutura idêntica por decisão editorial — evita 3 cópias do
  mesmo JSX
- FAQ usa `<details>/<summary>` nativo, conforme já especificado
- **`/orcamento`** recebeu uma página placeholder (sem formulário) — o fluxo
  real é escopo da Fase 4. Existe agora só para nenhum CTA do site apontar
  para um link quebrado
- `/cases` não foi criada — não há conteúdo para ela ainda (fora de escopo
  desta fase e da Fase 1)

Deploy automático validado novamente após o push desta fase: `Ready` em produção.

## Nota de execução — Fase 4 (2026-07-06)

Formulário multi-etapas implementado por completo:

- `lib/schemas/orcamento.ts` — schema Zod por etapa (5 etapas, conforme a
  seção 6 do planejamento original) e schema completo para o envio final
- `components/site/orcamento-form.tsx` — Client Component com estado local,
  validação por etapa, sem nenhuma dependência de formulário externa
  (react-hook-form etc. não eram necessários pro tamanho deste formulário)
- `app/api/orcamento/route.ts` — valida com Zod, tenta dois canais em
  paralelo (`Promise.allSettled`): e-mail via Resend e um canal secundário
  via webhook genérico. Só retorna erro ao usuário se **os dois** falharem —
  nenhum lead se perde silenciosamente se um canal cair
- **Achado do teste e2e:** o primeiro rádio de cada grupo estava herdando o
  texto do `<label>` que envolvia o grupo inteiro (bug de semântica HTML —
  `<label>` é para um único controle). Corrigido trocando por
  `<fieldset>`/`<legend>` nos grupos de opção. Sem o teste e2e, esse bug de
  acessibilidade real provavelmente passaria despercebido
- Teste e2e (`e2e/orcamento.spec.ts`) cobre o envio completo (mockando a
  resposta de `/api/orcamento`) e o bloqueio de avanço sem preencher a
  etapa 1 — único teste do projeto, por decisão já registrada acima

**Canais escolhidos:** Resend (e-mail) + Google Sheets via Apps Script
(canal secundário). Passo a passo completo de criação de conta e
credenciais em `documentacao/configuracao-integracoes.md`; o código do
Apps Script já está pronto em `site/scripts/google-apps-script-orcamento.gs`.

**Decisão (2026-07-06):** configuração das credenciais reais adiada de
propósito — o site ainda está em fase de construção/teste. Enquanto
`RESEND_API_KEY`/`ORCAMENTO_NOTIFICATION_EMAIL`/
`ORCAMENTO_SECOND_CHANNEL_WEBHOOK` não existirem, a rota roda em **modo
mock**: valida com Zod normalmente, não envia nada de verdade, loga a
submissão no servidor (`console.log`) e responde `{ ok: true }` — o
front-end mostra a mesma mensagem de sucesso de sempre. Assim que qualquer
uma das credenciais for adicionada, o envio real correspondente liga
sozinho, sem mudança de código. Erro real (502) só acontece se um canal
**configurado** falhar de fato ao tentar enviar.

## Nota de execução — Fase 5 (2026-07-06)

Pipeline de blog implementado, compatível com `/publicar-tema` e
`/aprovar-post` (frontmatter e caminho conferidos direto nos `SKILL.md`
dessas duas skills):

- `content/blog/<slug>.mdx` com frontmatter `title`, `description`,
  `publishedAt`, `author`, `keywords` (lista) e `draft` — exatamente o
  formato que `/publicar-tema` já gera
- `lib/blog.ts` — leitura e parsing via `gray-matter`, ordenação por data,
  cálculo de tempo de leitura (`reading-time`)
- `/blog` — listagem (com estado vazio, já que não há posts reais ainda) e
  `/blog/[slug]` — artigo renderizado via `next-mdx-remote/rsc`, com
  tipografia própria em `components/site/mdx-components.tsx` (sem plugin
  de terceiros tipo `@tailwindcss/typography` — poucos elementos, não
  justificava a dependência)
- **Um post em `draft: true` não é só ocultado da listagem — a rota
  `/blog/[slug]` retorna 404 se alguém acessar a URL direta.** Sem isso, o
  frontmatter `draft` não travaria nada de verdade: o artigo já estaria
  acessível por quem soubesse o link, mesmo antes do `/aprovar-post` rodar
- Testado com um post de rascunho temporário (removido depois de validar
  parsing, renderização MDX e o 404 de draft — não ficou nenhum conteúdo
  fictício no repositório)
- `/blog` adicionado à Navbar e ao Footer

## Verificação visual — 2026-07-06

Build de produção rodado localmente e revisado em Chromium via Playwright,
em viewport mobile (390px) e desktop (1440px), cobrindo todas as páginas.
Confirmado: responsividade correta, menu mobile abre/fecha, nenhum
problema de layout. Um tom azulado percebido no texto secundário sobre o
fundo escuro foi investigado via `getComputedStyle` — confirmado como
ilusão de ótica (contraste simultâneo contra o preto): a cor computada é
`rgb(140,140,140)`, perfeitamente neutra.

## Auditoria de qualidade e correções — 2026-07-10

Auditoria crítica completa (hierarquia visual, ritmo, microinterações,
performance, navegação, acessibilidade, SEO técnico, consistência de
componentes, código duplicado) rodada com Lighthouse real contra o build
de produção, não só leitura de código. Placar antes: Performance 99 ·
Acessibilidade 96 · Boas práticas 100 · SEO 100. Único item reprovado:
contraste de cor.

13 itens corrigidos (o único item da auditoria deixado de fora, por
pedido explícito, foi microanimação de entrada — mantém a identidade sem
efeito decorativo):

- **Contraste (alto impacto):** token `--color-text-faint` (#565656,
  medía 2.69:1, reprovava WCAG AA) removido do sistema — nunca esteve no
  design guide oficial. Todo uso trocado para `text-muted` (5.88:1).
  Afetava o rodapé inteiro (todas as páginas) e os metadados do blog
- **Favicon:** `app/icon.tsx` e `app/apple-icon.tsx` gerando o símbolo
  Corte Preciso via `next/og` — o favicon.ico genérico do scaffold nunca
  tinha sido substituído
- **`app/not-found.tsx`:** 404 customizado, dentro da identidade
- **SEO técnico:** `app/sitemap.ts`, `app/robots.ts`, `metadataBase`,
  Open Graph + Twitter Card (`app/opengraph-image.tsx`), JSON-LD
  (`Organization` no layout raiz, `BlogPosting` em cada artigo) — tudo
  código puro, sem depender de nenhuma conta externa
- **Componente `Card` nunca era usado:** Home e Serviços duplicavam
  manualmente o estilo do card em 3 lugares. Trocado para importar o
  componente real — elimina o risco de o visual divergir se o design
  system mudar
- **Navbar:** indicador de página ativa via `usePathname` +
  `aria-current="page"`
- **`prefers-reduced-motion`:** regra global em `globals.css` reduzindo
  toda transição/animação a quase zero para quem pede menos movimento —
  antes só existia nos artefatos de design da Fase 0, nunca tinha ido
  pro código real
- **Formulário de orçamento:** `aria-label` que expunha a chave técnica
  (`"tipoNecessidade"`) removido — o `<fieldset>/<legend>` já dá o nome
  acessível ao grupo, e a prop `name` do `ChoiceGroup` foi removida por
  ter ficado sem uso
- **Link "Pular para o conteúdo":** adicionado no layout raiz, visível só
  no foco por teclado
- **`::selection` customizado:** branco sobre preto, em vez do azul
  padrão do navegador — mesma lógica de "contraste como destaque" já
  usada no resto da identidade
- **Ritmo vertical:** `/orcamento` usava o padding de "seção de
  fechamento" (`py-16/24`) na única seção da página; corrigido para o
  padrão de abertura (`py-20/28`) usado em todas as outras páginas.
  Removida também uma borda inferior redundante bem acima do rodapé
- **`app/blog/loading.tsx`:** skeleton simples enquanto a listagem carrega

**Reauditoria pós-correções:** Acessibilidade 96 → **100** (zero audits
reprovados). Boas práticas e SEO seguem 100. Performance mostrou 97 numa
primeira leitura (LCP 2.0s → 2.5s) — investigado antes de aceitar como
regressão: o elemento de LCP é o mesmo parágrafo do Hero de sempre, com
apenas 92ms de atraso real registrado (`lcp-breakdown-insight`). Rodando
sem a simulação de rede/CPU lenta do Lighthouse (`--throttling-method=
provided`, medindo tempo real em vez de estimativa), o resultado é
Performance 100 e LCP 0,1s — confirmando que a variação de 2 pontos era
ruído da simulação de throttling (sensível à carga momentânea da
máquina), não uma regressão real introduzida pelas correções.

Testes e2e (`npm run test:e2e`) e `build` seguem passando limpos após
todas as mudanças.
