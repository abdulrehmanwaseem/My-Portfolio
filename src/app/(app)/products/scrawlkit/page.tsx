import type { Metadata } from "next";

import {
  ScrawlkitCTA,
  ScrawlkitDemo,
  ScrawlkitFeatures,
  ScrawlkitHero,
  ScrawlkitTechStack,
} from "@/features/products/scrawlkit/components";

const title =
  "Scrawlkit - Hand-Drawn Video Templates for TikTok, Reels and Shorts";
const description =
  "Scrawlkit turns a few typed words into an ink-on-paper MP4. Eight hand-drawn templates, live preview, cloud rendering on AWS Lambda with Remotion. Free to try.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      { url: "/images/blogs/scrawlkit-banner.png", width: 1200, height: 630 },
    ],
  },
};

export default function ScrawlkitPage() {
  return (
    <div className="min-h-screen">
      <ScrawlkitHero />
      <ScrawlkitDemo />
      <ScrawlkitFeatures />
      <ScrawlkitTechStack />
      <ScrawlkitCTA />
    </div>
  );
}
