import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { posts } from "@/content/posts";
import { landingPages } from "@/content/landing-pages";
import { cityPages } from "@/content/city-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticRoutes = ["", "/about", "/contact", "/work", "/blog", "/resume", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // SEO landing pages — high priority, these target specific keywords
  const landingRoutes = landingPages.map((lp) => ({
    url: `${base}/solutions/${lp.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // City landing pages — high priority for local SEO
  const cityRoutes = cityPages.map((cp) => ({
    url: `${base}/locations/${cp.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...landingRoutes, ...cityRoutes, ...caseRoutes, ...postRoutes];
}
