import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "React Wheel Picker",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker)
- 📱 Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔄 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡️ Easy installation via shadcn CLI
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal, pixel-perfect dev portfolio, component registry, and blog.

**Featured:**

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA

**Blog:**

- Supports MDX & Markdown
- Raw \`.mdx\` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

**Registry:**

- Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).
- Each entry is well-documented and includes:
  - Live preview & code snippets
  - Beautiful, readable code blocks
  - One-click command blocks (pnpm, npm, yarn, bun)`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "quaricdotcom",
    title: "quaric.com",
    period: {
      start: "03.2024",
    },
    link: "https://quaric.com",
    skills: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension
- 80k+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 20k+ active users via Chrome Web Store (as of Sep 2025)
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "QABox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/qabox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/taskbox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
];
