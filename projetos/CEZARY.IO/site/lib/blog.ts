import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

/**
 * Compatível com o pipeline das skills /publicar-tema e /aprovar-post
 * (frontmatter e caminho documentados em documentacao/arquitetura.md).
 */
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  keywords: string[];
  draft: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

function listMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts({
  includeDrafts = false,
}: { includeDrafts?: boolean } = {}): PostMeta[] {
  const posts = listMdxFiles().map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as PostFrontmatter;
    return {
      slug,
      ...frontmatter,
      readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    };
  });

  return posts
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostSource(slug: string): string | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}
