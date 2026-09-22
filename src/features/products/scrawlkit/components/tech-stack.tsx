import {
  Clapperboard,
  CreditCard,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type Tech = {
  name: string;
  description: string;
  logo?: string;
  icon?: LucideIcon;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack: Tech[] = [
  {
    name: "Next.js 16",
    logo: `${DEVICON}/nextjs/nextjs-original.svg`,
    description: "App Router, server actions and route handlers, one app",
  },
  {
    name: "Remotion",
    icon: Clapperboard,
    description: "Videos as React components, previewed and rendered alike",
  },
  {
    name: "AWS Lambda",
    logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    description: "Parallel chunked rendering through Remotion Lambda",
  },
  {
    name: "TypeScript",
    logo: `${DEVICON}/typescript/typescript-original.svg`,
    description: "End to end, with zod schemas shared by form and renderer",
  },
  {
    name: "Tailwind CSS v4",
    logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
    description: "Theme tokens for the paper and ink palette",
  },
  {
    name: "PostgreSQL",
    logo: `${DEVICON}/postgresql/postgresql-original.svg`,
    description: "Neon serverless Postgres with Drizzle ORM",
  },
  {
    name: "Better Auth",
    icon: KeyRound,
    description: "Email, Google sign-in, verification and password reset",
  },
  {
    name: "Stripe",
    icon: CreditCard,
    description: "Checkout, webhooks and the customer portal",
  },
];

const details = [
  ["Deterministic strokes", "Seeded paths, repeatable renders"],
  ["Frame-driven boil", "No CSS animation inside the renderer"],
  ["Render queue", "Waits for a slot instead of failing"],
  ["Idempotent billing", "Webhook re-reads Stripe on every event"],
  ["Owner-only downloads", "Short-lived presigned S3 URLs"],
  ["Cookieless analytics", "Funnel events without a consent banner"],
];

export function ScrawlkitTechStack() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How it is built
          </h2>
          <p className="text-lg text-muted-foreground">
            One Next.js app, no separate backend. The heavy work happens on
            Lambda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center rounded-xl border bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  {tech.logo ? (
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 dark:invert-[0.9]"
                    />
                  ) : (
                    Icon && <Icon className="h-9 w-9 text-primary" />
                  )}
                </div>
                <h3 className="mb-2 font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-xl border bg-background p-8">
          <h3 className="mb-6 text-center text-2xl font-bold">
            Under the hood
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {details.map(([title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-muted-foreground">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
