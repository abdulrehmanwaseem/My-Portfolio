// app/api/twitter/route.tsx
import DynamicImageResponse from "@/components/DynamicImageResponse";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<DynamicImageResponse />, {
    width: 1200,
    height: 600, // Twitter prefers 1200x600
  });
}
