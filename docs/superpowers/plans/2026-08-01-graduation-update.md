# Graduation Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a retirable graduation hero on the homepage and a stunning bilingual `/invitation` page fronted by a scroll-scrubbed cinematic frame sequence themed on the user's major (AI / Information Systems / coding), with a sound layer.

**Architecture:** A new `src/features/graduation/` feature module holds a single source of truth for event data plus all UI. The homepage gets one `<GraduationHero />` panel at the top (delete one line to retire). `/invitation` is a Server Component (SSR'd letter + metadata for shareability) that mounts a client-only entry door; the door gates frame preloading, unlocks audio, and arms a GSAP-ScrollTrigger canvas that scrubs ~120–150 monochrome WebP frames. Real "2026"/mark/caption overlays are SVG/DOM, never baked into frames. Calendar/Maps/Share are static/client-only — no backend.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind v4, `dayjs` (present), `sharp` (present, image optimize), `gsap` + ScrollTrigger (NEW), existing `useSound` Web-Audio hook. Asset creation via `ai-image-generation` / `image-to-video` skills + `ffmpeg` (build-time only).

## Global Constraints

- **Monochrome only** — zinc/black/white system; no amber/gold, no new color tokens.
- **Bilingual VI + EN** — VI primary/bold, EN muted beneath, on hero and invitation.
- **No RSVP, no backend** — Calendar (`.ics` + Google), Maps, Share are static/client-only.
- **No Three.js / WebGL** — scroll-scrubbed 2D canvas image sequence only.
- **Retirable hero** — deleting the single `<GraduationHero />` line fully removes it.
- **LCP protection** — letter text + event details are real SSR'd DOM; canvas/frames/audio load only after the entry-door tap.
- **`prefers-reduced-motion`** — static fallback frame, no pin/scrub, sound off.
- **No test runner exists** in this repo. Validation gates are `pnpm check-types`, `pnpm lint`, `pnpm build`, plus a `pnpm tsx` sanity script for pure logic and manual browser checks. Do NOT add vitest/jest for this feature.
- **Next.js 16 rule:** `dynamic(..., { ssr: false })` is illegal in a Server Component. Any `ssr:false` dynamic import must live inside a `"use client"` module.
- **Event facts (verbatim):** 10:00 (Asia/Ho_Chi_Minh) Thursday 06.08.2026; Trường Đại học Văn Lang (Cơ sở chính) / Van Lang University (Main Campus); 69/68 Đ. Đặng Thuỳ Trâm, An Nhơn, Hồ Chí Minh 70000, Việt Nam.
- **Commit style:** end messages with `Co-Authored-By: Claude <noreply@anthropic.com>`. Conventional-commit prefixes. Husky runs eslint+prettier on staged files.

---

## File Structure

```
src/features/graduation/
  data/graduation.ts                    event constants + derived URLs/ICS payload
  data/graduation.check.ts              tsx sanity script (run then delete in same task)
  components/
    graduation-countdown.tsx            "use client" — live countdown, shared
    graduation-hero.tsx                 homepage hero panel (server), photo + countdown
    invitation-letter.tsx               bilingual letter (server)
    invitation-actions.tsx              "use client" — calendar / maps / share
    entry-door.tsx                      "use client" — welcome, preload gate, audio unlock
    sound-controller.tsx                "use client" — audio manager + mute toggle
    invitation-experience.tsx           "use client" — orchestrates door→sequence, dynamic ssr:false
    scroll-sequence.tsx                 "use client" — pinned canvas + GSAP scrub
    sequence-overlay.tsx                SVG "2026"/caption/mark over canvas
    reduced-motion-fallback.tsx         static frame + letter, no scrub
  hooks/
    use-frame-sequence.ts               "use client" — preload + draw frames to canvas
src/app/(app)/invitation/page.tsx       Server Component: letter, metadata, OG, mounts experience
src/app/(app)/(root)/page.tsx           MODIFY: add <GraduationHero/> at top
src/config/site.ts                      MODIFY: add Invitation to MAIN_NAV
src/components/command-menu.tsx         MODIFY: add Invitation menu link
src/app/sitemap.ts                      MODIFY: add /invitation route
scripts/optimize-graduation-photo.mts   Sharp: 14MB source -> responsive web copies
scripts/extract-frames.sh               documents ffmpeg frame extraction (build-time)
public/images/graduation/               optimized photo output
public/graduation/frames/               frame-000.webp … (build artifact)
public/audio/graduation/                sound assets
```

---

## Task 1: Shared event constants + derived URLs

**Files:**
- Create: `src/features/graduation/data/graduation.ts`
- Create (temporary): `src/features/graduation/data/graduation.check.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `GRADUATION_EVENT` object with fields: `startISO: string` (`"2026-08-06T10:00:00+07:00"`), `endISO: string` (`"2026-08-06T12:00:00+07:00"`), `timeZone: string`, `titleVi: string`, `titleEn: string`, `venueVi: string`, `venueEn: string`, `address: string`.
  - `GRADUATION_TARGET_MS: number` — `dayjs(GRADUATION_EVENT.startISO).valueOf()`.
  - `getMapsUrl(): string`
  - `getGoogleCalendarUrl(): string`
  - `buildIcs(): string`
  - `formatIcsDate(iso: string): string` (UTC basic form `YYYYMMDDTHHMMSSZ`).

- [ ] **Step 1: Write the constants + helpers**

```typescript
// src/features/graduation/data/graduation.ts
import dayjs from "dayjs";

export const GRADUATION_EVENT = {
  startISO: "2026-08-06T10:00:00+07:00",
  endISO: "2026-08-06T12:00:00+07:00",
  timeZone: "Asia/Ho_Chi_Minh",
  titleVi: "Lễ Tốt Nghiệp của Khoa",
  titleEn: "Khoa's Graduation Ceremony",
  venueVi: "Trường Đại học Văn Lang (Cơ sở chính)",
  venueEn: "Van Lang University (Main Campus)",
  address: "69/68 Đ. Đặng Thuỳ Trâm, An Nhơn, Hồ Chí Minh 70000, Việt Nam",
} as const;

export const GRADUATION_TARGET_MS = dayjs(GRADUATION_EVENT.startISO).valueOf();

export function getMapsUrl(): string {
  const q = encodeURIComponent(GRADUATION_EVENT.address);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function formatIcsDate(iso: string): string {
  return dayjs(iso).utc().format("YYYYMMDDTHHmmss") + "Z";
}

export function getGoogleCalendarUrl(): string {
  const dates = `${formatIcsDate(GRADUATION_EVENT.startISO)}/${formatIcsDate(GRADUATION_EVENT.endISO)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: GRADUATION_EVENT.titleEn,
    dates,
    details: GRADUATION_EVENT.titleVi,
    location: GRADUATION_EVENT.address,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcs(): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//nhkhoa.site//graduation//EN",
    "BEGIN:VEVENT",
    `UID:graduation-2026@nhkhoa.site`,
    `DTSTAMP:${formatIcsDate(GRADUATION_EVENT.startISO)}`,
    `DTSTART:${formatIcsDate(GRADUATION_EVENT.startISO)}`,
    `DTEND:${formatIcsDate(GRADUATION_EVENT.endISO)}`,
    `SUMMARY:${GRADUATION_EVENT.titleEn}`,
    `LOCATION:${GRADUATION_EVENT.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
```

- [ ] **Step 2: Enable dayjs UTC plugin usage — verify import**

`formatIcsDate` uses `.utc()`. Add the plugin at top of `graduation.ts` (after the dayjs import):

```typescript
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
```

- [ ] **Step 3: Write the sanity-check script**

```typescript
// src/features/graduation/data/graduation.check.ts
import {
  buildIcs,
  formatIcsDate,
  getGoogleCalendarUrl,
  getMapsUrl,
  GRADUATION_EVENT,
} from "./graduation";

const start = formatIcsDate(GRADUATION_EVENT.startISO);
console.assert(start === "20260806T030000Z", `DTSTART wrong: ${start}`);
console.assert(getMapsUrl().includes("Dang%20Thu"), "maps url not encoded");
console.assert(buildIcs().includes("DTSTART:20260806T030000Z"), "ics missing DTSTART");
console.assert(getGoogleCalendarUrl().includes("20260806T030000Z"), "gcal missing date");
console.log("graduation constants OK");
console.log("MAPS:", getMapsUrl());
console.log("ICS:\n", buildIcs());
```

- [ ] **Step 4: Run the sanity check**

Run: `pnpm tsx --tsconfig ./tsconfig.scripts.json src/features/graduation/data/graduation.check.ts`
Expected: prints `graduation constants OK` with no assertion warnings. (10:00 +07:00 → 03:00 UTC.)

- [ ] **Step 5: Delete the check script + type-check**

Run: `rm src/features/graduation/data/graduation.check.ts && pnpm check-types`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/features/graduation/data/graduation.ts
git commit -m "feat(graduation): add shared event constants and calendar/maps helpers

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 2: Optimize the graduation photo

**Files:**
- Create: `scripts/optimize-graduation-photo.mts`
- Output: `public/images/graduation/me-graduate-{640,960,1200}.webp`

**Interfaces:**
- Consumes: `public/images/me-graduate.png` (14.3 MB, 4096²).
- Produces: three web-sized WebP files; later tasks reference `/images/graduation/me-graduate-1200.webp` as the hero/letter photo.

- [ ] **Step 1: Write the Sharp script**

```typescript
// scripts/optimize-graduation-photo.mts
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/images/me-graduate.png";
const OUT_DIR = "public/images/graduation";
const WIDTHS = [640, 960, 1200];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const w of WIDTHS) {
    const out = path.join(OUT_DIR, `me-graduate-${w}.webp`);
    await sharp(SRC).resize({ width: w }).webp({ quality: 82 }).toFile(out);
    console.log("wrote", out);
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

- [ ] **Step 2: Run it**

Run: `pnpm tsx --tsconfig ./tsconfig.scripts.json scripts/optimize-graduation-photo.mts`
Expected: prints three `wrote …` lines; files exist under `public/images/graduation/`.

- [ ] **Step 3: Verify sizes are sane**

Run: `ls -la public/images/graduation/`
Expected: each WebP is well under 300 KB (down from 14.3 MB).

- [ ] **Step 4: Commit**

```bash
git add scripts/optimize-graduation-photo.mts public/images/graduation/
git commit -m "feat(graduation): add photo optimizer and web-sized graduation images

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 3: Shared countdown component

**Files:**
- Create: `src/features/graduation/components/graduation-countdown.tsx`

**Interfaces:**
- Consumes: `GRADUATION_TARGET_MS` from Task 1.
- Produces: `<GraduationCountdown className?: string />` — a `"use client"` component that renders a live countdown and, once the target passes, the text `Graduated! / Đã tốt nghiệp!`. Hydration-safe (renders a stable placeholder until mounted).

- [ ] **Step 1: Implement the component**

```tsx
// src/features/graduation/components/graduation-countdown.tsx
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
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(GRADUATION_TARGET_MS);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return <div className={cn("font-mono text-sm tabular-nums", className)} aria-hidden />;
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
```

- [ ] **Step 2: Type-check**

Run: `pnpm check-types`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/graduation/components/graduation-countdown.tsx
git commit -m "feat(graduation): add shared live countdown component

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 4: Homepage graduation hero

**Files:**
- Create: `src/features/graduation/components/graduation-hero.tsx`
- Modify: `src/app/(app)/(root)/page.tsx` (add one line at top of the stack)

**Interfaces:**
- Consumes: `Panel` from `@/features/profile/components/panel`; `GraduationCountdown` (Task 3); `GRADUATION_EVENT` (Task 1); optimized photo (Task 2); `next/image`, `next/link`.
- Produces: `<GraduationHero />` (server component), rendered above `<ProfileCover />`.

- [ ] **Step 1: Implement the hero panel**

```tsx
// src/features/graduation/components/graduation-hero.tsx
import Image from "next/image";
import Link from "next/link";

import { GraduationCountdown } from "@/features/graduation/components/graduation-countdown";
import { GRADUATION_EVENT } from "@/features/graduation/data/graduation";
import { Panel, PanelHeader, PanelTitle } from "@/features/profile/components/panel";

export function GraduationHero() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle className="font-mono text-sm tracking-wider">
          🎓 CLASS OF 2026
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-after flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        <Image
          className="h-40 w-40 shrink-0 rounded-lg object-cover ring-1 ring-border"
          src="/images/graduation/me-graduate-640.webp"
          alt="Truong Nguyen Anh Khoa graduation portrait"
          width={640}
          height={640}
          sizes="160px"
          priority
        />

        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">Tôi sắp tốt nghiệp!</p>
          <p className="text-sm text-muted-foreground">I&apos;m graduating!</p>

          <GraduationCountdown className="mt-2" />

          <p className="mt-2 text-sm">
            10:00 · Thứ Năm, 06.08.2026
            <br />
            <span className="text-muted-foreground">{GRADUATION_EVENT.venueVi}</span>
          </p>

          <Link
            className="mt-3 inline-flex w-fit items-center gap-1 border border-edge px-3 py-1.5 font-mono text-sm hover:bg-accent"
            href="/invitation"
          >
            Xem thư mời / See invitation →
          </Link>
        </div>
      </div>
    </Panel>
  );
}
```

- [ ] **Step 2: Mount it at the top of the homepage**

In `src/app/(app)/(root)/page.tsx`, add the import with the other feature imports:

```tsx
import { GraduationHero } from "@/features/graduation/components/graduation-hero";
```

Then inside the `md:max-w-3xl` wrapper, as the FIRST child (above `<ProfileCover />`):

```tsx
        <GraduationHero />
        <Separator />

        <ProfileCover />
```

- [ ] **Step 3: Type-check + lint**

Run: `pnpm check-types && pnpm lint`
Expected: no errors.

- [ ] **Step 4: Manual check**

Run: `pnpm dev` and open `http://localhost:1408/`. Verify the hero renders at the very top, photo loads, countdown ticks, and the link points to `/invitation`. (Retire test: deleting the `<GraduationHero /><Separator />` lines cleanly removes it.)

- [ ] **Step 5: Commit**

```bash
git add src/features/graduation/components/graduation-hero.tsx "src/app/(app)/(root)/page.tsx"
git commit -m "feat(graduation): add retirable homepage graduation hero

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 5: Wire navigation entries

**Files:**
- Modify: `src/config/site.ts` (add to `MAIN_NAV`)
- Modify: `src/components/command-menu.tsx` (add to `MENU_LINKS`)
- Modify: `src/app/sitemap.ts` (add `/invitation`)

**Interfaces:**
- Consumes: existing `MAIN_NAV: NavItem[]`, `MENU_LINKS` array, sitemap `routes`.
- Produces: an "Invitation" nav item at `/invitation` in header nav, command menu, and sitemap.

- [ ] **Step 1: Add to `MAIN_NAV`**

In `src/config/site.ts`, inside `MAIN_NAV`, after the Blog entry:

```typescript
  {
    title: "Invitation",
    href: "/invitation",
  },
```

- [ ] **Step 2: Add to command menu `MENU_LINKS`**

In `src/components/command-menu.tsx`, the `MENU_LINKS` array currently ends after the Blog entry. Add (reuse an existing imported icon — `RssIcon` is already imported; use `LetterTextIcon`, also already imported, which better suits an invitation):

```tsx
  {
    title: "Invitation",
    href: "/invitation",
    icon: LetterTextIcon,
  },
```

- [ ] **Step 3: Add to sitemap**

In `src/app/sitemap.ts`, change the routes array to include `/invitation`:

```typescript
  const routes = ["", "/blog", "/invitation", "/internal-project"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));
```

- [ ] **Step 4: Type-check + lint**

Run: `pnpm check-types && pnpm lint`
Expected: no errors. (Confirm `LetterTextIcon` is in the import list in `command-menu.tsx`; it is used by `PORTFOLIO_LINKS`.)

- [ ] **Step 5: Commit**

```bash
git add src/config/site.ts src/components/command-menu.tsx src/app/sitemap.ts
git commit -m "feat(graduation): add Invitation to nav, command menu, sitemap

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 6: Invitation actions (calendar / maps / share)

**Files:**
- Create: `src/features/graduation/components/invitation-actions.tsx`

**Interfaces:**
- Consumes: `buildIcs`, `getGoogleCalendarUrl`, `getMapsUrl`, `GRADUATION_EVENT` (Task 1); `sonner` `toast` (present); `Button` from `@/components/ui/button`.
- Produces: `<InvitationActions />` — three buttons: Add-to-Calendar (downloads `.ics` blob + opens Google Calendar), Maps (opens `getMapsUrl()`), Share (Web Share API with copy-link fallback).

- [ ] **Step 1: Implement the component**

```tsx
// src/features/graduation/components/invitation-actions.tsx
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
```

- [ ] **Step 2: Type-check + lint**

Run: `pnpm check-types && pnpm lint`
Expected: no errors. (All three Lucide icons exist in `lucide-react`.)

- [ ] **Step 3: Commit**

```bash
git add src/features/graduation/components/invitation-actions.tsx
git commit -m "feat(graduation): add calendar/maps/share invitation actions

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 7: Bilingual letter + invitation page (must-ship core)

**Files:**
- Create: `src/features/graduation/components/invitation-letter.tsx`
- Create: `src/app/(app)/invitation/page.tsx`

**Interfaces:**
- Consumes: `GRADUATION_EVENT` (Task 1), `InvitationActions` (Task 6), optimized photo (Task 2), `SITE_INFO` from `@/config/site`, `next` `Metadata`.
- Produces: `<InvitationLetter />` (server) and the `/invitation` route. This is the SSR'd, shareable core — no client dependency to render text.

- [ ] **Step 1: Implement the letter (server component)**

```tsx
// src/features/graduation/components/invitation-letter.tsx
import Image from "next/image";

import { GRADUATION_EVENT } from "@/features/graduation/data/graduation";
import { InvitationActions } from "./invitation-actions";

export function InvitationLetter() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-16 text-center">
      <Image
        className="h-48 w-48 rounded-full object-cover ring-1 ring-border"
        src="/images/graduation/me-graduate-640.webp"
        alt="Truong Nguyen Anh Khoa graduation portrait"
        width={640}
        height={640}
        sizes="192px"
      />

      <h1 className="text-3xl font-semibold">
        Thư Mời Tốt Nghiệp
        <span className="block text-base font-normal text-muted-foreground">
          Graduation Invitation
        </span>
      </h1>

      <div className="flex flex-col gap-4 text-pretty">
        <p className="font-medium">
          Hi, mình là Khoa! Ngày 06 tháng 08 sắp tới đây là ngày tốt nghiệp của mình.
          <span className="block text-sm font-normal text-muted-foreground">
            Hi, I&apos;m Khoa! This coming August 6th is my graduation day.
          </span>
        </p>
        <p className="font-medium">
          Mình trân trọng mời các bạn đến chung vui cùng mình trong ngày kỉ niệm này.
          <span className="block text-sm font-normal text-muted-foreground">
            I&apos;d be honored to have you join me and share in this special milestone.
          </span>
        </p>
        <p className="font-medium">
          Cám ơn các bạn, sự hiện diện của các bạn sẽ là niềm vui rất lớn đối với mình.
          <span className="block text-sm font-normal text-muted-foreground">
            Thank you — your presence would mean the world to me.
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-1 border-y border-edge py-4 font-mono text-sm">
        <p>📅 10:00, Thứ Năm, 06.08.2026 / Thursday, 6 Aug 2026</p>
        <p>📍 {GRADUATION_EVENT.venueVi}</p>
        <p className="text-muted-foreground">{GRADUATION_EVENT.address}</p>
      </div>

      <InvitationActions />
    </section>
  );
}
```

- [ ] **Step 2: Implement the page with metadata**

```tsx
// src/app/(app)/invitation/page.tsx
import type { Metadata } from "next";

