import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Khoa AI",
    positions: [
      {
        id: "khoa-ai-founder",
        title: "Freelancer · AI Automation Developer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Freelance",
        icon: "code",
        description:
          "- Focused on building a strong foundation in Automation and AI to grow as an AI Automation Developer.\n- Currently developing the Khoa AI - Digital Twin project on Facebook Page.",
        skills: [
          "AI Automation",
          "Workflow Design",
          "Digital Twin",
          "n8n",
          "Make",
          "Prompt Engineering",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "aht-tech",
    companyName: "AHT Tech",
    companyLogo:
      "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/bnuMovsJU7qsIR2NBw68wdgtCN9jl59v_1737512386____8e38d39c50f1ffc5ab349a913fe37e4d.png",
    positions: [
      {
        id: "erp-functional-consultant-intern",
        title: "Functional Consultant ERP Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        icon: "business",
        description:
          "- Participated in requirement gathering to build an Odoo-based CRM module for a major coffee and franchise business in Vietnam.",
        skills: [
          "Odoo",
          "ERP",
          "CRM",
          "Requirement Gathering",
          "Business Analysis",
        ],
      },
    ],
  },
  {
    id: "vlu-research",
    companyName: "Van Lang University",
    companyLogo:
      "https://thuvienvector.vn/wp-content/uploads/2025/09/logo-dai-hoc-van-lang-vlu.jpg",
    positions: [
      {
        id: "perplexity-campus-ambassador",
        title: "Campus Ambassador",
        employmentPeriod: {
          start: "09.2025",
          end: "12.2025",
        },
        employmentType: "Part-time",
        icon: "business",
        description:
          "- Served as a Perplexity brand ambassador at Van Lang University, promoting the AI-powered Comet browser.\n- Conducted classroom presentations and guided students in adopting the latest AI technologies.",
        skills: [
          "Brand Ambassador",
          "Public Speaking",
          "AI Tools Adoption",
          "Community Building",
        ],
      },
      {
        id: "researcher-genai-higher-education",
        title: "Researcher",
        employmentPeriod: {
          start: "05.2025",
          end: "11.2025",
        },
        employmentType: "Research",
        icon: "idea",
        description:
          "- Led a research team with two faculty advisors on the topic 'GenAI in Higher Education: A Review of Student Adoption and A Future Research Agenda'.\n- The paper was published on IEEE and presented at ACOMPA 2025 hosted by Van Lang University.\n- IEEE: https://ieeexplore.ieee.org/abstract/document/11360117\n- ACOMPA: https://www.computer.org/csdl/proceedings/acompa/2025/2dHmfxYdkvS",
        skills: [
          "Research",
          "Generative AI",
          "Higher Education",
          "Academic Writing",
          "Conference Presentation",
        ],
      },
      {
        id: "trustifycsr-frontend-developer",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "06.2025",
        },
        employmentType: "Competition Project",
        icon: "code",
        description:
          "- Participated in Van Lang University's annual startup competition with the TrustifyCSR project (charity transparency powered by Blockchain).\n- Collaborated with 4 team members, reached Top 21, and advanced to the semifinal round.",
        skills: [
          "Frontend Development",
          "Startup Pitching",
          "Teamwork",
          "Blockchain Product Thinking",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "van-lang-university",
        title: "Information Systems - Digital Transformation",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        employmentType: "Bachelor's Degree",
        icon: "education",
        description: "- Graduate from Van Lang University.",
        skills: [
          "Information Systems",
          "Digital Transformation",
          "System Analysis",
        ],
      },
      {
        id: "pham-van-sang-high-school",
        title: "Pham Van Sang High School",
        employmentPeriod: {
          start: "2019",
          end: "2022",
        },
        employmentType: "High School",
        icon: "education",
      },
    ],
  },
];
