"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import {
  FRAME_COUNT,
  useFrameSequence,
} from "@/features/graduation/hooks/use-frame-sequence";

import { SequenceOverlay } from "./sequence-overlay";

gsap.registerPlugin(ScrollTrigger);

export function ScrollSequence({
  onProgress,
}: {
  onProgress?: (p: number) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { draw } = useFrameSequence(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const state = { frame: 0 };
    const st = gsap.to(state, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          draw(Math.round(state.frame) + 1);
          onProgress?.(self.progress);
        },
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [draw, onProgress]);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <SequenceOverlay />
    </div>
  );
}
