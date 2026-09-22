import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Abdul Rehman",
  lastName: "Waseem",
  displayName: "Abdul Rehman",
  username: "abdulrehmanwaseem",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  timeZone: "Asia/Karachi",
  flipSentences: [
    "Fullstack Web Developer",
    "AI Agent Engineer",
    "Founder of Scrawlkit",
    "Mobile App Developer",
    "3D Web Developer",
    "Desktop Application Developer",
  ],
  address: "Karachi City, Pakistan",
  phoneNumber: "KzkyMzExODExNDgwNQ==", // E.164 format, base64 encoded (https://t.io.vn/
  secondPhoneNumber: "Kzk3MSA1NSA1NjMgMzI4OQ==",
  // base64-string-converter)
  email: "Y29udGFjdEBhYmR1bHJlaG1hbndhc2VlbS5tZQ==", // base64 encoded
  website: "https://abdulrehmanwaseem.me",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Senior Fullstack Developer & 3D Web Specialist At",
      company: "Forrof.io",
      website: "https://forrof.io?ref=IN-926722",
    },
    {
      title: "Founder",
      company: "Scrawlkit",
      website: "https://scrawlkit.com",
    },
  ],
  about: `
- **Fullstack Developer** with **4+ years of experience**, started coding at age 14; known for clean architecture and attention to detail.
- Expertise in **MERN stack**, **Next.js**, **NestJS**, **React Native**, **Electron**, and **3D technologies**; building scalable web, mobile, desktop, and immersive 3D applications.
- Now at **18 years old**, what some view as a limitation, I see as my greatest advantage—starting early gave me the freedom to learn, experiment and build a strong foundation combining practical experience with theoretical knowledge.
- Founder of [Scrawlkit](/products/scrawlkit): hand-drawn video templates for TikTok, Reels and Shorts, live at [scrawlkit.com](https://scrawlkit.com)
  - Type a few words, get an ink-on-paper MP4; every stroke wobbles like a real pen, so no two renders match
  - Built with **Next.js 16**, **Remotion** rendering on **AWS Lambda**, **Better Auth**, **Drizzle** on **Neon** and **Stripe** subscriptions
  - Earlier product: [ShopFlow](/products/shopflow), a PERN stack shop management system
- **Passionate** about exploring new technologies and turning ideas into reality through polished, production-ready projects. Currently exploring **System Design** and aiming to venture into **AI**.
- **Mission:** Creating software that delivers exceptional user experiences while constantly adapting to stay at the forefront of technology.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/abdulrehman.mp3",
  keywords: [
    "abdul rehman",
    "abdulrehmanwaseem",
    "abdul rehman waseem",
    "scrawlkit",
    "hand-drawn video templates",
    "remotion developer",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
