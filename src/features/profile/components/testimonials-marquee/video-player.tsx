"use client";

import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Two testimonials talking over each other is unusable, so starting one
      // stops any other that is running.
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video) other.pause();
      });
      video.play();
    } else {
      video.pause();
    }
  }, []);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video?.duration) return;

    const { left, width } = e.currentTarget.getBoundingClientRect();
    video.currentTime = ((e.clientX - left) / width) * video.duration;
  }, []);

  return (
    <div className="group relative aspect-9/16 w-full overflow-hidden bg-muted">
      <video
        ref={videoRef}
        className="size-full object-cover"
        playsInline
        preload="none"
        poster={poster}
        muted={muted}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setProgress(0)}
        onTimeUpdate={(e) => {
          const { currentTime, duration } = e.currentTarget;
          setProgress(duration ? (currentTime / duration) * 100 : 0);
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrim behind the controls so they stay legible over a bright frame. */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      />

      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} video testimonial from ${label}`}
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity",
          "focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
          {playing ? (
            <PauseIcon className="size-5" />
          ) : (
            <PlayIcon className="size-5 translate-x-px fill-current" />
          )}
        </span>
      </button>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex items-center gap-2 p-2.5 transition-opacity",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      >
        {/* Thin bar rather than a range input: at ~12s the useful gesture is a
            rough scrub, and a native slider cannot be styled down this far. */}
        <div
          className="group/bar flex h-4 grow cursor-pointer items-center"
          onClick={seek}
        >
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-white transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute" : "Mute"}
          className="shrink-0 rounded-full p-1 text-white/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          {muted ? (
            <VolumeXIcon className="size-4" />
          ) : (
            <Volume2Icon className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}
