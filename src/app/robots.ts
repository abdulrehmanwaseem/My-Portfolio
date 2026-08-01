import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep only genuinely non-public paths blocked. The markdown layer
        // (llms.txt, *.md, *.mdx) and /og/ are deliberately crawlable: they
        // exist to be read by AI engines and to render social preview cards.
        // HTML/markdown duplication is handled by canonical tags, not robots.
        disallow: ["/_next/", "/api/", "/vcard/"],
      },
      {
        // Opt in explicitly to Gemini / AI Overview grounding. This is a
        // separate control from Googlebot, so relying on the `*` default
        // would leave it exposed to a future change in that default.
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
