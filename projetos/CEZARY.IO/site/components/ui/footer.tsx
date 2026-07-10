import Link from "next/link";

const links = [
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="text-text-muted mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CEZARY.IO</p>
        <nav className="flex gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors duration-150 ease-out"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
