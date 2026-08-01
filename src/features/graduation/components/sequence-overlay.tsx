import { KhoaMark } from "@/components/khoa-mark";

export function SequenceOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 mix-blend-difference">
      <span className="font-mono text-6xl font-bold tracking-widest text-white sm:text-8xl">
        2026
      </span>
      <KhoaMark className="h-10 w-auto text-white" />
    </div>
  );
}
