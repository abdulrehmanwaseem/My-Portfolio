import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";
import { USER } from "@/features/profile/data/user";

const allPosts = getAllPosts();

/** First listed job is the current role; used as the entity anchor for AI engines. */
const primaryCompany = USER.jobs[0]?.company ?? "";

const content = `# nhkhoa.site

> The portfolio and blog of ${USER.displayName} (Vietnamese: Trương Nguyễn Anh Khoa), ${USER.jobTitle}${primaryCompany ? ` at ${primaryCompany}` : ""}, based in ${USER.address}. Graduated from Van Lang University. Writes about AI workflow automation, Agentic RAG, and LLM integration.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
