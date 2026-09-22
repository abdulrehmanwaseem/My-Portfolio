import {
  Cloud,
  CreditCard,
  Eye,
  PenLine,
  Smartphone,
  Sparkles,
  Stamp,
  UserRound,
} from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Strokes that boil",
    description:
      "Every line is generated as a rough pen path and redrawn a few times a second, the way hand-drawn animation flickers. Seeds live in the props, so a render is repeatable but never rigid.",
  },
  {
    icon: Eye,
    title: "Type, watch, render",
    description:
      "A short form per template, a live preview beside it. What you see in the browser is the same component the cloud renders, so there are no surprises in the MP4.",
  },
  {
    icon: Cloud,
    title: "Rendered on AWS Lambda",
    description:
      "Remotion Lambda splits each video into chunks and renders them in parallel. A small queue keeps the account inside its concurrency limit and lines people up instead of failing them.",
  },
  {
    icon: Smartphone,
    title: "Three formats",
    description:
      "9:16 for TikTok, Reels and Shorts, 1:1 for feeds, 16:9 for everything else. Each template lays itself out for the frame instead of cropping.",
  },
  {
    icon: UserRound,
    title: "Accounts and credits",
    description:
      "Email and Google sign-in, confirmation and reset emails, and a monthly render allowance. A failed render refunds its credit automatically.",
  },
  {
    icon: CreditCard,
    title: "Subscriptions",
    description:
      "Stripe Checkout and the customer portal, with a webhook that re-reads the truth from Stripe on every event, so a repeated or late event never grants twice.",
  },
  {
    icon: Stamp,
    title: "A stamp on free renders",
    description:
      "Free renders carry a small hand-drawn stamp in the corner. Paid plans remove it and raise the allowance. The stamp is the marketing.",
  },
  {
    icon: Sparkles,
    title: "Art with a house style",
    description:
      "Borders, tape strips, arrows and spot illustrations were generated with Higgsfield in one ink-on-paper style, then vectorised and drawn on by the same engine.",
  },
];

export function ScrawlkitFeatures() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What makes it different
          </h2>
          <p className="text-lg text-muted-foreground">
            Most short-video tools converge on bold captions over stock footage.
            Scrawlkit sells the opposite look.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
