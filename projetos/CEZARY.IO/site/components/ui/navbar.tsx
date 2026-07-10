"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-border border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-text flex items-center gap-2 text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-5 w-5" />
          CEZARY.IO
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "transition-colors duration-150 ease-out",
                  active
                    ? "text-text font-medium"
                    : "text-text-muted hover:text-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          <Button variant="secondary" href="/orcamento">
            Falar com a gente
          </Button>
        </div>

        <button
          type="button"
          className="text-text sm:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-4 w-6">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-150 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`mt-1.5 block h-0.5 w-6 bg-current transition-opacity duration-150 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`mt-1.5 block h-0.5 w-6 bg-current transition-transform duration-150 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-border flex flex-col gap-1 border-t px-6 py-4 sm:hidden">
          {links.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "py-2 text-sm transition-colors duration-150 ease-out",
                  active
                    ? "text-text font-medium"
                    : "text-text-muted hover:text-text",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/orcamento"
            className="text-text py-2 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Falar com a gente
          </Link>
        </nav>
      )}
    </header>
  );
}
