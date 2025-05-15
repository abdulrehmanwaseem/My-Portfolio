"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const AnimatedCursorComponent = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function AnimatedCursor() {
  // Start with null to avoid hydration mismatches
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);

    // Initial check
    checkIfMobile();

    // Setup listener for screen size changes
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Don't render anything on mobile or during SSR/hydration
  if (isMobile === null || isMobile === true) return null;

  return (
    <AnimatedCursorComponent
      innerSize={8}
      outerSize={35}
      color="252, 163, 17"
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={1.3}
      trailingSpeed={8}
      outerStyle={{
        border: "2px solid rgb(252, 163, 17)",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
