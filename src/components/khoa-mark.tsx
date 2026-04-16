"use client";

import { useTheme } from "next-themes";

type ImgProps = Omit<
  React.HTMLAttributes<HTMLElement> & {
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    loading?: "eager" | "lazy";
    className?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLImageElement>;
  },
  never
>;

export function KhoaMark(props: ImgProps) {
  const { resolvedTheme } = useTheme();
  const src =
    resolvedTheme === "dark"
      ? "/images/brand/ak-mark-dark.png"
      : "/images/brand/ak-mark.png";

  return <img src={src} alt="AK Mark" width={540} height={540} {...props} />;
}

export function getMarkSVG(_color: string) {
  return `<img src="/images/brand/ak-mark.png" alt="AK Mark" width="540" height="540"/>`;
}
