import type { Registry } from "shadcn/schema";

export const components: Registry["items"] = [
  {
    name: "theme-switcher",
    type: "registry:component",
    description:
      "A theme switcher component for Next.js apps with next-themes and Tailwind CSS, supporting system, light, and dark modes.",
    title: "Theme Switcher",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["next-themes", "lucide-react", "motion"],
    registryDependencies: ["@nhkhoa/utils"],
    files: [
      {
        path: "theme-switcher/theme-switcher.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://nhkhoa.site/components/theme-switcher-component",
  },
  {
    name: "flip-sentences",
    type: "registry:component",
    title: "Flip Sentences",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["motion"],
    registryDependencies: ["@nhkhoa/utils"],
    files: [
      {
        path: "flip-sentences/flip-sentences.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "apple-hello-effect",
    type: "registry:component",
    description:
      "Create a Xin chào and Hello writing effect inspired by Apple using Motion for React.",
    title: "Apple Hello Effect",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["motion"],
    registryDependencies: ["@nhkhoa/utils"],
    files: [
      {
        path: "apple-hello-effect/apple-hello-effect.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://nhkhoa.site/components/writing-effect-inspired-by-apple",
  },
  {
    name: "wheel-picker",
    type: "registry:component",
    description:
      "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
    title: "Wheel Picker",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["@ncdai/react-wheel-picker"],
    registryDependencies: ["@nhkhoa/utils"],
    files: [
      {
        path: "wheel-picker/wheel-picker.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://nhkhoa.site/components/react-wheel-picker",
  },
  {
    name: "work-experience",
    type: "registry:component",
    description:
      "Displays a list of work experiences with role details and durations.",
    title: "Work Experience",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["react-markdown", "lucide-react"],
    devDependencies: ["@tailwindcss/typography", "tw-animate-css"],
    registryDependencies: ["@nhkhoa/utils", "collapsible", "separator"],
    files: [
      {
        path: "work-experience/work-experience.tsx",
        type: "registry:component",
      },
    ],
    cssVars: {
      light: {
        background: "oklch(1 0 0)",
        muted: "oklch(0.967 0.001 286.375)",
        "muted-foreground": "oklch(0.552 0.016 285.938)",
        border: "oklch(0.92 0.004 286.32)",
      },
      dark: {
        background: "oklch(0.141 0.005 285.823)",
        muted: "oklch(0.274 0.006 286.033)",
        "muted-foreground": "oklch(0.705 0.015 286.067)",
        border: "oklch(0.274 0.006 286.033)",
      },
    },
    css: {
      '@import "tw-animate-css"': {},
      "@plugin @tailwindcss/typography": {},
    },
    docs: "https://nhkhoa.site/components/work-experience-component",
  },
  {
    name: "shimmering-text",
    type: "registry:component",
    description: "Smooth shimmering text animation built with Motion.",
    title: "Shimmering Text",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["motion"],
    registryDependencies: ["@nhkhoa/utils"],
    files: [
      {
        path: "shimmering-text/shimmering-text.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "slide-to-unlock",
    type: "registry:component",
    description:
      "A sleek, interactive slider inspired by the classic iPhone OS 'slide to unlock' gesture.",
    title: "Slide to Unlock",
    author: "nhkhoa <khoa@nhkhoa.site>",
    dependencies: ["motion"],
    registryDependencies: ["@nhkhoa/utils", "@nhkhoa/shimmering-text"],
    files: [
      {
        path: "slide-to-unlock/slide-to-unlock.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://nhkhoa.site/components/slide-to-unlock",
  },
  {
    name: "testimonials-marquee",
    type: "registry:component",
    description:
      "A testimonials marquee component for showcasing user feedback in a scrolling format.",
    title: "Testimonials Marquee",
    author: "nhkhoa <khoa@nhkhoa.site>",
    registryDependencies: ["@nhkhoa/utils", "@kibo-ui/marquee"],
    files: [
      {
        path: "testimonials-marquee/testimonials-marquee.tsx",
        type: "registry:component",
      },
    ],
    docs: "https://nhkhoa.site/components/testimonials-marquee",
  },
];
