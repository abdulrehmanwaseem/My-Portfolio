import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-vi-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/apple-hello-effect"],
    files: [
      {
        path: "examples/apple-hello-effect-vi-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "apple-hello-effect-en-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/apple-hello-effect"],
    files: [
      {
        path: "examples/apple-hello-effect-en-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/theme-switcher"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/wheel-picker"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-form-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/wheel-picker", "form"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "work-experience-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/work-experience"],
    files: [
      {
        path: "examples/work-experience-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "shimmering-text-demo",
    type: "registry:example",
    registryDependencies: ["@ncdai/shimmering-text"],
    files: [
      {
        path: "examples/shimmering-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slide-to-unlock-demo-01",
    type: "registry:example",
    registryDependencies: ["@ncdai/slide-to-unlock", "@ncdai/use-sound"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-01.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slide-to-unlock-demo-02",
    type: "registry:example",
    registryDependencies: ["@ncdai/slide-to-unlock"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-02.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slide-to-unlock-demo-03",
    type: "registry:example",
    registryDependencies: ["@ncdai/slide-to-unlock"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-03.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "testimonials-marquee-demo-01",
    type: "registry:example",
    registryDependencies: ["@ncdai/testimonials-marquee"],
    files: [
      {
        path: "examples/testimonials-marquee-demo-01.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "testimonials-marquee-demo-02",
    type: "registry:example",
    registryDependencies: ["@ncdai/testimonials-marquee"],
    files: [
      {
        path: "examples/testimonials-marquee-demo-02.tsx",
        type: "registry:example",
      },
    ],
  },
];
