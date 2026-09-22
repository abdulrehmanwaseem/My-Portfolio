import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

const SITE = addQueryParams("https://scrawlkit.com", UTM_PARAMS);

export function ScrawlkitCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border bg-linear-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Make one in about a minute
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Three renders a month are free, no card needed. Scrawlkit is my
              own product, built and run solo, from the ink engine to the
              billing.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={SITE} target="_blank" rel="noopener noreferrer">
                  Open scrawlkit.com
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/blog/scrawlkit-hand-drawn-video-templates">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read how it was built
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
