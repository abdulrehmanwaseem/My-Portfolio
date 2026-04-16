import type { Metadata } from "next";

import {
  ShopFlowCTA,
  ShopFlowDemo,
  ShopFlowFeatures,
  ShopFlowHero,
  ShopFlowTechStack,
} from "@/features/products/shopflow/components";

export const metadata: Metadata = {
  title: "ShopFlow - Complete Shop Management System",
  description:
    "A comprehensive PERN stack shop management system with real-time dashboards, inventory tracking, invoice management and financial analytics.",
  openGraph: {
    title: "ShopFlow - Complete Shop Management System",
    description:
      "A comprehensive PERN stack shop management system with real-time dashboards, inventory tracking, invoice management, and financial analytics.",
    type: "website",
  },
};

export default function ShopFlowPage() {
  return (
    <div className="flex flex-col">
      <ShopFlowHero />
      <ShopFlowDemo />
      <ShopFlowFeatures />
      <ShopFlowTechStack />
      <ShopFlowCTA />
    </div>
  );
}