import { SITE_INFO } from "@/config/site";
import { InvitationLetter } from "@/features/graduation/components/invitation-letter";

export const metadata: Metadata = {
  title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
  description:
    "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
  alternates: { canonical: `${SITE_INFO.url}/invitation` },
  openGraph: {
    title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
    description:
      "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
    url: `${SITE_INFO.url}/invitation`,
  },
};

export default function InvitationPage() {
  return <InvitationLetter />;
}
```

- [ ] **Step 3: Type-check + lint + build**

Run: `pnpm check-types && pnpm lint && pnpm build`
Expected: build succeeds; `/invitation` appears in the route list as static.

- [ ] **Step 4: Manual check**

Run: `pnpm dev`, open `http://localhost:1408/invitation`. Verify letter renders (both languages), event block shows, and all three action buttons work: `.ics` downloads, Google Calendar opens, Maps opens the address, Share copies the link (desktop) or opens the share sheet (mobile).

- [ ] **Step 5: Commit**

```bash
git add src/features/graduation/components/invitation-letter.tsx "src/app/(app)/invitation/page.tsx"
git commit -m "feat(graduation): add bilingual invitation letter and page

Co-Authored-By: Claude <noreply@anthropic.com>"
```

> **Checkpoint:** After Task 7 the invitation is fully shippable (hero + letter + actions). Tasks 8–12 add the cinematic enhancement on top; if the timeline slips, the page already works.

