import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 514 258"
      >
        <path
          d="
            M48 0h96v64H48V0Z
            M0 64h64v64H0V64Z
            M128 64h64v64h-64V64Z
            M0 128h192v64H0v-64Z
            M0 192h64v64H0v-64Z
            M128 192h64v64h-64v-64Z
            M256 0h64v256h-64V0Z
            M320 0h128v64H320V0Z
            M448 64h64v64h-64V64Z
            M320 128h128v64H320v-64Z
            M448 192h64v64h-64v-64Z
          "
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        ></path>
      </svg>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
