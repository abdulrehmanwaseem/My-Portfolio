import { ArrowLeft, Building2, FileText, Lock, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal Client Project",
  description:
    "This project is confidential and developed for internal use by our client. Due to NDA and privacy agreements, we cannot share the live URL.",
};

export default function InternalProjectPage() {
  return (
    <div className="mx-auto min-h-screen md:max-w-3xl">
      <div className="space-y-8 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Confidential Project</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Internal Client Project
          </h1>

          <p className="text-lg text-muted-foreground">
            This project was developed for internal use by my client under a
            non-disclosure agreement.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 rounded-lg border bg-card p-6 md:p-8">
          {/* Why Can't Share */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">
                Why can&apos;t I share this?
              </h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              This project is part of the client&apos;s internal infrastructure
              and operations. Due to confidentiality agreements and privacy
              requirements, I cannot provide access to the live application or
              share detailed implementation specifics.
            </p>
          </div>

          <div className="border-t" />

          {/* What I Can Share */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">What I can tell you</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              While I respect the confidentiality of the project, I can discuss
              the technical challenges I solved, the technologies used, and the
              impact of my work on the client&apos;s business operations.
            </p>
          </div>

          <div className="border-t" />

          {/* Professional Standards */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Professional commitment</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Protecting client confidentiality is a fundamental part of
              professional software development. I take NDAs and privacy
              agreements seriously, ensuring all sensitive information remains
              secure.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg border bg-muted/50 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold">Want to know more?</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            I&apos;d be happy to discuss the technical aspects of this project
            and how my skills can benefit your team.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>

        {/* Testimonial Reference */}
        <div className="text-center text-sm text-muted-foreground">
          See what clients say about my work in the{" "}
          <Link
            href="/#testimonials"
            className="underline hover:text-foreground"
          >
            testimonials section
          </Link>
        </div>
      </div>
    </div>
  );
}
