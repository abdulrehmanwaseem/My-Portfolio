# Graduation Update — Design Spec

**Date:** 2026-08-01
**Author:** Truong Nguyen Anh Khoa (with Claude)
**Status:** Draft for review (v2 — frame-by-frame pivot)

## Context

The portfolio at https://nhkhoa.site needs a time-bound graduation moment. The
official Van Lang University ceremony is **10:00 AM, Thursday 6 August 2026** —
five days out from this spec. Two user-facing deliverables:

1. A **graduation hero** at the top of the homepage (retirable after the event).
2. A **stunning `/invitation` page** — a warm, personal, bilingual invitation
   letter fronted by a cinematic **scroll-scrubbed frame sequence** (Apple
   AirPods technique) themed around the user's major (AI / Information Systems /
   coding), with a sound layer.

Repo prep (AGENTS merge, graphify→codegraph, ShopFlow removal) is already
committed (`403d4c0`). This spec covers only the graduation work.

## Pivot note (v1 → v2)

v1 speced a Three.js point-cloud portrait (react-three-fiber). User chose to
**replace the hero with a frame-by-frame scroll animation** themed around the
major, accepting the tradeoff of losing the portrait-from-dots moment. **Three.js
is dropped entirely.** The personal photo moves to the homepage hero and the
letter, so it stays on the site.

## Scope

**In scope (this round):**

- Homepage `GraduationHero` panel (monochrome), featuring the graduation photo.
- `/invitation` page: entry door → scroll-scrubbed cinematic frame sequence
  (AI / IS / coding theme) → bilingual letter → event details → actions.
- Asset-generation pipeline for the frame sequence (see below).
- Sound layer; shared event constants; nav entry; optimized graduation photo.

**Deferred (user will do later):**

- Profile/job data edits (`user.ts`, `experiences.ts`) stay untouched. User
  chose "graduation first, job later."

**Explicitly excluded:**

- No RSVP / backend (5-day timeline; nowhere to store responses).
- No color changes — strictly monochrome, matching the zinc/black-white system.
- No Three.js / WebGL runtime engine.

## Design decisions (locked with user)

| Decision             | Choice                                                                        |
| -------------------- | ----------------------------------------------------------------------------- |
| Restyle scope        | Graduation hero at top; portfolio below unchanged; retirable                  |
| Invitation tone      | Warm, personal (not formal card, not party-loud)                              |
| Language             | Bilingual VI + EN (both hero and invitation)                                  |
| Interactive features | Add-to-Calendar, Maps, Share. **No RSVP.**                                    |
| Color                | Monochrome only (no amber/gold)                                               |
| Hero concept         | **Frame-by-frame scroll-scrub** cinematic sequence (no Three.js)              |
| Theme                | AI / Information Systems / coding: neural net → code rain → cap → "2026"       |
| Video production     | **AI-generated static scenes + real text overlay** (avoids AI-video weakness) |
| Cap toss             | Baked into the scrubbed footage (not a runtime physics button)                |
| Sound                | Entry-door unlock; designed tones + CC0 cheer/applause                        |
| Photo                | Moves to homepage hero + letter (not in the hero animation)                   |

## The `/invitation` experience

### Narrative beats

```
Beat 0  DOOR      Welcome screen: [Enter / Mở thiệp mời] + [View silently].
                  The tap unlocks audio AND arms the scroll sequence.
Beat 1  ARRIVE    First frame holds: monochrome dot/grid field (site motif).
Beat 2  NETWORK   Scroll: dots grow into a neural network / knowledge graph
                  (the user's major — AI / Information Systems).
Beat 3  CODE      Scroll: network dissolves into falling code / data rain.
Beat 4  CAP       Scroll: code coalesces into a graduation cap; cap tosses,
                  bursts into monochrome paper confetti (baked in footage).
Beat 5  RESOLVE   Confetti settles; real SVG "2026" + KhoaMark resolve on top.
Beat 6  READ      Sequence unpins; warm bilingual letter + event details +
                  actions scroll up as normal DOM.
```

### Rendering technique — scroll-scrubbed image sequence

Apple-AirPods pattern (well-trodden, no WebGL):

- **~120–150 pre-rendered monochrome frames** as optimized WebP, drawn to a
  single `<canvas>` sized to the viewport.
- The sequence section is **pinned**; scroll progress maps to frame index
  (`frameIndex = round(progress * (frameCount-1))`). Scroll down advances,
  up reverses.
- **GSAP + ScrollTrigger** for the pin + scrub (`scrub: 0.5`, `snap` to whole
  frames). Chosen over a hand-rolled scroll handler for pin/scrub/reduced-motion
  robustness; it is the de-facto standard for this effect.
