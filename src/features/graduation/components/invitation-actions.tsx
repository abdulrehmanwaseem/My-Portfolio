"use client";

import { CalendarPlusIcon, MapPinIcon, Share2Icon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  buildIcs,
  getGoogleCalendarUrl,
  getMapsUrl,
} from "@/features/graduation/data/graduation";

function downloadIcs() {
  const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "khoa-graduation-2026.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  window.open(getGoogleCalendarUrl(), "_blank", "noopener");
}

async function share() {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const data = {
    title: "Khoa's Graduation / Lễ tốt nghiệp của Khoa",
    text: "Mình mời bạn đến lễ tốt nghiệp! / You're invited to my graduation!",
    url,
  };
  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch {
      /* user cancelled — no-op */
    }
    return;
  }
  await navigator.clipboard.writeText(url);
  toast.success("Link copied / Đã sao chép liên kết");
}

export function InvitationActions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" onClick={downloadIcs}>
        <CalendarPlusIcon />
        Add to Calendar
      </Button>
      <Button variant="secondary" asChild>
        <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer">
          <MapPinIcon />
          Maps
        </a>
      </Button>
      <Button variant="secondary" onClick={share}>
        <Share2Icon />
        Share
      </Button>
    </div>
  );
}
