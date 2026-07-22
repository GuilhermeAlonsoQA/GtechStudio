import type { MetadataRoute } from "next";

import { templates } from "@/lib/content/templates";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const templateEntries: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${siteConfig.url}/modelos/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...templateEntries,
  ];
}
