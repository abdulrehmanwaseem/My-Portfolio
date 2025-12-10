import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Forrof.io",
    companyLogo: "/images/experience/forrof.svg",
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
    id: "pos-software-developer",
    companyName: "Self-Employed",
    companyLogo:
      "https://api.dicebear.com/7.x/shapes/svg?seed=POS+Shop+Management",
    positions: [
      {
        id: "pos-dev-self-employed",
        title: "POS Software Developer",
        employmentPeriod: {
          start: "11.2023",
          end: "04.2024",
        },
        employmentType: "Self-Employed",
        icon: "code",
        description: `- Built comprehensive Shop Management System using PERN stack (PostgreSQL, Express, React, Node.js).
- Developed complete invoice management system with financial transaction logging.
- Created real-time dashboards for sales analytics and inventory tracking.
- Built customer and vendor management with complete transaction history.
- Implemented payment status tracking system with automatic updates.
- Integrated Handontable for Excel-like data entry and manipulation.
- Delivered weekly improvements and new features to enhance system usability.`,
        skills: [
          "React",
          "Redux",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "JWT",
          "Handontable",
          "RESTful APIs",
          "PERN Stack",
          "Real-time Dashboards",
          "Inventory Management",
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
          "Communication Skills",
          "Career Coaching",
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
          start: "2025",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[Fynosign](https://fynosign.com)** - Built complete e-signature SaaS platform with PDF signing workflows (pdf-lib), Stripe subscriptions, OAuth, Gemini AI insights, and audit trails. Deployed on AWS EC2.

- **[LoopIQ](https://www.loopiq.xyz)** - Developed healthcare management platform frontend with React, Redux Toolkit, and RTK Query. Integrated FastAPI backend for patient workflows and SLA tracking.

- **[RallyTyper](https://rallytyper.com)** - Resolved unclear deployment setup, built admin dashboard with blog CMS, retrieved MySQL credentials from WordPress config, and optimized React build.

- **[Khrimisay](https://dev.khrimisay.com)** - Fixed critical PWA cookie persistence causing mobile logouts. Resolved RTK Query caching issues, authentication bugs (OTP, navigation), and UI/UX problems.

- **[Space Facts Explorer](https://apps.apple.com/us/app/space-facts-explorer/id6749238944)** - Extracted app from Rork.ai and rebuilt as Expo React Native project. Managed complete App Store deployment, designed assets with Figma/Canva, overcame rejections.

- **[Zas Dashboard](https://zas-dashboard-v12n.vercel.app)** - Built employment analytics platform consuming Spanish labor APIs (100k+ rows). Transformed Spanish variables to English, built interactive stats with filters.

- **[Precision](/internal-project)** - Rebuilt CSV/Excel module for real estate platform (MERN). Implemented flexible parsing, validation, and error reporting for complex industry datasets.

- **[Lead Smart](/internal-project)** - Integrated backend APIs into React TypeScript frontend. Rebuilt dashboard UI with real-time metrics, cleaned codebase, unified styling.`,
        icon: "code",
        skills: [
          "React",
          "React Native",
          "Redux Toolkit",
          "TypeScript",
          "Node.js",
          "NestJS",
          "FastAPI",
          "MongoDB",
          "PostgreSQL",
          "AWS EC2",
          "Stripe",
          "OAuth",
          "Expo",
          "pdf-lib",
          "API Integration",
        ],
        isExpanded: true,
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "UI/UX & 3D Engineer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[Oil Refinery Platform](https://oil-refinery.vercel.app)** - Built interactive 3D visualization with React Three Fiber and Three.js. Implemented realistic lighting, water physics, and real-time monitoring concepts.

- **[Fitreps](https://www.fitreps.com)** - Redesigned subscription UI/UX with custom CSS on legacy Material UI (no Tailwind). Built modals and drawers. Developed dark mode from scratch.

- **[Truer EHR Dashboard](https://ehr-dashboard-nine.vercel.app)** - Built EHR dashboard UI with OAuth authentication (Google + Supabase). Implemented patient CRUD, dashboard stats, and API integration.

- **[Stall Bedding Calculator](https://bedding-calculator.netlify.app)** - Built responsive calculator with pure HTML/CSS/JS. Replicated AI design, made fully responsive, implemented volume calculations with store-specific pricing.

- **[EdTech Platform](/internal-project)** - Designed multi-step auth UI with AWS Cognito. Refactored flow replacing prop drilling with Redux Toolkit for clean parent/child registration data management.`,
        icon: "design",
        skills: [
          "Three.js",
          "React Three Fiber",
          "UI/UX Design",
          "Figma",
          "Material UI",
          "Custom CSS",
          "Dark Mode Design",
          "Responsive Design",
          "Redux Toolkit",
          "AWS Cognito",
          "Supabase",
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
