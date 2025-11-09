import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ShopFlowHero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Built with Modern Tech Stack
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          ShopFlow
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {" "}
            Complete Shop
          </span>
          <br />
          Management System
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A comprehensive PERN stack solution for managing your shop operations.
          Real-time dashboards, inventory tracking, invoice management, and
          financial analytics — all in one place.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#demo">
              Watch Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm text-muted-foreground">Type Safe</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Real-time</div>
            <div className="text-sm text-muted-foreground">Dashboards</div>
          </div>
          <div>
            <div className="text-3xl font-bold">JWT</div>
            <div className="text-sm text-muted-foreground">Auth System</div>
          </div>
          <div>
            <div className="text-3xl font-bold">PERN</div>
            <div className="text-sm text-muted-foreground">Stack Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
