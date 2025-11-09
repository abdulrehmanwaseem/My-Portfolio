import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://abdulrehman.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Components",
    href: "/components",
  },
];

export const GITHUB_USERNAME = "abdulrehmanwaseem";
export const SOURCE_CODE_GITHUB_REPO = "abdulrehmanwaseem/My-New-Portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/abdulrehmanwaseem/My-New-Portfolio";

export const UTM_PARAMS = {
  utm_source: "abdulrehman-code.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
