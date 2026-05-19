import { cn } from "@/lib/utils";

export function KhoaWordmark({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <>
      <img
        src="/images/brand/ak-logotype.png"
        alt="AK Logotype"
        className={cn("block dark:hidden", className)}
        {...props}
      />
      <img
        src="/images/brand/ak-logotype-dark.png"
        alt="AK Logotype"
        className={cn("hidden dark:block", className)}
        {...props}
      />
    </>
  );
}

export function getWordmarkSVG(_color: string) {
  return `<img src="/images/brand/ak-logotype.png" alt="AK Logotype"/>`;
}
