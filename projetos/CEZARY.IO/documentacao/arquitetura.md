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
| 1 — Conteúdo base | Textos institucionais (Home, Sobre, Serviços, FAQ) |
| 2 — Estrutura técnica | Scaffold Next.js, Tailwind, deploy inicial |
| 3 — Páginas institucionais | Implementação visual de Home, Serviços, Sobre, FAQ |
| 4 — Formulário de orçamento | Fluxo multi-etapas + Resend + segundo canal + teste e2e |
| 5 — Blog | Listagem, artigo, integração com `/publicar-tema` e `/aprovar-post` |
| 6 — Analytics e lançamento | GA, GSC, Meta Pixel, domínio, revisão final, ar |
| 7+ — Futuro (fora de escopo agora) | Produto SaaS (`sistema/`) — monorepo, auth e banco entram só aqui |
