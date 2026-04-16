import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Khoa",
  lastName: "Truong Nguyen Anh",
  displayName: "Truong Nguyen Anh Khoa",
  username: "nhkhoa.a",
  gender: "male",
  pronouns: "he/him",
  bio: "AI Automation Developer | Building intelligent workflows",
  timeZone: "Asia/Ho_Chi_Minh",
  flipSentences: ["AI Automation Developer", "Freelancer", "Building Khoa AI"],
  address: "Ho Chi Minh City, Vietnam",
  phoneNumber: "Kzg0Nzk2ODAyMzk5", // E.164 format: +84 796 802 399, base64 encoded
  email: "d29yay5uaGtob2FAZ21haWwuY29t", // work.nhkhoa@gmail.com, base64 encoded
  website: "https://nhkhoa.site",
  jobTitle: "AI Automation Developer",
  jobs: [
    {
      title: "Founder & Developer",
      company: "Khoa AI",
      website: "https://www.facebook.com/profile.php?id=61573277976481",
    },
    {
      title: "Graduate",
      company: "Van Lang University",
      website: "https://vlu.edu.vn/",
    },
  ],
  about: `
- **AI Automation Developer** recently graduated from Van Lang University with a passion for building intelligent workflows that save time and boost productivity
- Now at **22 years old**, excited to build a career at the intersection of AI and practical business solutions
- **Skills**: JavaScript/TypeScript, LangChain, OpenAI API, Claude Code, Workflow Automation tools (n8n, Zapier, Make.com)
- **Mission**: Democratizing AI automation for everyone, one workflow at a time
`,
  avatar: "/images/me.png",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "", // Add audio file for name pronunciation if available
  keywords: [
    "Trương Nguyễn Anh Khoa",
    "Truong Nguyen Anh Khoa",
    "nhkhoa.a",
    "Khoa VLU",
    "Khoa Van Lang",
    "Khoa CNTT",
    "Khoa HTTT",
    "Khoa HTTT VLU",
    "ai automation developer",
    "ai developer vietnam",
    "freelancer vietnam",
    "automation developer",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "langchain developer",
    "n8n automation",
  ],
  dateCreated: "2026-04-15",
};
