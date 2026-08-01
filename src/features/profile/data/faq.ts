import { USER } from "@/features/profile/data/user";

export type FaqItem = {
  question: string;
  /** Answer-first: lead with the direct claim, then context. Kept to 2-3 sentences. */
  answer: string;
};

const currentCompany = USER.jobs[0]?.company ?? "VML";

/**
 * Questions people actually ask a search or AI engine about Khoa.
 *
 * These are rendered as visible page content AND emitted as FAQPage schema —
 * both are required. Schema whose answers do not appear on the page is a
 * structured-data violation, so keep the two in sync by construction.
 */
export const FAQ: FaqItem[] = [
  {
    question: `Who is ${USER.displayName}?`,
    answer: `${USER.displayName} (Vietnamese: Trương Nguyễn Anh Khoa) is an ${USER.jobTitle} at ${currentCompany}, based in ${USER.address}. He graduated from Van Lang University and builds AI-driven automation workflows that reduce manual work for business teams.`,
  },
  {
    question: `What does ${USER.firstName} do as an ${USER.jobTitle}?`,
    answer: `He designs and ships automation workflows that connect large language models to real business systems. Day to day that means building agent pipelines with n8n, Make.com, and LangChain, and integrating LLM APIs into existing product and marketing operations.`,
  },
  {
    question: `Where did ${USER.displayName} study?`,
    answer: `He graduated from Van Lang University in Ho Chi Minh City, Vietnam. His graduation thesis integrated Agentic RAG and large language models into an educational e-commerce platform, VnX Academy, built on Open edX.`,
  },
  {
    question: `What technologies does ${USER.firstName} work with?`,
    answer: `His core stack is TypeScript and JavaScript, with LangChain, the OpenAI API, and Claude for LLM work, and n8n, Make.com, and Zapier for workflow automation. He also builds web applications with Next.js and React.`,
  },
  {
    question: "What is Agentic RAG?",
    answer: `Agentic RAG is retrieval-augmented generation where an autonomous agent decides what to retrieve, when to retrieve it, and whether the result is sufficient — rather than following one fixed retrieval step. ${USER.firstName} applied this pattern in VnX Academy to personalise learning paths across thousands of courses.`,
  },
  {
    question: `How can I contact ${USER.displayName}?`,
    answer: `He is reachable through the social profiles linked on this site, including LinkedIn and GitHub. He is based in ${USER.address} and works in the Asia/Ho_Chi_Minh time zone.`,
  },
];