- **Text is NOT baked into frames.** "2026", the beat captions, and the KhoaMark
  are **real SVG/DOM overlays** positioned over the canvas — pin-sharp,
  perfectly monochrome, crisp at any DPR. This sidesteps AI video's two weak
  spots (garbled text, incoherent multi-scene narrative).

### Asset-generation pipeline (build-time, committed as static files)

Produces the frames once; they ship as plain images. Not a runtime dependency.

1. **Generate scenes** — `ai-image-generation` skill creates a few strong
   monochrome key scenes: (a) neural-network / knowledge-graph forming,
   (b) falling code / data rain, (c) a graduation cap. Grayscale, high-contrast,
   on-brand with the dot-grid aesthetic.
2. **Interpolate to motion** — `image-to-video` / `ai-video-generation` to move
   between key scenes, OR ffmpeg crossfade/interpolation for controlled
   transitions. Aim: one ~6s continuous monochrome clip.
3. **Extract frames** — `ffmpeg -i clip.mp4 -vf fps=… frame-%03d.webp`, ~120–150
   frames, downscaled to display size, compressed. Store under
   `public/graduation/frames/`.
4. **Overlay** — "2026" / captions / mark added at runtime as SVG, not in the
   pixels.

**Free / license-safe sources (researched 2026-08-01):**

| Source                    | Type       | License reality                                             |
| ------------------------- | ---------- | ----------------------------------------------------------- |
| Own `ai-image-generation` | Images     | ✅ Bespoke monochrome scenes; primary path                  |
| Pixabay                   | Video/img  | ✅ Free, **no attribution**, commercial OK — has "monochrome particle grid / dot surface" clips |
| Pexels                    | Video      | ✅ Free, no attribution, commercial OK                       |
| Mixkit / Coverr           | Video      | ✅ Free, no attribution                                      |
| Vecteezy                  | Video      | ⚠️ Free tier often needs attribution / Pro — use with care  |
| Quaternius / poly.pizza   | 3D (CC0)   | ✅ If a real cap model is ever needed                        |
| Sketchfab                 | 3D         | ⚠️ Mostly CC-BY (credit) or NoAI — check per model          |

> Cap can also be procedurally drawn (board + tassel) during scene generation —
> zero licensing. External assets are fallback/reference only.

### Rendering guardrails

- Canvas sequence mounts via `next/dynamic` (`ssr: false`); GSAP/ScrollTrigger
  are client-only.
- **Frame preload** with progress; the entry door doubles as the loading gate
  so scrubbing never starts before frames are ready.
- **Budget:** ~120–150 WebP frames, downscaled + compressed; lazy-loaded after
  the door tap so they never block first paint. Decode via `createImageBitmap`
  / `img.decode()` off the main thread where supported.
- **`prefers-reduced-motion`** → `reduced-motion-fallback.tsx`: show a single
  static hero frame (or the photo), no pin, no scrub, sound off; letter reads
  normally.
- **LCP protection:** letter text and event details are real SSR'd DOM. Canvas
  + frames + audio load only after the entry-door tap. Page is fully
  readable/shareable before the sequence boots.

### Sound layer

Browser policy: audio requires a user gesture. The **entry door** IS that
gesture — no autoplay ambush.

| Beat     | Sound                                        |
| -------- | -------------------------------------------- |
| Door tap | soft unlock chime                            |
| Arrive   | warm low ambient pad, loops under scene      |
| Network  | rising granular shimmer as nodes connect     |
| Code     | soft digital ticks / data patter             |
| Cap      | upward whoosh → warm crowd cheer + applause  |
| Resolve  | applause fades, ambient returns              |

- Persistent 🔊/🔇 toggle, always visible; choice saved to localStorage.
- Reuses existing `use-sound` hook pattern; files under
  `public/audio/graduation/`, compressed, lazy-loaded after the gesture.
- Sources: designed UI tones + CC0 cheer/applause. Claude sources; user approves.

### Actions (static / client-only, no backend)

- **Add to Calendar** (`invitation-actions.tsx`): generate `.ics` blob for
  download + Google Calendar template URL.
- **Maps**: Google Maps link to the venue (address below).
- **Share**: Web Share API with copy-link fallback.

### Letter copy (user's draft + EN by Claude)

> User wrote the VI lines and asked Claude for the English versions. Bilingual,
> VI bold with EN muted beneath. User edits freely.

**Heading:** Thư Mời Tốt Nghiệp / Graduation Invitation

**Body:**

