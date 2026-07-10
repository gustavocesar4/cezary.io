import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  faixaInvestimentoOptions,
  oQueJaExisteOptions,
  orcamentoSchema,
  tipoNecessidadeOptions,
  urgenciaOptions,
} from "@/lib/schemas/orcamento";

function label(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string | undefined,
) {
  return options.find((o) => o.value === value)?.label ?? value ?? "—";
}

async function sendEmail(data: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORCAMENTO_NOTIFICATION_EMAIL;
  if (!apiKey || !to) return { skipped: true as const };

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
    to,
    subject: `Novo pedido de orçamento — ${data.nomeEmpresa}`,
    text: [
      `Tipo de necessidade: ${label(tipoNecessidadeOptions, data.tipoNecessidade)}`,
      `Empresa: ${data.nomeEmpresa}`,
      `Segmento: ${data.segmento}`,
      `O que já existe: ${label(oQueJaExisteOptions, data.oQueJaExiste)}`,
      data.detalheEscopo ? `Detalhe: ${data.detalheEscopo}` : null,
      `Faixa de investimento: ${label(faixaInvestimentoOptions, data.faixaInvestimento)}`,
      `Urgência: ${label(urgenciaOptions, data.urgencia)}`,
      "",
      `Nome: ${data.nome}`,
      `E-mail: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      data.melhorHorario ? `Melhor horário: ${data.melhorHorario}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (result.error) throw new Error(result.error.message);
  return { skipped: false as const };
}

async function sendToSecondChannel(data: Record<string, string>) {
  const webhookUrl = process.env.ORCAMENTO_SECOND_CHANNEL_WEBHOOK;
  if (!webhookUrl) return { skipped: true as const };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, recebidoEm: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error("Segundo canal recusou o registro");
  return { skipped: false as const };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = orcamentoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // Honeypot: campo invisível para pessoas, atraente para bots. Se veio
  // preenchido, finge sucesso sem processar nada — não vale alertar o bot.
  if (parsed.data.empresaSite) {
    return NextResponse.json({ ok: true });
  }

  const [emailResult, secondChannelResult] = await Promise.allSettled([
    sendEmail(parsed.data),
    sendToSecondChannel(parsed.data),
  ]);

  const emailOk = emailResult.status === "fulfilled";
  const secondChannelOk = secondChannelResult.status === "fulfilled";
  const emailSkipped = emailOk && emailResult.value.skipped;
  const secondChannelSkipped =
    secondChannelOk && secondChannelResult.value.skipped;

  if (!emailOk) {
    console.error("[orcamento] Falha no envio de e-mail:", emailResult.reason);
  }
  if (!secondChannelOk) {
    console.error(
      "[orcamento] Falha no canal secundário:",
      secondChannelResult.reason,
    );
  }

  // Enquanto o site estiver em construção, nenhum canal precisa estar
  // configurado: o envio funciona em modo mock (log local, sem envio real)
  // até as credenciais reais serem adicionadas — ver
  // documentacao/configuracao-integracoes.md.
  if (emailSkipped && secondChannelSkipped) {
    console.log(
      "[orcamento] Modo mock (nenhum canal configurado):",
      parsed.data,
    );
  }

  // Erro real só quando os dois canais estavam configurados e os dois
  // falharam de fato — nenhum lead deve se perder silenciosamente.
  if (!emailOk && !secondChannelOk) {
    return NextResponse.json(
      { error: "Não foi possível registrar o pedido no momento" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
