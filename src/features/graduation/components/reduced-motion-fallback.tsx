import {
  FRAME_COUNT,
  frameSrc,
} from "@/features/graduation/hooks/use-frame-sequence";

import { SequenceOverlay } from "./sequence-overlay";

export function ReducedMotionFallback() {
  return (
    <div className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-black">
      {}
      <img
        className="h-full w-full object-cover opacity-70"
        src={frameSrc(FRAME_COUNT)}
        alt=""
        aria-hidden
      />
      <SequenceOverlay />
    </div>
  );
}
