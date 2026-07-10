import { z } from "zod";

export const tipoNecessidadeOptions = [
  { value: "site", label: "Site" },
  { value: "sistema", label: "Sistema" },
  { value: "automacao-ia", label: "Automação com IA" },
  { value: "nao-sei", label: "Ainda não sei" },
] as const;

export const oQueJaExisteOptions = [
  { value: "nada", label: "Nada ainda" },
  { value: "site-desatualizado", label: "Site desatualizado" },
  {
    value: "sistema-manual",
    label: "Processo manual (planilha, WhatsApp etc.)",
  },
  {
    value: "sistemas-desconectados",
    label: "Sistemas que não conversam entre si",
  },
  { value: "outro", label: "Outro" },
] as const;

export const faixaInvestimentoOptions = [
  { value: "ate-5k", label: "Até R$ 5 mil" },
  { value: "5k-15k", label: "R$ 5 mil a R$ 15 mil" },
  { value: "15k-40k", label: "R$ 15 mil a R$ 40 mil" },
  { value: "acima-40k", label: "Acima de R$ 40 mil" },
  { value: "nao-sei", label: "Ainda não sei" },
] as const;

export const urgenciaOptions = [
  { value: "urgente", label: "Urgente — até 1 mês" },
  { value: "1-3-meses", label: "1 a 3 meses" },
  { value: "sem-prazo", label: "Sem prazo definido" },
] as const;

const step1Schema = z.object({
  tipoNecessidade: z.enum(
    tipoNecessidadeOptions.map((o) => o.value) as [string, ...string[]],
    { message: "Selecione uma opção" },
  ),
});

const step2Schema = z.object({
  nomeEmpresa: z.string().trim().min(1, "Informe o nome da empresa"),
  segmento: z.string().trim().min(1, "Informe o segmento do negócio"),
});

const step3Schema = z.object({
  oQueJaExiste: z.enum(
    oQueJaExisteOptions.map((o) => o.value) as [string, ...string[]],
    { message: "Selecione uma opção" },
  ),
  detalheEscopo: z.string().trim().max(500).optional(),
});

const step4Schema = z.object({
  faixaInvestimento: z
    .enum(faixaInvestimentoOptions.map((o) => o.value) as [string, ...string[]])
    .optional(),
  urgencia: z.enum(
    urgenciaOptions.map((o) => o.value) as [string, ...string[]],
    {
      message: "Selecione uma opção",
    },
  ),
});

const step5Schema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome"),
  email: z.email("E-mail inválido"),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido"),
  melhorHorario: z.string().trim().max(120).optional(),
  // Honeypot anti-spam: campo escondido do usuário real via CSS. Bots que
  // preenchem todo input do HTML tendem a preencher este também. Sem
  // restrição de tamanho aqui de propósito — a checagem fica na API route,
  // pra não devolver um erro de validação que ensine o bot a evitar o campo.
  empresaSite: z.string().optional(),
});

export const orcamentoStepSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
] as const;

export const orcamentoSchema = step1Schema
  .extend(step2Schema.shape)
  .extend(step3Schema.shape)
  .extend(step4Schema.shape)
  .extend(step5Schema.shape);

export type OrcamentoInput = z.infer<typeof orcamentoSchema>;
