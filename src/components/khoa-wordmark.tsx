"use client";

import { useTheme } from "next-themes";

export function KhoaWordmark(props: React.ComponentProps<"img">) {
  const { resolvedTheme } = useTheme();
  const src =
    resolvedTheme === "dark"
      ? "/images/brand/ak-logotype-dark.png"
      : "/images/brand/ak-logotype.png";

  return <img src={src} alt="AK Logotype" {...props} />;
}

export function getWordmarkSVG(_color: string) {
  return `<img src="/images/brand/ak-logotype.png" alt="AK Logotype"/>`;
}
