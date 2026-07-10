import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/sobre",
  "/servicos",
  "/servicos/sites",
  "/servicos/sistemas",
  "/servicos/automacoes-ia",
  "/faq",
  "/orcamento",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticEntries, ...postEntries];
}
