# Configuração das integrações — Formulário de orçamento

> Passo a passo para ativar os dois canais de recebimento de lead. O código
> já está pronto (`app/api/orcamento/route.ts`) — falta só criar as contas e
> colar as credenciais. Nenhuma delas é commitada no repositório.

---

## 1. Resend (e-mail)

1. Crie conta em [resend.com](https://resend.com) (tem plano gratuito).
2. No painel, vá em **API Keys** → **Create API Key** → copie o valor
   (começa com `re_...`). Você só vê essa chave uma vez.
3. (Opcional, mas recomendado) Em **Domains**, adicione e verifique o
   domínio `cezary.io` para poder enviar como `orcamento@cezary.io` em vez
   do domínio de teste do Resend. Pode ficar pra depois do domínio estar
   registrado — sem isso, o envio funciona normalmente usando
   `onboarding@resend.dev` como remetente.
4. Defina as variáveis:
   - `RESEND_API_KEY` → a chave copiada no passo 2
   - `ORCAMENTO_NOTIFICATION_EMAIL` → o e-mail que deve receber cada pedido
     (ex: seu e-mail pessoal, por enquanto)
   - `RESEND_FROM_EMAIL` → só preencher depois de verificar o domínio no
     passo 3; se deixar em branco, usa `onboarding@resend.dev`

## 2. Google Sheets + Apps Script (canal secundário)

1. Crie uma planilha nova no Google Sheets. Na primeira linha, adicione os
   cabeçalhos (uma coluna cada): `recebidoEm`, `tipoNecessidade`,
   `nomeEmpresa`, `segmento`, `oQueJaExiste`, `detalheEscopo`,
   `faixaInvestimento`, `urgencia`, `nome`, `email`, `whatsapp`,
   `melhorHorario`.
2. Menu **Extensões** → **Apps Script**.
3. Apague o conteúdo padrão do editor e cole o código de
   `site/scripts/google-apps-script-orcamento.gs`.
4. Clique em **Implantar** → **Nova implantação**.
   - Tipo: **App da Web**
   - Executar como: **Eu** (sua conta)
   - Quem pode acessar: **Qualquer pessoa**
5. Autorize as permissões pedidas (é o seu próprio script acessando a sua
   própria planilha).
6. Copie a **URL do app da Web** gerada — é isso que vira a variável:
   - `ORCAMENTO_SECOND_CHANNEL_WEBHOOK` → a URL copiada

## 3. Onde colocar as variáveis

**Localmente** (para testar antes de configurar na Vercel):

```
cp site/.env.example site/.env.local
```

Preencha os quatro valores em `site/.env.local`.

**Em produção (Vercel):** Project → Settings → Environment Variables →
adicionar as mesmas quatro chaves, ambiente **Production**. Depois de salvar,
é preciso um novo deploy para elas entrarem em vigor (`vercel --prod` ou um
novo push em `main`).

## 4. Como confirmar que funcionou

Depois de configurar e reimplantar: preencha o formulário em `/orcamento` de
ponta a ponta. Deve aparecer "Recebemos seu pedido", chegar um e-mail em
`ORCAMENTO_NOTIFICATION_EMAIL`, e uma nova linha na planilha. Se só um dos
dois canais estiver configurado, o formulário ainda funciona (a rota só
falha se os dois derem erro) — mas o ideal é ter os dois ativos.
