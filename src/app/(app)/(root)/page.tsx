import dayjs from "dayjs";
import type {
  FAQPage as FAQSchema,
  ProfilePage as PageSchema,
  WithContext,
} from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { GraduationHero } from "@/features/graduation/components/graduation-hero";
import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Brand } from "@/features/profile/components/brand";
import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { FAQ } from "@/features/profile/components/faq";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { TestimonialsMarquee } from "@/features/profile/components/testimonials-marquee";
import { FAQ as FAQ_ITEMS } from "@/features/profile/data/faq";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <GraduationHero />
        <Separator />

        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <GitHubContributions />
        <Separator />

        {/* <TestimonialsMarquee />
        <Separator /> */}

        <TeckStack />
        <Separator />

        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        <Awards />
        <Separator />

        <Certifications />
        <Separator />

        <FAQ />
        <Separator />

        <Brand />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  const [currentJob] = USER.jobs;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: SITE_INFO.url,
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      // Both orthographies must resolve to the same entity, so searches for
      // either spelling reach this profile.
      alternateName: ["Trương Nguyễn Anh Khoa", USER.username, "nhkhoa"],
      identifier: USER.username,
      url: SITE_INFO.url,
      image: `${SITE_INFO.url}${USER.avatar}`,
      description: USER.bio,
      jobTitle: USER.jobTitle,
      // sameAs is the identity claim that lets search and AI engines resolve
      // every external profile to this one person.
      sameAs: SOCIAL_LINKS.map((link) => link.href),
      ...(currentJob && {
        worksFor: {
          "@type": "Organization",
          name: currentJob.company,
          ...(currentJob.website && { url: currentJob.website }),
        },
      }),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Van Lang University",
        url: "https://vlu.edu.vn/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
      nationality: {
        "@type": "Country",
        name: "Vietnam",
      },
      knowsAbout: [
        "AI workflow automation",
        "Agentic RAG",
        "Large Language Models",
        "n8n",
        "LangChain",
        "Make.com",
        "TypeScript",
        "Next.js",
        "Prompt engineering",
      ],
      knowsLanguage: ["Vietnamese", "English"],
    },
  };
}

/**
 * Mirrors the visible FAQ section. Both must stay in sync — FAQ schema whose
 * answers are absent from the page violates Google's structured-data policy.
 */
function getFaqJsonLd(): WithContext<FAQSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