---

## Task 8: Install GSAP

**Files:**
- Modify: `package.json` (add `gsap`)

**Interfaces:**
- Produces: `gsap` and `gsap/ScrollTrigger` importable in client modules.

- [ ] **Step 1: Install**

Run: `CI=true pnpm add --ignore-workspace gsap`
Expected: `gsap` added to dependencies. (The `--ignore-workspace` + `CI=true` flags are required in this environment — a home-directory `pnpm-workspace.yaml` otherwise hijacks installs; see repo prep notes.)

- [ ] **Step 2: Verify + type-check**

Run: `node -e "require.resolve('gsap')" && pnpm check-types`
Expected: resolves; no type errors.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore(graduation): add gsap for scroll-scrub sequence

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 9: Frame-sequence hook + placeholder frames

**Files:**
- Create: `src/features/graduation/hooks/use-frame-sequence.ts`
- Create: `scripts/extract-frames.sh` (documentation of the ffmpeg step)
- Create (placeholder): `public/graduation/frames/frame-000.webp` … a handful, so the code path is testable before real assets exist.

**Interfaces:**
- Consumes: nothing (browser APIs).
- Produces:
  - `FRAME_COUNT: number` and `frameSrc(i: number): string` exported from the hook module.
  - `useFrameSequence(canvasRef, { onReady }): { progressRef, draw(index:number) }` — preloads all frames (decoding via `img.decode()`), reports load progress via `onReady`, and draws a given frame index to the canvas (cover-fit).

