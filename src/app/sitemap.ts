import type { MetadataRoute } from "next";
import { getWorks } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const STATIC_ROUTES = [
  "",
  "/cervantes",
  "/linea-de-tiempo",
  "/obras",
  "/quijote",
  "/curiosidades",
  "/mundo-de-cervantes",
  "/legado",
  "/biblioteca",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const workEntries = getWorks().map((work) => ({
    url: `${siteUrl}/obras/${work.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...workEntries];
}
