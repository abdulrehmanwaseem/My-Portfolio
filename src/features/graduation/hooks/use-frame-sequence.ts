"use client";

import { useCallback, useEffect, useRef } from "react";

export const FRAME_COUNT = 120;

export function frameSrc(i: number): string {
  const n = String(i).padStart(3, "0");
  return `/graduation/frames/frame-${n}.webp`;
}

export function useFrameSequence(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  { onReady }: { onReady?: (loaded: number, total: number) => void } = {}
) {
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawn = useRef(-1);

  const draw = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const img = framesRef.current[index];
      if (!canvas || !img) return;
      if (index === lastDrawn.current) return;
      lastDrawn.current = index;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const { width: cw, height: ch } = canvas;
      const scale = Math.max(cw / img.width, ch / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    },
    [canvasRef]
  );

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    (async () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        if (cancelled) return;
        const img = new Image();
        img.src = frameSrc(i);
        try {
          await img.decode();
        } catch {
          /* frame missing — skip */
        }
        imgs[i] = img;
        loaded++;
        onReady?.(loaded, FRAME_COUNT);
      }
      if (!cancelled) {
        framesRef.current = imgs;
        draw(1);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [draw, onReady]);

  return { draw };
}