- [ ] **Step 1: Document the ffmpeg extraction step**

```bash
# scripts/extract-frames.sh — build-time only, run manually after producing clip.mp4
# Produces ~120 monochrome frames downscaled to 1280px wide.
set -euo pipefail
SRC="${1:-clip.mp4}"
OUT="public/graduation/frames"
mkdir -p "$OUT"
ffmpeg -i "$SRC" -vf "fps=24,scale=1280:-1:flags=lanczos,format=gray" "$OUT/frame-%03d.webp"
echo "frames written to $OUT"
```

- [ ] **Step 2: Implement the hook**

```typescript
// src/features/graduation/hooks/use-frame-sequence.ts
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
```

- [ ] **Step 3: Create a few placeholder frames**

Until real assets land (Task 12), generate simple gray placeholders so the path renders. Run:

```bash
pnpm tsx --tsconfig ./tsconfig.scripts.json -e "import sharp from 'sharp'; import { mkdirSync } from 'node:fs'; mkdirSync('public/graduation/frames',{recursive:true}); (async()=>{for(let i=1;i<=120;i++){const g=Math.round(20+(i/120)*200); await sharp({create:{width:1280,height:720,channels:3,background:{r:g,g:g,b:g}}}).webp().toFile('public/graduation/frames/frame-'+String(i).padStart(3,'0')+'.webp');}console.log('placeholders written');})()"
```

