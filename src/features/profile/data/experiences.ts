import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Forrof.io",
    companyLogo: "/images/forrof.svg",
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
- Design and implement RESTful APIs with Node.js, Express.js and NestJS
- Build responsive, performant frontend applications with Next.js and React.
- Integrate third-party APIs and real-time features using WebSockets.
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
    theme: true,
  },
  {
    id: "ezone-academy",
    companyName: "E.Zone Academy",
    companyLogo:
      "https://ui-avatars.com/api/?name=E.Zone+Academy&background=4F46E5&color=fff&size=200",
    positions: [
      {
        id: "ezone-freelancing-trainer",
        title: "Freelancing & IT Skills Trainer",
        employmentPeriod: {
          start: "03.2025",
          end: "06.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Conducted in-person workshops and training on how to start and grow a freelancing career.
- Taught students how to build freelance profiles on platforms like Upwork and Fiverr.
- Trained students on writing winning proposals and managing client relationships effectively.
- Provided hands-on guidance on freelancing best practices and career development.`,
        skills: [
          "Training & Mentoring",
          "Freelancing",
          "Upwork",
          "Fiverr",
          "Client Management",
          "Professional Development",
          "Communication Skills",
          "Career Coaching",
        ],
      },
    ],
  },
  {
    id: "web-dev-instructor",
    companyName: "Frontend Development Course",
    companyLogo:
      "https://ui-avatars.com/api/?name=Frontend+Course&background=10B981&color=fff&size=200",
    positions: [
      {
        id: "web-dev-instructor-online",
        title: "Web Development Instructor",
        employmentPeriod: {
          start: "04.2024",
          end: "06.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Taught HTML, CSS, JavaScript, and React.js with hands-on project-based learning.
- Delivered structured online training sessions focused on full-stack web development.
- Provided one-on-one mentoring to university students pursuing web development careers.
- Designed curriculum covering modern web development practices and industry standards.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Online Teaching",
          "Curriculum Design",
          "Project-Based Learning",
          "Mentoring",
          "Full-Stack Development",
        ],
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
          start: "2024",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **Fynosign** - Built complete e-signature SaaS platform with PDF signing, Stripe subscriptions, OAuth, AI document insights, and audit trails. Deployed on AWS EC2.
- **LoopIQ** - Built healthcare management platform frontend using React, Redux Toolkit, and RTK Query with FastAPI integration.
- **Zas Dashboard** - Developed employment analytics platform consuming Spanish labor market APIs (100k+ rows) with data visualization.
- **RallyTyper** - Resolved deployment issues, built admin dashboard with CMS, optimized React build on WordPress hosting.
- **Khrimisay** - Fixed PWA cookie persistence, RTK Query caching issues, authentication bugs, and UI/UX problems on Next.js messaging platform.
- **Space Facts Explorer** - Rebuilt iOS app from Rork.ai to Expo React Native, designed assets, managed App Store deployment and rejections.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "React Native",
          "Redux Toolkit",
          "TypeScript",
          "Node.js",
          "Express.js",
          "NestJS",
          "MongoDB",
          "PostgreSQL",
          "AWS",
          "Stripe",
          "OAuth",
          "PWA",
          "Expo",
          "PDF.js",
          "RTK Query",
          "API Integration",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "UI/UX & 3D Engineer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **Oil Refinery Platform** - Built interactive 3D visualization using React Three Fiber and Three.js for industrial monitoring system with real-time asset monitoring, health scoring, and dynamic camera controls.
- **Fitreps** - Redesigned subscription UI/UX with custom CSS on Material UI. Built subscription modals (desktop) and swipeable drawers (mobile). Developed dark mode from scratch.
- **Truer EHR Dashboard** - Designed and built Electronic Health Record dashboard UI with OAuth authentication, patient CRUD operations, dashboard stats, and API integration with Supabase.
- **Stall Bedding Calculator** - Designed and built responsive calculator with pure HTML/CSS/JavaScript for horse stall bedding estimation across multiple stores with cost calculations.
- **EdTech Platform** - Designed multi-step authentication UI with AWS Cognito, implemented clean registration flows replacing prop drilling with structured state management.`,
        icon: "design",
        skills: [
          "Three.js",
          "React Three Fiber",
          "WebGL",
          "3D Visualization",
          "UI/UX Design",
          "Figma",
          "Material UI",
          "Custom CSS",
          "Dark Mode Design",
          "Responsive Design",
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
        description: `- Currently studying for a Bachelor's degree in Data Science.`,
        skills: [
          "Python",
          "Machine Learning",
          "Data Analysis",
          "Statistics",
          "NumPy",
          "Pandas",
          "Scikit-learn",
          "TensorFlow",
          "SQL",
          "Data Structures",
          "Algorithms",
          "Linear Algebra",
          "Self-learning",
          "Teamwork",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "FG Degree College Cant - Hyderabad",
        employmentPeriod: {
          start: "07.2023",
          end: "06.2025",
        },
        icon: "education",
        description: `- Student of the Intermediate in Computer Science (ICS) Program.
- Participated in provincial coding project competition, developed a 3D web-based airplane game.
  - Achieved 2nd position at FG Public School Cantt Exhibition for project showcase.
- Learned C and C++ programming with strong foundation in computer science fundamentals.
- Maintained good academic standing throughout intermediate studies.`,
        skills: [
          "C Programming",
          "C++",
          "Algorithms",
          "Game Development",
          "Problem Solving",
          "Web Development",
          "Three.js",
          "Project Development",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "New Banat Higher Secondary School",
        employmentPeriod: {
          start: "02.2011",
          end: "05.2023",
        },
        icon: "education",
        description: `- Recognized as the most outstanding student of the section.
- Developed websites using the html, css, js.`,
        skills: ["HTML", "CSS", "JavaScript", "Self-learning", "Teamwork"],
      },
    ],
  },
];
