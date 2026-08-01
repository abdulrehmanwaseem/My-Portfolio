"use client";

import { useEffect, useState } from "react";

import { GRADUATION_TARGET_MS } from "@/features/graduation/data/graduation";
import { cn } from "@/lib/utils";

function diffParts(target: number, now: number) {
  const ms = Math.max(0, target - now);
  const totalSeconds = Math.floor(ms / 1000);
  return {
    passed: ms === 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function GraduationCountdown({ className }: { className?: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return (
      <div
        className={cn("font-mono text-sm tabular-nums", className)}
        aria-hidden
      />
    );
  }

  const { passed, days, hours, minutes, seconds } = diffParts(
    GRADUATION_TARGET_MS,
    now
  );

  if (passed) {
    return (
      <div className={cn("font-mono text-sm font-medium", className)}>
        🎓 Graduated! / Đã tốt nghiệp!
      </div>
    );
  }

  return (
    <div className={cn("font-mono text-sm tabular-nums", className)}>
      {days}d {String(hours).padStart(2, "0")}h{" "}
      {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s
    </div>
  );
}
