import type { ExperienceItemType } from "@/registry/work-experience";
import { WorkExperience } from "@/registry/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "khoa-ai",
    companyName: "Khoa AI",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=KhoaAI",
    positions: [
      {
        id: "khoa-ai-freelancer",
        title: "AI Automation Developer",
        employmentPeriod: "01.2026 — present",
        employmentType: "Freelance",
        icon: "code",
        description: `- Focused on building a strong foundation in Automation and AI.
- Developing the Khoa AI - Digital Twin project on Facebook Page.
- Delivering AI-powered automation solutions for clients.`,
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
];

export default function WorkExperienceDemo() {
  return (
    <WorkExperience
      className="w-full rounded-lg border"
      experiences={WORK_EXPERIENCE}
    />
  );
}
