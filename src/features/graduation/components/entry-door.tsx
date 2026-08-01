"use client";

import { Button } from "@/components/ui/button";

export function EntryDoor({
  onEnter,
  onSilent,
}: {
  onEnter: () => void;
  onSilent: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <div className="font-mono text-sm tracking-widest text-white/60">
        🎓 CLASS OF 2026
      </div>
      <h1 className="text-2xl font-semibold">Thư mời tốt nghiệp</h1>
      <div className="flex gap-3">
        <Button onClick={onEnter}>▶ Mở thiệp mời / Enter</Button>
        <Button variant="secondary" onClick={onSilent}>
          Xem không tiếng / View silently
        </Button>
      </div>
    </div>
  );
}
