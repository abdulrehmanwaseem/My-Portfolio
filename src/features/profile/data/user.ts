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
      company: "ShopFlow",
      website: "/products/shopflow",
    },
  ],
  about: `
- **Fullstack Developer** with **4+ years of experience**, started coding at age 14; known for clean architecture and attention to detail.
- Expertise in **MERN stack**, **Next.js**, **NestJS**, **React Native**, **Electron**, and **3D technologies**; building scalable web, mobile, desktop, and immersive 3D applications.
- Now at **18 years old**, what some view as a limitation, I see as my greatest advantage—starting early gave me the freedom to learn, experiment and build a strong foundation combining practical experience with theoretical knowledge.
- Creator of [ShopFlow](/products/shopflow): modern SaaS shop management system
  - Built with **PERN stack** (PostgreSQL, Express, React, Node.js) and **Prisma ORM**
  - Invoice management (purchases, sales, expenses), inventory tracking and payment status monitoring
  - Real-time dashboard with financial insights and automated low-stock alerts
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