Expected: `placeholders written`; 120 files exist. (These get overwritten by real frames in Task 12.)

- [ ] **Step 4: Type-check**

Run: `pnpm check-types`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/graduation/hooks/use-frame-sequence.ts scripts/extract-frames.sh public/graduation/frames/
git commit -m "feat(graduation): add frame-sequence preloader hook and placeholder frames

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 10: Scroll sequence + overlay + reduced-motion fallback

**Files:**
- Create: `src/features/graduation/components/scroll-sequence.tsx`
- Create: `src/features/graduation/components/sequence-overlay.tsx`
- Create: `src/features/graduation/components/reduced-motion-fallback.tsx`

**Interfaces:**
- Consumes: `useFrameSequence`, `FRAME_COUNT` (Task 9); `gsap` + `ScrollTrigger` (Task 8).
- Produces:
  - `<SequenceOverlay />` — absolutely-positioned SVG "2026" + KhoaMark + captions.
  - `<ReducedMotionFallback />` — a single static frame image + no scroll behavior.
  - `<ScrollSequence onProgress?: (p:number)=>void />` — a pinned, full-height section with a canvas scrubbed by ScrollTrigger; calls `onProgress` with 0..1 for the sound layer.

- [ ] **Step 1: Implement the overlay**

```tsx
// src/features/graduation/components/sequence-overlay.tsx
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
```

