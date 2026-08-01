import type { ExperienceItemType } from "@/registry/work-experience";
import { WorkExperience } from "@/registry/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "vml",
    companyName: "VML",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=VML",
    positions: [
      {
        id: "vml-ai-workflow-automation-engineer",
        title: "AI Workflow & Automation Engineer",
        employmentPeriod: "06.2026 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Building AI-powered workflows and automation for brand and commerce teams.
- Designing agentic pipelines that connect marketing platforms end to end.`,
        skills: [
          "AI Automation",
          "Workflow Design",
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
