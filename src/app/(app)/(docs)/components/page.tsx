import {
  BriefcaseBusinessIcon,
  GalleryHorizontalEndIcon,
  LineSquiggleIcon,
  MoonStarIcon,
  ZapIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getPostsByCategory } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

const componentsJSON = `\`\`\`json title="components.json" showLineNumbers {3}
{
  "registries": {
    "@ncdai": "https://chanhdai.com/r/{name}.json"
  }
}
\`\`\``;

export default function Page() {
  const posts = getPostsByCategory("components");

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Components</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-before screen-line-after flex items-center gap-3 px-4 py-3 pr-3">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Listed in the official{" "}
          <a
            className="whitespace-nowrap underline-offset-4 hover:underline"
            href="https://ui.shadcn.com/docs/directory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.shadcn className="mr-1.5 inline-block size-4 -translate-y-px" />
            Registry Directory
          </a>
          .
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto" variant="secondary" size="sm">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.85 0a4.16 4.16 0 0 0-2.95 1.217L1.456 10.66a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l9.442-9.442a2.49 2.49 0 0 1 3.541 0 2.49 2.49 0 0 1 0 3.541L8.59 12.97l-.1.1a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l.1-.098 7.03-7.034a2.49 2.49 0 0 1 3.542 0l.049.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.755l1.753 1.753a.835.835 0 0 0 1.18 0 .835.835 0 0 0 0-1.18l-1.753-1.753a.266.266 0 0 1 0-.394l8.54-8.54a4.185 4.185 0 0 0 0-5.9l-.05-.05a4.16 4.16 0 0 0-2.95-1.218c-.2 0-.401.02-.6.048a4.17 4.17 0 0 0-1.17-3.552A4.16 4.16 0 0 0 13.85 0m0 3.333a.84.84 0 0 0-.59.245L6.275 10.56a4.186 4.186 0 0 0 0 5.902 4.186 4.186 0 0 0 5.902 0L19.16 9.48a.835.835 0 0 0 0-1.18.835.835 0 0 0-1.18 0l-6.985 6.984a2.49 2.49 0 0 1-3.54 0 2.49 2.49 0 0 1 0-3.54l6.983-6.985a.835.835 0 0 0 0-1.18.84.84 0 0 0-.59-.245"
                  fill="currentColor"
                />
              </svg>
              MCP
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Configure MCP</DialogTitle>
              <DialogDescription className="text-balance">
                Copy and paste the following code into your project&apos;s
                components.json.
              </DialogDescription>
            </DialogHeader>

            <div className="overflow-auto *:data-rehype-pretty-code-figure:my-0">
              <MDX code={componentsJSON} />
            </div>

            <DialogFooter className="sm:justify-between">
              <Button variant="outline" asChild>
                <a
                  href="https://ui.shadcn.com/docs/mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the docs
                </a>
              </Button>

              <DialogClose asChild>
                <Button>Done</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/components/${post.slug}`}
          className="group/post flex items-center border-b border-edge pr-4"
        >
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
            aria-hidden
          >
            <ComponentIcon
              className="pointer-events-none size-4 text-muted-foreground"
              variant={post.metadata.icon}
            />
          </div>

          <div className="border-l border-dashed border-edge p-4">
            <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
              {post.metadata.title}
            </h2>
          </div>

          {post.metadata.new && (
            <span className="flex translate-y-px items-center justify-center">
              <span className="flex size-2 rounded-sm bg-info" />
              <span className="sr-only">New</span>
            </span>
          )}
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}

type ComponentIconProps = React.ComponentProps<"svg"> & {
  variant?: string;
};

function ComponentIcon({ variant, ...props }: ComponentIconProps) {
  switch (variant) {
    case "work-experience":
      return <BriefcaseBusinessIcon {...props} />;

    case "react-wheel-picker":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          {...props}
        >
          <path
            d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm2.34,146.34a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L136,83.31v89.38Z"
            fill="currentColor"
          />
        </svg>
      );

    case "theme-switcher":
      return <MoonStarIcon {...props} />;

    case "apple-hello-effect":
      return <LineSquiggleIcon {...props} />;

    case "shimmering-text":
      return <ZapIcon {...props} />;

    case "slide-to-unlock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          {...props}
        >
          <path
            d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z"
            fill="currentColor"
          />
        </svg>
      );

    case "testimonials-marquee":
      return <GalleryHorizontalEndIcon {...props} />;

    default:
      return <Icons.react {...props} />;
  }
}
