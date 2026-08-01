"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { EntryDoor } from "./entry-door";
import { ReducedMotionFallback } from "./reduced-motion-fallback";
import { ScrollSequence } from "./scroll-sequence";
import { SoundController } from "./sound-controller";

export function InvitationExperience() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const syncClientPreferences = () => {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      const stored = localStorage.getItem("grad-muted");
      if (stored != null) setMuted(stored === "1");
    };
    syncClientPreferences();
  }, []);

  const setMutedPersisted = (v: boolean) => {
    setMuted(v);
    localStorage.setItem("grad-muted", v ? "1" : "0");
  };

  if (!entered) {
    return (
      <EntryDoor
        onEnter={() => {
          setMutedPersisted(false);
          setEntered(true);
        }}
        onSilent={() => {
          setMutedPersisted(true);
          setEntered(true);
        }}
      />
    );
  }

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="icon"
        className="fixed top-16 right-4 z-50"
        onClick={() => setMutedPersisted(!muted)}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeXIcon /> : <Volume2Icon />}
      </Button>

      {reduced ? (
        <ReducedMotionFallback />
      ) : (
        <>
          <ScrollSequence onProgress={setProgress} />
          <SoundController progress={progress} muted={muted} />
        </>
      )}
    </div>
  );
}
