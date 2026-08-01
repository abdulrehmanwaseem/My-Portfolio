import { EXPERIENCES } from "@/features/profile/data/experiences";

const content = `# Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.map((skill) => skill).join(", ") || "N/A";
      const description = position.description?.trim();
      return [
        `## ${position.title} | ${item.companyName}`,
        `Duration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}`,
        `Skills: ${skills}`,
        ...(description ? [description] : []),
      ].join("\n\n");
    })
    .join("\n\n")
).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