- [ ] **Step 2: Implement the reduced-motion fallback**

```tsx
// src/features/graduation/components/reduced-motion-fallback.tsx
import {
  FRAME_COUNT,
  frameSrc,
} from "@/features/graduation/hooks/use-frame-sequence";
import { SequenceOverlay } from "./sequence-overlay";

export function ReducedMotionFallback() {
  return (
    <div className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
```

- [ ] **Step 3: Implement the scroll sequence**

```tsx
// src/features/graduation/components/scroll-sequence.tsx
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import {
  FRAME_COUNT,
  useFrameSequence,
} from "@/features/graduation/hooks/use-frame-sequence";
import { SequenceOverlay } from "./sequence-overlay";

gsap.registerPlugin(ScrollTrigger);

export function ScrollSequence({
  onProgress,
}: {
  onProgress?: (p: number) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { draw } = useFrameSequence(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const state = { frame: 0 };
    const st = gsap.to(state, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          draw(Math.round(state.frame) + 1);
          onProgress?.(self.progress);
        },
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [draw, onProgress]);

  return (
    <div ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <SequenceOverlay />
    </div>
  );
}
```

- [ ] **Step 4: Type-check + lint**

Run: `pnpm check-types && pnpm lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/graduation/components/scroll-sequence.tsx src/features/graduation/components/sequence-overlay.tsx src/features/graduation/components/reduced-motion-fallback.tsx
git commit -m "feat(graduation): add scroll-scrubbed sequence, overlay, reduced-motion fallback

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 11: Entry door + sound controller + experience wiring

**Files:**
- Create: `src/features/graduation/components/sound-controller.tsx`
- Create: `src/features/graduation/components/entry-door.tsx`
- Create: `src/features/graduation/components/invitation-experience.tsx`
- Modify: `src/app/(app)/invitation/page.tsx` (mount the experience above the letter)
- Add: `public/audio/graduation/` sound files (placeholder-safe: hook tolerates missing files)

**Interfaces:**
- Consumes: `ScrollSequence`, `ReducedMotionFallback` (Task 10); existing `useSound` (`src/hooks/use-sound.ts`, signature `useSound(url): () => void`); `InvitationLetter` (Task 7).
- Produces:
  - `<SoundController progress muted />` — plays beat sounds based on scroll progress; respects `muted`.
  - `<EntryDoor onEnter onSilent />` — welcome screen; "Enter" unlocks audio + starts, "View silently" starts muted.
  - `<InvitationExperience />` — client orchestration: shows door, then (respecting `prefers-reduced-motion`) mounts either `ScrollSequence` or `ReducedMotionFallback`, with a persistent mute toggle.

- [ ] **Step 1: Implement the sound controller**

```tsx
// src/features/graduation/components/sound-controller.tsx
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
```

- [ ] **Step 2: Implement the entry door**

```tsx
// src/features/graduation/components/entry-door.tsx
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
      <div className="font-mono text-sm tracking-widest text-white/60">🎓 CLASS OF 2026</div>
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
```

- [ ] **Step 3: Implement the experience orchestrator**

```tsx
// src/features/graduation/components/invitation-experience.tsx
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
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const stored = localStorage.getItem("grad-muted");
    if (stored != null) setMuted(stored === "1");
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
        className="fixed right-4 top-16 z-50"
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
```

- [ ] **Step 4: Mount the experience on the page above the letter**

The page stays a Server Component. Because `InvitationExperience` is a `"use client"` module, it can be imported directly (no `ssr:false` needed — it has no server-illegal top-level calls; GSAP is imported inside the client boundary). Update `src/app/(app)/invitation/page.tsx`:

```tsx
import type { Metadata } from "next";

