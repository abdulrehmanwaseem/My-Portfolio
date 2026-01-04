import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/og/",
          "/rss/",
          "/vcard/",
          "/llms.txt",
          "/llms-full.txt",
          "/blog.mdx/",
          "/*.mdx",
          "/*.md",
        ],
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
