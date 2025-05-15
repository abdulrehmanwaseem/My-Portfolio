"use client"; // This marks it as a Client Component

import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const AnimatedCursorComponent = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function AnimatedCursor() {
  return (
    <AnimatedCursorComponent
      innerSize={8}
      outerSize={35}
      color="252, 163, 17"
      outerAlpha={0.3} // Transparent background
      innerScale={0.7}
      outerScale={1.3} // Reduced expansion on hover
      trailingSpeed={8}
      outerStyle={{
        border: "2px solid rgb(252, 163, 17)", // Added border
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
