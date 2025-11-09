import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export async function NavItemGitHub() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            <Icons.github />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Coding since 14y/o</p>
      </TooltipContent>
    </Tooltip>
  );
}
