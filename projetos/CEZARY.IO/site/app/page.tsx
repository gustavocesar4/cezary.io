import { Logo } from "@/components/ui/logo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <Logo className="text-contrast h-10 w-10" />
      <p className="text-text-muted font-mono text-xs tracking-wide uppercase">
        Fundação técnica pronta — páginas na próxima etapa
      </p>
    </main>
  );
}
