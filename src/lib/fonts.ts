import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import {
  // IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Inter,
  Lora,
  Outfit,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontLora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const fontGeistSans = GeistSans;
export const fontMono = GeistMono;