import { SITE_INFO } from "@/config/site";
import { InvitationExperience } from "@/features/graduation/components/invitation-experience";
import { InvitationLetter } from "@/features/graduation/components/invitation-letter";

export const metadata: Metadata = {
  title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
  description:
    "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
  alternates: { canonical: `${SITE_INFO.url}/invitation` },
  openGraph: {
    title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
    description:
      "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
    url: `${SITE_INFO.url}/invitation`,
  },
};

export default function InvitationPage() {
  return (
    <>
      <InvitationExperience />
      <InvitationLetter />
    </>
  );
}
```

- [ ] **Step 5: Type-check + lint + build**

Run: `pnpm check-types && pnpm lint && pnpm build`
Expected: build succeeds. If build errors on `ssr:false` or a browser API during SSR, wrap `InvitationExperience` usage in a `"use client"` parent or a `dynamic(() => import(...), { ssr: false })` inside a client module (NOT in this server page).

- [ ] **Step 6: Manual check**

Run: `pnpm dev`, open `/invitation`. Verify: entry door shows; "Enter" starts the scrubbed sequence with sound, "View silently" starts muted; scrolling scrubs frames both directions; "2026"/mark overlay is crisp; mute toggle persists across reload; with OS reduced-motion on, the static fallback shows and no sound plays; the letter reads below.

- [ ] **Step 7: Commit**

```bash
git add src/features/graduation/components/sound-controller.tsx src/features/graduation/components/entry-door.tsx src/features/graduation/components/invitation-experience.tsx "src/app/(app)/invitation/page.tsx" public/audio/graduation/
git commit -m "feat(graduation): add entry door, sound layer, and experience orchestration

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 12: Generate real assets (frames + sound)

