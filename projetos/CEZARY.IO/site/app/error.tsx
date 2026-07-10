"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Erro inesperado
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Algo deu errado
        </h1>
        <p className="text-text-muted mt-4">
          Já registramos o problema. Tente novamente ou volte para a home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>Tentar novamente</Button>
          <Button variant="secondary" href="/">
            Voltar para a home
          </Button>
        </div>
      </div>
    </section>
  );
}
