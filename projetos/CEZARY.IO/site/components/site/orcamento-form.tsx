"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import {
  faixaInvestimentoOptions,
  oQueJaExisteOptions,
  orcamentoSchema,
  orcamentoStepSchemas,
  tipoNecessidadeOptions,
  urgenciaOptions,
} from "@/lib/schemas/orcamento";
import { cn } from "@/lib/utils";

type FormData = Record<string, string>;

const TOTAL_STEPS = orcamentoStepSchemas.length;

function ChoiceGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className="grid gap-2 sm:grid-cols-2"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-sm border px-4 py-3 text-left text-sm transition-colors duration-150 ease-out",
            value === option.value
              ? "border-contrast text-text"
              : "border-border text-text-muted hover:border-border-hover",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-text-muted mb-2 block text-sm font-medium">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-text-muted mt-1 block text-xs">{error}</span>
      )}
    </label>
  );
}

/** Para grupos de opções (radiogroup) — `<label>` só é correto para um único controle. */
function FieldGroup({
  legend,
  error,
  children,
}: {
  legend: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="block border-0 p-0">
      <legend className="text-text-muted mb-2 block text-sm font-medium">
        {legend}
      </legend>
      {children}
      {error && (
        <span className="text-text-muted mt-1 block text-xs">{error}</span>
      )}
    </fieldset>
  );
}

export function OrcamentoForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validateStep(): boolean {
    const schema = orcamentoStepSchemas[step];
    const result = schema.safeParse(data);
    if (result.success) {
      setErrors({});
      return true;
    }
    const nextErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      nextErrors[key] = issue.message;
    }
    setErrors(nextErrors);
    return false;
  }

  function next() {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    if (!validateStep()) return;

    const parsed = orcamentoSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center">
        <h2 className="text-text text-2xl font-semibold">
          Recebemos seu pedido
        </h2>
        <p className="text-text-muted mt-3">
          Vamos analisar o que você contou e entrar em contato pelo e-mail ou
          WhatsApp informado.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-text-muted mb-6 font-mono text-xs tracking-wide uppercase">
        Etapa {step + 1} de {TOTAL_STEPS}
      </p>

      {step === 0 && (
        <FieldGroup legend="O que você precisa?" error={errors.tipoNecessidade}>
          <ChoiceGroup
            name="tipoNecessidade"
            options={tipoNecessidadeOptions}
            value={data.tipoNecessidade}
            onChange={(v) => set("tipoNecessidade", v)}
          />
        </FieldGroup>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <Field label="Nome da empresa" error={errors.nomeEmpresa}>
            <Input
              value={data.nomeEmpresa ?? ""}
              onChange={(e) => set("nomeEmpresa", e.target.value)}
              placeholder="Sua empresa"
            />
          </Field>
          <Field label="Segmento do negócio" error={errors.segmento}>
            <Input
              value={data.segmento ?? ""}
              onChange={(e) => set("segmento", e.target.value)}
              placeholder="Ex.: clínica, comércio local, prestação de serviço"
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <FieldGroup
            legend="O que já existe hoje?"
            error={errors.oQueJaExiste}
          >
            <ChoiceGroup
              name="oQueJaExiste"
              options={oQueJaExisteOptions}
              value={data.oQueJaExiste}
              onChange={(v) => set("oQueJaExiste", v)}
            />
          </FieldGroup>
          <Field label="Quer detalhar? (opcional)">
            <Textarea
              value={data.detalheEscopo ?? ""}
              onChange={(e) => set("detalheEscopo", e.target.value)}
              placeholder="Conte um pouco mais, se fizer sentido"
            />
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <FieldGroup legend="Faixa de investimento disponível (opcional)">
            <ChoiceGroup
              name="faixaInvestimento"
              options={faixaInvestimentoOptions}
              value={data.faixaInvestimento}
              onChange={(v) => set("faixaInvestimento", v)}
            />
          </FieldGroup>
          <FieldGroup legend="Urgência" error={errors.urgencia}>
            <ChoiceGroup
              name="urgencia"
              options={urgenciaOptions}
              value={data.urgencia}
              onChange={(v) => set("urgencia", v)}
            />
          </FieldGroup>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <Field label="Nome" error={errors.nome}>
            <Input
              value={data.nome ?? ""}
              onChange={(e) => set("nome", e.target.value)}
              placeholder="Seu nome"
            />
          </Field>
          <Field label="E-mail" error={errors.email}>
            <Input
              type="email"
              value={data.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
              placeholder="voce@empresa.com"
            />
          </Field>
          <Field label="WhatsApp" error={errors.whatsapp}>
            <Input
              value={data.whatsapp ?? ""}
              onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </Field>
          <Field label="Melhor horário para contato (opcional)">
            <Input
              value={data.melhorHorario ?? ""}
              onChange={(e) => set("melhorHorario", e.target.value)}
              placeholder="Ex.: tardes, após as 18h"
            />
          </Field>
        </div>
      )}

      {status === "error" && (
        <p className="text-text-muted mt-4 text-sm">
          Não conseguimos enviar agora. Tente novamente em instantes.
        </p>
      )}

      <div className="mt-8 flex justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          disabled={step === 0}
          className={step === 0 ? "invisible" : ""}
        >
          Voltar
        </Button>

        {step < TOTAL_STEPS - 1 ? (
          <Button type="button" onClick={next}>
            Próximo
          </Button>
        ) : (
          <Button
            type="button"
            onClick={submit}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Enviando..." : "Enviar"}
          </Button>
        )}
      </div>
    </div>
  );
}
