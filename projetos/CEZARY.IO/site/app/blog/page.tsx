import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo sobre sites, sistemas e automações com IA para empresas que querem crescer com tecnologia.",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Blog
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Conteúdo sobre tecnologia aplicada ao negócio
        </h1>

        {posts.length === 0 ? (
          <p className="text-text-muted mt-10">
            Ainda não publicamos nenhum artigo por aqui. Volte em breve.
          </p>
        ) : (
          <ul className="divide-border border-border mt-12 divide-y border-t">
            {posts.map((post) => (
              <li key={post.slug} className="py-6">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-text-muted font-mono text-xs">
                    {formatDate(post.publishedAt)} · {post.readingMinutes} min
                    de leitura
                  </p>
                  <h2 className="text-text group-hover:text-text-muted mt-2 text-xl font-semibold transition-colors duration-150 ease-out">
                    {post.title}
                  </h2>
                  <p className="text-text-muted mt-2 max-w-2xl text-sm">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
