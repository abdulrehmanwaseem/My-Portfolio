import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

export async function StarsCount() {
  const data = await fetch(
    `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const json = await data.json();

  const stargazers_count = json?.stargazers_count ?? -1;

  return (
    <span className="text-center text-xs tabular-nums">
      {stargazers_count.toLocaleString()}
    </span>
  );
}
