import { cn } from "@/lib/utils";

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

export function KhoaMark({ className, ...props }: ImgProps) {
  return (
    <>
      <img
        src="/images/brand/ak-mark.png"
        alt="AK Mark"
        width={540}
        height={540}
        className={cn("block dark:hidden", className)}
        {...props}
      />
      <img
        src="/images/brand/ak-mark-dark.png"
        alt="AK Mark"
        width={540}
        height={540}
        className={cn("hidden dark:block", className)}
        {...props}
      />
    </>
  );
}

export function getMarkSVG(_color: string) {
  return `<img src="/images/brand/ak-mark.png" alt="AK Mark" width="540" height="540"/>`;
}
