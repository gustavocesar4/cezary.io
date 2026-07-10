import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

import { mdxComponents } from "@/components/site/mdx-components";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostSource, type PostFrontmatter } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) return {};

  const { data } = matter(source);
  const frontmatter = data as PostFrontmatter;
  if (frontmatter.draft) return {};

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) notFound();

  const { data, content: mdxSource } = matter(source);
  const frontmatter = data as PostFrontmatter;

  // Um post em draft não deve ficar acessível por URL direta — o mesmo
  // "draft" que o esconde da listagem também bloqueia o acesso ao artigo.
  if (frontmatter.draft) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    author: { "@type": "Organization", name: frontmatter.author },
    publisher: { "@type": "Organization", name: "CEZARY.IO" },
    url: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <p className="text-text-muted mb-4 font-mono text-xs tracking-wide uppercase">
          Blog
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {frontmatter.title}
        </h1>
        <p className="text-text-muted mt-4 font-mono text-xs">
          {formatDate(frontmatter.publishedAt)} · {frontmatter.author}
        </p>

        <div className="mt-10">
          <MDXRemote source={mdxSource} components={mdxComponents} />
        </div>

        <div className="border-border mt-12 border-t pt-8">
          <Button href="/orcamento">Pedir orçamento</Button>
        </div>
      </div>
    </article>
  );
}