> Hi, mình là Khoa! Ngày 06 tháng 08 sắp tới đây là ngày tốt nghiệp của mình.
> _Hi, I'm Khoa! This coming August 6th is my graduation day._
>
> Mình trân trọng mời các bạn đến chung vui cùng mình trong ngày kỉ niệm này.
> _I'd be honored to have you join me and share in this special milestone._
>
> Cám ơn các bạn, sự hiện diện của các bạn sẽ là niềm vui rất lớn đối với mình.
> _Thank you — your presence would mean the world to me._

**Event block:**

- 📅 10:00, Thứ Năm, 06.08.2026 / Thursday, 6 Aug 2026
- 📍 Trường Đại học Văn Lang (Cơ sở chính) / Van Lang University (Main Campus)
- 🗺️ 69/68 Đ. Đặng Thuỳ Trâm, An Nhơn, Hồ Chí Minh 70000, Việt Nam

## Homepage `GraduationHero`

New `Panel` inserted at the very top of `src/app/(app)/(root)/page.tsx`, above
`ProfileCover`. Uses existing `Panel` / `screen-line` / hatch-pattern system.
This is where the **graduation photo** lives.

```
🎓  CLASS OF 2026
[photo]      Tôi sắp tốt nghiệp! / I'm graduating!
             (countdown) 5 days to go  → "Graduated!" after 06.08
             10:00 · Thu, 06.08.2026
             Đại học Văn Lang
             [ Xem thư mời / See invitation → ]
```

- Countdown is the shared client component.
- Retirable: delete the single `<GraduationHero />` line post-ceremony.

## Shared + housekeeping

- **`src/features/graduation/data/graduation.ts`** — single source of truth:
  date/time, venue name + address, Maps URL, calendar payload, countdown target.
  Consumed by hero, invitation, countdown, calendar action.
- **Nav:** add "Invitation" to `MAIN_NAV` (`site.ts`) and `command-menu.tsx`
  (fills the slot cleared when ShopFlow was removed).
- **Image:** generate optimized web copies of `me-graduate.png` (14.3 MB /
  4096²) via Sharp — a ~1200px hero image (+ smaller responsive sizes). Original
  kept untouched. **Build blocker until done.**

## File structure

```
src/app/(app)/invitation/page.tsx          server: letter, metadata, OG, mounts sequence
src/features/graduation/
  data/graduation.ts                        shared event constants
  components/
    graduation-hero.tsx                     homepage hero panel (photo + countdown)
    graduation-countdown.tsx                client countdown (shared)
    invitation-letter.tsx                   bilingual letter (server)
    invitation-actions.tsx                  calendar / maps / share (client)
    entry-door.tsx                          welcome screen + audio unlock + preload gate (client)
    sound-controller.tsx                    audio manager + mute toggle (client)
    scroll-sequence.tsx                     pinned canvas + GSAP ScrollTrigger scrub (client, dynamic ssr:false)
    sequence-overlay.tsx                    real SVG "2026" / captions / KhoaMark over canvas
    reduced-motion-fallback.tsx             static frame + letter, no scrub
public/graduation/frames/frame-000.webp …   pre-rendered sequence (build artifact)
public/audio/graduation/…                    sound assets
scripts/ (optional) build-frames.*           documents the ffmpeg extraction step
```

## New dependencies

- `gsap` (ScrollTrigger) — pin + scroll scrub.
- `ffmpeg` — **build-time only** for frame extraction (not a runtime dep).
- Skills: `ai-image-generation`, `image-to-video` / `ai-video-generation`
  for asset creation.
- **No `three` / `@react-three/*`.**

## Testing / validation

- `pnpm check-types` clean; `pnpm build` succeeds (verify `ssr: false`, no
  browser-only API in SSR).
- Manual: entry door preloads frames then unlocks audio + scrub; scrubbing is
  smooth both directions; "2026"/mark overlay is crisp; `prefers-reduced-motion`
  shows the static fallback; countdown flips after target; `.ics` downloads;
  Maps + Share work; mobile frame budget holds; page readable before sequence
  boots.

## Risks

- **5-day timeline** — asset generation (AI scenes → clip → frames) is the least
  predictable step. Mitigation: hero + letter + actions are the must-ship core
  and don't depend on the sequence; the sequence degrades to a single static
  frame. Page is always shippable.
- **AI asset quality** — multi-scene narrative + monochrome consistency may need
  several generation passes. Real-text overlay removes the biggest failure mode
  (garbled "2026"). If AI scenes underwhelm, fall back to CC0 Pixabay particle
  footage or a procedural canvas render.
- **Frame weight** — 120–150 images must be downscaled + compressed + lazy; a
  naive export would bloat the page. Preload gated behind the door.
- **14 MB source image** — must optimize before it ships (build blocker).
- **Node 24 vs local 22** — warning only; not blocking.
