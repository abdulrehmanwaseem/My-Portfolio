import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Forrof.io",
    companyLogo: "https://avatars.githubusercontent.com/u/229644532",
    positions: [
      {
        id: "forrof-fullstack-dev",
        title: "Senior Fullstack Developer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop scalable SaaS applications using modern web technologies.
- Build cross-platform applications with React Native and Electron.
- Architect and develop full-stack solutions with the MERN stack.
- Design and implement RESTful APIs with Node.js and Express.
- Build responsive, performant frontend applications with Next.js and React.
- Implement real-time features with WebSockets and event-driven architecture.
- Integrate third-party APIs and services for enhanced functionality.
- Collaborate with cross-functional teams in a remote environment.
- Optimize application performance and ensure code quality.`,
        skills: [
          "MERN Stack",
          "React.js",
          "React Native",
          "Next.js",
          "NestJS",
          "Electron",
          "TypeScript",
          "MongoDB",
          "Express.js",
          "PostgreSQL",
          "RESTful APIs",
          "SaaS Development",
          "Remote Work",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "forrof-3d-specialist",
        title: "3D Web Specialist",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Implement immersive 3D web experiences using Three.js and WebGL.
- Create interactive 3D visualizations and animations for web applications.
- Optimize 3D rendering performance for smooth user experiences.
- Develop custom shaders and materials for advanced visual effects.
- Integrate 3D models and assets from Blender and other design tools.
- Build responsive 3D interfaces that work across devices.
- Implement physics simulations and interactive 3D controls.`,
        skills: [
          "Three.js",
          "WebGL",
          "Rapier Physics Engine",
          "3D Web Development",
          "React Three Fiber",
          "GLSL Shaders",
          "Blender",
          "3D Modeling",
          "Performance Optimization",
          "Interactive Design",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "quaric",
    companyName: "Quaric Co., Ltd.",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Design Engineer",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Created Quaric Brand Identity.
- Created the Quaric Design System to standardize design practices and accelerate development.

In-house Project: [Quaric Website](https://quaric.com)
- Designed the UI/UX for Quaric Website, delivering a seamless experience.
- Developed online ordering to streamline purchases.
- Integrated VNPAY-QR for secure transactions.
- Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.

In-house Project: [ZaDark](https://zadark.com)
- Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
- Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 20k+ active users via Chrome Web Store (as of Sep 2025).`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Figma",
          "Research",
        ],
        isExpanded: true,
      },
      {
        id: "991692c4-7d02-4666-8d31-933c4831768d",
        title: "Founder & Director",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "idea",
        description: `- Lead and manage the company's strategy.
- Oversee technical teams and product development.
- Manage relationships with customers and partners.`,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "tungtung",
    companyName: "Tung Tung JSC",
    companyLogo: "https://assets.chanhdai.com/images/companies/tungtung.webp",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Web Developer",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        employmentType: "Full-time",
        description: `- Built a scalable design system for consistency and efficiency.
- Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
- Integrated APIs with the Backend Team to enhance functionality.`,
        icon: "code",
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        description: `- Rebuilt the app with React Native for better UX and performance.
- Integrated MoMo and in-app purchases for seamless payments.
- Optimized deployment for staging and production.
- Published on App Store and Google Play, ensuring compliance.`,
        icon: "code",
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "App Center",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Full-time",
        description: `- Designed a Landing Page for enterprise clients.
- Redesigned the Online Quiz Platform for a modern look on web and mobile.
- Redesigned the Pricing interface for individual customers.
- Enhanced UX by improving usability, navigation, and user flow.`,
        icon: "design",
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        employmentType: "Part-time",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic & UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Part-time",
        description: "Designed logos, posters, ads, and UI.",
        icon: "design",
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University of Sindh — Jamshoro",
        employmentPeriod: {
          start: "01.2026",
          end: "2030",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Data Science.
- Language Proficiency: B1 English Level.
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "FG Degree College Cant - Hyderabad",
        employmentPeriod: {
          start: "08.2023",
          end: "06.2025",
        },
        icon: "education",
        description: `- Student of the Specialized Computer Science Program.
- Granted direct admission to university due to achieving 3rd Prize at the national level.
- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
  - 1st Prize — Can Tho City Science and Engineering Fair 2018
  - Creativity Award — Binh Duong Hackathon 2017
  - Consolation Prize — National Youth and Children's Creativity Contest 2016
  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children's Creativity Contest 2016
  - 3rd Prize — National Young Informatics Contest 2016
- Achieved the title of Outstanding Student from Grade 10-12.
- Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
- Honored on the school's "Hall of Fame" for academic achievements.
- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
- Developed websites based on Laravel framework.
- Built websites with PHP and MySQL, following the MVC architecture.`,
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "New Banat Higher Secondary School",
        employmentPeriod: {
          start: "08.2011",
          end: "06.2023",
        },
        icon: "education",
        description: `- Recognized as the most outstanding student of the district.
- Achieved numerous awards at city and national levels:
  - Consolation Prize — National Young Informatics Contest 2015
  - Consolation Prize — National Young Informatics Contest 2014
  - 1st Prize — Can Tho City Young Informatics Contest 2014
- Achieved the title of Outstanding Student from Grade 6-9.
- Developed websites using the open-source NukeViet CMS.`,
        skills: [
          "Pascal",
          "NukeViet",
          "HTML",
          "CSS",
          "JavaScript",
          "Self-learning",
        ],
      },
    ],
  },
];
