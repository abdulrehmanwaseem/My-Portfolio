import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ShopFlowCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border bg-linear-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Streamline Your Shop Operations?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              ShopFlow is a self-employed project built to demonstrate
              full-stack capabilities with the PERN stack. Contact me to discuss
              custom shop management solutions for your business.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link
                  href="https://shopflow-pos.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Live Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/#experience">
                  View Experience
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 text-sm md:grid-cols-3">
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">5+</div>
                <div className="font-medium">Months Development</div>
                <div className="text-muted-foreground">Nov 2023 - Apr 2024</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">12+</div>
                <div className="font-medium">Technologies Used</div>
                <div className="text-muted-foreground">Modern PERN Stack</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">100%</div>
                <div className="font-medium">Custom Built</div>
                <div className="text-muted-foreground">Tailored Solution</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
