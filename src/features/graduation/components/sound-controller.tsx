"use client";

import { useEffect, useRef } from "react";

import { useSound } from "@/hooks/use-sound";

export function SoundController({
  progress,
  muted,
}: {
  progress: number;
  muted: boolean;
}) {
  const playCheer = useSound("/audio/graduation/cheer.wav");
  const playWhoosh = useSound("/audio/graduation/whoosh.wav");
  const firedCheer = useRef(false);
  const firedWhoosh = useRef(false);

  useEffect(() => {
    if (muted) return;
    if (progress > 0.6 && !firedWhoosh.current) {
      firedWhoosh.current = true;
      playWhoosh();
    }
    if (progress > 0.75 && !firedCheer.current) {
      firedCheer.current = true;
      playCheer();
    }
  }, [progress, muted, playWhoosh, playCheer]);

  return null;
}
