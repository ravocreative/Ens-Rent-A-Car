import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { vehicles } from "@/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/araclar", changeFrequency: "weekly", priority: 0.9 },
    { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.6 },
    { path: "/hizmetlerimiz", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/gunluk-arac-kiralama",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/uzun-donem-arac-kiralama",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/kiralama-kosullari",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      path: "/sikca-sorulan-sorular",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/iletisim", changeFrequency: "monthly", priority: 0.7 },
    { path: "/kvkk", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${siteConfig.domain}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const vehicleUrls: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${siteConfig.domain}/araclar/${vehicle.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticUrls, ...vehicleUrls];
}