**Files:**
- Overwrite: `public/graduation/frames/frame-*.webp` (real monochrome sequence)
- Add: `public/audio/graduation/{whoosh,cheer}.wav` (CC0 or designed)

**Interfaces:**
- Consumes: `ai-image-generation` / `image-to-video` skills; `ffmpeg`; `scripts/extract-frames.sh` (Task 9).
- Produces: the real cinematic frames + sound, replacing placeholders. No code changes.

- [ ] **Step 1: Generate monochrome key scenes**

Use the `ai-image-generation` skill to produce 3–5 high-contrast grayscale key scenes, on-brand with the dot-grid aesthetic:
1. Dots resolving into a neural network / knowledge graph.
2. Network dissolving into falling code / data rain.
3. Code coalescing into a graduation cap.
4. Cap toss → paper confetti burst.
Keep them strictly black/white/gray. Save sources under a scratch dir (not committed).

- [ ] **Step 2: Interpolate to a ~5–6s clip**

Use `image-to-video` (or ffmpeg crossfades) to move between key scenes into one continuous monochrome clip `clip.mp4`. Keep motion smooth and linear (it will be scrubbed).

- [ ] **Step 3: Extract frames**

Run: `bash scripts/extract-frames.sh clip.mp4`
Expected: `public/graduation/frames/frame-001.webp` … ~120 files, grayscale, 1280px wide. Confirm `FRAME_COUNT` (120) matches the count produced; if different, update `FRAME_COUNT` in `use-frame-sequence.ts` and re-run type-check.

- [ ] **Step 4: Source sound**

Obtain a CC0 `whoosh` and a CC0 `cheer`/applause clip (or designed tones); convert to compact `.wav`, place at `public/audio/graduation/whoosh.wav` and `.../cheer.wav`. Present sources to the user for approval before committing.

- [ ] **Step 5: Optimize frame weight**

Run: `ls -la public/graduation/frames | head` and confirm total sequence is reasonable (target each frame ≲ 30 KB). If heavy, lower `-vf scale` width or webp quality in `extract-frames.sh` and re-extract.

- [ ] **Step 6: Build + manual check**

Run: `pnpm build` then `pnpm dev` and scrub `/invitation`. Verify the narrative reads (network → code → cap → confetti) with the crisp SVG "2026" resolving at the end, and sound fires on the cap/cheer beats.

- [ ] **Step 7: Commit**

```bash
git add public/graduation/frames/ public/audio/graduation/
git commit -m "feat(graduation): add real monochrome frame sequence and sound assets

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Final validation

- [ ] `pnpm check-types` — clean
- [ ] `pnpm lint` — clean
- [ ] `pnpm build` — succeeds; `/invitation` present; homepage builds
- [ ] Manual homepage: hero at top, countdown ticks, link works, retire-by-one-line confirmed
- [ ] Manual `/invitation`: door → sequence (sound) / silent; scrub both ways; overlay crisp; mute persists; reduced-motion fallback; letter + calendar/maps/share all work
- [ ] Lighthouse quick pass: letter/text visible before sequence boots (LCP not blocked by frames)
