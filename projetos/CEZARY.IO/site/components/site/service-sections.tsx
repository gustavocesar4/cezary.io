import { Button } from "@/components/ui/button";

/**
 * Peças compartilhadas pelas 3 páginas de frente (Sites, Sistemas,
 * Automações com IA) — todas seguem o mesmo template editorial definido em
 * documentacao/copy/. Ver Sobre/Seção 3 sobre por que esse molde é
 * repetido de propósito.
 */

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export function ServiceHero({
  eyebrow,
  headline,
  subheadline,
}: ServiceHeroProps) {
  return (
    <section className="border-border border-b">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {headline}
        </h1>
        <p className="text-text-muted mt-6 max-w-xl text-lg">{subheadline}</p>
      </div>
    </section>
  );
}

interface ServicePoint {
  titulo: string;
  texto: string;
}

export function ServicePoints({
  titulo,
  pontos,
}: {
  titulo?: string;
  pontos: ServicePoint[];
}) {
  return (
    <section className="border-border border-b">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {titulo && (
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {titulo}
          </h2>
        )}
        <div className={`grid gap-6 sm:grid-cols-3 ${titulo ? "mt-8" : ""}`}>
          {pontos.map((ponto) => (
            <div key={ponto.titulo}>
              <h3 className="text-text font-semibold">{ponto.titulo}</h3>
              <p className="text-text-muted mt-2 text-sm">{ponto.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceTechNote({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <section className="border-border border-b">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {titulo}
        </h2>
        <p className="text-text-muted mt-6 max-w-2xl">{texto}</p>
      </div>
    </section>
  );
}

export function ServiceClosing({ texto }: { texto: string }) {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
        <p className="text-text-muted mx-auto max-w-md">{texto}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/orcamento">Pedir orçamento</Button>
        </div>
      </div>
    </section>
  );
}
