"use client";

import {
  Loader2Icon,
  PauseIcon,
  PlayIcon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/** Data Saver, or a connection too slow to be worth speculatively buffering. */
function prefersLightData() {
  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  return Boolean(conn?.saveData) || /(^|-)2g$/.test(conn?.effectiveType ?? "");
}

export function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffering, setBuffering] = useState(false);

  /*
    The clip starts at preload="none" so it costs nothing on page load, but
    that makes the first click pay for the connection and the initial buffer —
    a second or two of a dead button. Once the card comes near the viewport
    the user is plausibly going to watch, so start buffering then and the
    click is instant. Bandwidth-conscious visitors keep the lazy behaviour.
  */
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || prefersLightData()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.preload = "auto";
        video.load();
        observer.disconnect();
      },
      { rootMargin: "300px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Two testimonials talking over each other is unusable, so starting one
      // stops any other that is running.
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video) other.pause();
      });

      // HAVE_FUTURE_DATA or better means it can start now; below that the
      // spinner stands in rather than leaving the button looking broken.
      if (video.readyState < 3) setBuffering(true);
      video.play().catch(() => setBuffering(false));
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
    <div
      ref={containerRef}
      className="group relative aspect-9/16 w-full overflow-hidden bg-muted"
    >
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
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
        onCanPlay={() => setBuffering(false)}
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
          playing && !buffering
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        )}
      />

      {/* No centre overlay: at this card size it covers the speaker's face.
          Play/pause lives in the bar below, and clicking the frame works too. */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex items-center gap-2 p-2.5 transition-opacity",
          playing && !buffering
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        )}
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={`${playing ? "Pause" : "Play"} video testimonial from ${label}`}
          className="shrink-0 rounded-full p-1 text-white/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          {buffering ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : playing ? (
            <PauseIcon className="size-4" />
          ) : (
            <PlayIcon className="size-4 fill-current" />
          )}
        </button>

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
