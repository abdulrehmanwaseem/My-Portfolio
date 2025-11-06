import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Abdul Rehman",
  lastName: "Waseem",
  displayName: "Abdul Rehman",
  username: "abdulrehmanwaseem",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer | Crafting multiplatform applications with modern cutting-edge technology",
  flipSentences: [
    "Fullstack Web Developer",
    "Mobile App Developer",
    "3D Web Developer",
    "Desktop Application Developer",
  ],
  address: "Hyderabad City, Pakistan",
  phoneNumber: "KzkyIDMxMTgxMSA0ODA1", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWJkdWxyZWhtYW53b3JrMjAyNEBnbWFpbC5jb20=", // base64 encoded
  website: "https://abdulrehman-code.vercel.app",
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
      website: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    },
    // title: "POS Software Developer",
    // company: "Self-Employed",
    // website: "https://github.com/abdulrehmanwaseem",
  ],
  about: `
  Hello World! I am Abdul Rehman a passionate Full Stack Developer whose journey began at age 14 in 9th grade. Now at 18, having completed 12th grade, I've transformed that early curiosity into expertise in modern web development, specializing in the MERN stack while mastering Next.js, NestJS, React Native, Electron, and 3D technologies.

  What some might view my age as a limitation But i see as my greatest advantage. Starting early has given me the freedom to learn, experiment and build a foundation that sets me apart, combining practical experience with theoretical knowledge.

  I specialize in building high-quality web, mobile, desktop, and 3D applications using React, TypeScript, Node.js, and modern technologies. From building a comprehensive Shop Management System using the PERN stack to creating immersive 3D games with Three.js and React Three Fiber, I love turning ideas into reality.

  Currently developing a SaaS Shop Management System and exploring System Design, I aim to eventually venture into AI. My mission remains clear: creating software that delivers exceptional user experiences while constantly adapting to stay at the forefront of technology.

  Let's connect and collaborate!
`,
  avatar: "/images/me.png",
  ogImage: "/images/og-image.png",
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
