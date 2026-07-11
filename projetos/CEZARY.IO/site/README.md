# CEZARY.IO — site institucional

Next.js (App Router) + TypeScript + Tailwind v4. Ver
`projetos/CEZARY.IO/documentacao/arquitetura.md` para as decisões técnicas
completas e o histórico de cada fase.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencher conforme documentacao/configuracao-integracoes.md
npm run dev
```

## Scripts

| Comando                | O que faz                                             |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento                           |
| `npm run build`        | Build de produção                                     |
| `npm run start`        | Roda o build de produção localmente                   |
| `npm run lint`         | ESLint                                                |
| `npm run format`       | Prettier (escreve)                                    |
| `npm run format:check` | Prettier (só verifica)                                |
| `npm run test:e2e`     | Playwright — cobre o fluxo do formulário de orçamento |

## Estrutura

- `app/` — rotas (App Router)
- `components/ui/` — design system (Button, Card, Input, Logo, Navbar, Footer)
- `components/site/` — composições específicas do site (formulário de orçamento, seções de serviço, MDX)
- `content/blog/` — artigos em MDX, consumidos por `/publicar-tema` e `/aprovar-post`
- `lib/` — schemas Zod, leitura do blog, utilitários

## Conteúdo do blog

Frontmatter esperado em `content/blog/<slug>.mdx`:

```yaml
---
title: "Título do artigo"
description: "Meta description, 150-160 caracteres"
publishedAt: YYYY-MM-DD
author: "CEZARY.IO"
keywords:
  - palavra-chave
draft: true
---
```

Um post com `draft: true` fica fora da listagem **e** retorna 404 em acesso
direto — só fica público quando `/aprovar-post` (ou edição manual) muda
para `draft: false`.

## Identidade visual

Nenhuma decisão de cor, tipografia ou componente deve ser feita direto
neste código — a fonte da verdade é
`identidade/design-guide.md` (raiz do workspace). Os tokens em
`app/globals.css` são a tradução técnica daquele documento.
