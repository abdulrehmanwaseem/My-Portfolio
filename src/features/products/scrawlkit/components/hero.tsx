import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

const SITE = addQueryParams("https://scrawlkit.com", UTM_PARAMS);

export function ScrawlkitHero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Live at scrawlkit.com
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Scrawlkit
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {" "}
            Hand-Drawn
          </span>
          <br />
          Video Templates
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Pick a template, type a few words, download an MP4 that looks inked on
          paper. Every stroke wobbles like a real pen, so no two renders come
          out the same. Made for TikTok, Reels and Shorts.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={SITE} target="_blank" rel="noopener noreferrer">
              Try it free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#demo">See the templates</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-muted-foreground">Templates</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1080p</div>
            <div className="text-sm text-muted-foreground">MP4 output</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Lambda</div>
            <div className="text-sm text-muted-foreground">Cloud rendering</div>
          </div>
          <div>
            <div className="text-3xl font-bold">3 free</div>
            <div className="text-sm text-muted-foreground">Renders a month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
