import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "etsy-automation-shop",
    title: "Automated Etsy Commerce Studio",
    period: { start: "03.2026" },
    link: "",
    skills: ["n8n", "Make", "Claude", "ComfyUI", "Hugging Face"],
    isExpanded: true,
    description: `Built and operated digital product stores on Etsy with a target of **90% workflow automation** across ideation, production, and operations.

**Highlights**
- **Store Operations:** Developed and managed **three automated Etsy shops** for digital products.
- **Creative Direction:** Built a themed product line for **kids' room wall art** designed to evolve with child development stages.
- **Production Pipeline:** Implemented a paint-by-number pipeline covering image generation, color-region extraction, and algorithmic numbering (e.g., **K-means segmentation**).
- **Automation Impact:** Delivered end-to-end automations to reduce manual effort and increase publishing speed.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Etsy+Automation+Shop",
  },
  {
    id: "vnx-academy",
    title: "VnX Academy",
    period: { start: "10.2025", end: "03.2026" },
    link: "",
    skills: [
      "Next.js",
      "shadcn/ui",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "LangChain",
      "RAG",
      "Agentic RAG",
      "Prisma",
      "Open edX",
    ],
    isExpanded: true,
    description: `Graduation capstone project in **Information Systems for Digital Transformation**, co-developed with one teammate.

**Highlights**
- **Platform Architecture:** Designed and built an education-focused e-commerce platform integrated with LLM capabilities to improve learner and customer experience.
- **Core Stack:** Used **Open edX** as the LMS/CMS core and **Next.js** for storefront, landing pages, and e-commerce workflows.
- **AI Layer:** Implemented **LangChain + RAG + Agentic RAG** using Google Embeddings and Groq-hosted models.
- **Core Modules:** Delivered three strategic modules: e-commerce, instructor-created roadmap system (inspired by roadmap.sh), and personalized AI features.
- **Student Guidance:** Built AI-powered features for personalized chatbot support, role-based skill assessment, and major-fit evaluation for IT faculty enrollment support.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=VnX+Academy",
  },
  {
    id: "trustifycsr-landing-page",
    title: "TrustifyCSR Landing Page",
    period: { start: "04.2025", end: "06.2025" },
    link: "https://github.com/dev-nhkhoa/TrustifyCSR-Website",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    isExpanded: false,
    description: `A modern product website presenting a **blockchain-powered charity transparency** solution, inspired by Arbor Verification Tech.

**Highlights**
- **Brand Positioning:** Crafted a clear and trust-centered product narrative.
- **UX Direction:** Designed for clarity, credibility, and conversion-focused storytelling.
- **Delivery Stack:** Built with **React, TypeScript, Vite, Tailwind CSS, and shadcn/ui**.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=TrustifyCSR+Landing+Page+Website",
  },
  {
    id: "calendar-vlu-2",
    title: "CalendarVLU 2.0",
    period: { start: "02.2023" },
    link: "https://github.com/dev-nhkhoa/calendarVLU2.0",
    skills: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "Zustand",
      "Google API",
      "MongoDB",
    ],
    isExpanded: false,
    description: `CalendarVLU 2.0 is a web application purpose-built for Van Lang University students to manage class and exam schedules efficiently across desktop and mobile.

**Highlights**
- **Schedule Export:** Export class and exam schedules to **CSV** for easy storage and sharing.
- **Calendar Sync:** Synchronize schedules with **Google Calendar** (Outlook support planned).
- **Collaboration:** Share schedules with classmates to keep teams aligned.
- **Reliability:** Support automatic updates when institutional schedules change.

This version is a full redesign and enhancement of the original CalendarVLU, delivered end-to-end with a strong focus on usability and student productivity.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=calendarVLU",
  },
];
