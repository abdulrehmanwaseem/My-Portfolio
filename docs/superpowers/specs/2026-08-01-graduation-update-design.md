# Graduation Update — Design Spec

**Date:** 2026-08-01
**Author:** Truong Nguyen Anh Khoa (with Claude)
**Status:** Draft for review

## Context

The portfolio at https://nhkhoa.site needs a time-bound graduation moment. The
official Van Lang University ceremony is **10:00 AM, Thursday 6 August 2026** —
five days out from this spec. Two user-facing deliverables:

1. A **graduation hero** at the top of the homepage (retirable after the event).
2. A **stunning `/invitation` page** — a warm, personal, bilingual invitation
   letter fronted by an interactive Three.js experience with a sound layer.

Repo prep (AGENTS merge, graphify→codegraph, ShopFlow removal) is already
committed (`403d4c0`). This spec covers only the graduation work.

## Scope

**In scope (this round):**
- Homepage `GraduationHero` panel (monochrome).
- `/invitation` page: Three.js point-cloud experience (A+B), bilingual letter,
  sound layer, calendar/maps/share actions.
- Shared event constants; nav entry; optimized graduation photo.

**Deferred (user will do later):**
- Profile/job data edits (`user.ts`, `experiences.ts`) stay untouched. User
  chose "graduation first, job later."

**Explicitly excluded:**
- No RSVP / backend (5-day timeline; nowhere to store responses).
- No color changes — strictly monochrome, matching the zinc/black-white system.

## Design decisions (locked with user)

| Decision | Choice |
|---|---|
| Restyle scope | Graduation hero at top; portfolio below unchanged; retirable |
| Invitation tone | Warm, personal (not formal card, not party-loud) |
| Language | Bilingual VI + EN (both hero and invitation) |
| Interactive features | Add-to-Calendar, Maps, Share. **No RSVP.** |
| Color | Monochrome only (no amber/gold) |
| 3D concept | **A + B**: point-cloud portrait assemble + morph, then cap-toss confetti climax |
| Sound | Entry-door unlock; designed tones + CC0 cheer/applause |

## The `/invitation` experience

### Narrative beats

```
Beat 0  DOOR      Welcome screen: [Enter / Mở thiệp mời] + [View silently]
                  The tap unlocks audio AND starts the scene.
Beat 1  ARRIVE    Monochrome dot field drifts in 3D (site's grid motif).
Beat 2  ASSEMBLE  ~12k points swarm chaos -> user's portrait
                  (sampled from me-graduate.png; brightness = gray value).
Beat 3  READ      Portrait holds; warm bilingual letter below.
Beat 4  MORPH     Scroll-driven: portrait -> cap -> "2026" -> KhoaMark.
Beat 5  CLIMAX    "Tung non! / Toss the cap!" -> mortarboard launches,
                  bursts into monochrome paper confetti (physics).
Beat 6  SETTLE    Confetti drifts down; scene rests on "2026" + mark.
```

### Scene architecture (Three.js via react-three-fiber)

- **Single `BufferGeometry`**, ~12k points. All morph targets (portrait, cap,
  "2026", mark) precomputed as equal-length position arrays. A shader
  `uniform float progress` lerps between two target buffers on the GPU — no
  per-frame CPU work.
- **Portrait sampling** (`use-image-points.ts`): load a ~256px copy of the
  photo, draw to an offscreen canvas, read pixels, keep those above a
  brightness threshold, map to 3D positions + per-point gray. Runs once.
- **Morph targets** (`morph-targets.ts`): cap = parametric mortarboard point
  set; "2026" = text sampled to points via canvas; mark = KhoaMark path
  sampled to points. All normalized to the same point count.
- **Cap toss** (`cap-toss.tsx` + `confetti.tsx`): low-poly mortarboard mesh +
  `InstancedMesh` confetti. Lightweight spring/gravity tween (no physics
  engine). White + charcoal flecks only.

### Rendering guardrails

- `@react-three/fiber` + `@react-three/drei`, mounted via `next/dynamic` with
  `ssr: false` (App Router requirement for WebGL).
- Particle budget: **~12k desktop / ~5k mobile**; DPR clamped to <=2.
- Canvas pauses (`frameloop="never"`) when scrolled offscreen (IntersectionObserver).
- **`prefers-reduced-motion`** -> `reduced-motion-fallback.tsx`: static
  optimized portrait + letter, no canvas, sound defaults off.
- **LCP protection:** letter text and event details are real SSR'd DOM. The 3D
  canvas and audio load only after the entry-door tap. Page is fully
  readable/shareable before WebGL boots.

### Sound layer

Browser policy: audio requires a user gesture. The **entry door** IS that
gesture — no autoplay ambush.

| Beat | Sound |
|---|---|
| Door tap | soft unlock chime |
| Arrive | warm low ambient pad, loops under scene |
| Assemble | rising granular shimmer -> settle swell |
| Morph | subtle glass tick per target change |
| Climax | upward whoosh -> warm crowd cheer + applause |
| Confetti | light paper patter |
| Settle | applause fades, ambient returns |

- Persistent 🔊/🔇 toggle, always visible; choice saved to localStorage.
- Reuses existing `use-sound` hook pattern; files under
  `public/audio/graduation/`, compressed, lazy-loaded after the gesture.
- Sources: designed UI tones + CC0 cheer/applause. Claude sources; user approves.
- Independent volumes mixed over the ambient bed.

### Actions (static / client-only, no backend)

- **Add to Calendar** (`invitation-actions.tsx`): generate `.ics` blob for
  download + Google Calendar template URL.
- **Maps**: Google Maps link to Van Lang University.
- **Share**: Web Share API with copy-link fallback.

### Letter copy (first draft — for user review)

> Bilingual, VI bold with EN muted beneath. Placeholder — user edits freely.

**Heading:** Thư Mời Tốt Nghiệp / Graduation Invitation

**Body (draft):**

> Sau bốn năm ở Văn Lang, mình sắp chạm tới cột mốc đầu tiên của hành trình.
> *After four years at Van Lang, I'm about to reach the first milestone of my journey.*
>
> Mình viết những dòng này để mời bạn — người đã đồng hành, dạy dỗ, và tin tưởng mình — đến chung vui trong ngày lễ tốt nghiệp.
> *I'm writing to invite you — someone who has walked with me, taught me, and believed in me — to celebrate my graduation day.*
>
> Cảm ơn gia đình, thầy cô và bạn bè. Cột mốc này có phần của mọi người trong đó.
> *Thank you to my family, teachers, and friends. This milestone has a piece of each of you in it.*

**Event block:**
- 📅 10:00, Thứ Năm, 06.08.2026 / Thursday, 6 Aug 2026
- 📍 Trường Đại học Văn Lang / Van Lang University

## Homepage `GraduationHero`

New `Panel` inserted at the very top of `src/app/(app)/(root)/page.tsx`, above
`ProfileCover`. Uses existing `Panel` / `screen-line` / hatch-pattern system.

```
🎓  CLASS OF 2026
[portrait]   Toi sap tot nghiep! / I'm graduating!
             (countdown) 5 days to go  -> "Graduated!" after 06.08
             10:00 - Thu, 06.08.2026
             Dai hoc Van Lang
             [ Xem thu moi / See invitation -> ]
```

- Countdown is the shared client component.
- Retirable: delete the single `<GraduationHero />` line post-ceremony.

## Shared + housekeeping

- **`src/features/graduation/data/graduation.ts`** — single source of truth:
  date/time, venue, Maps URL, calendar payload, countdown target. Consumed by
  hero, invitation, countdown, calendar action.
- **Nav:** add "Invitation" to `MAIN_NAV` (`site.ts`) and `command-menu.tsx`
  (fills the slot cleared when ShopFlow was removed).
- **Image:** generate optimized web copies of `me-graduate.png` (14.3 MB /
  4096²) via Sharp — a ~1200px display image and a ~256px point-sample source.
  Original kept untouched.

## File structure

```
src/app/(app)/invitation/page.tsx          server: letter, metadata, OG, mounts scene
src/features/graduation/
  data/graduation.ts                        shared event constants
  components/
    graduation-hero.tsx                     homepage hero panel
    graduation-countdown.tsx                client countdown (shared)
    invitation-letter.tsx                   bilingual letter (server)
    invitation-actions.tsx                  calendar / maps / share (client)
    entry-door.tsx                          welcome screen + audio unlock (client)
    sound-controller.tsx                    audio manager + mute toggle (client)
    three/
      portrait-scene.tsx                    r3f Canvas (dynamic, ssr:false)
      use-image-points.ts                   photo -> points
      morph-targets.ts                      cap / "2026" / mark point sets
      cap-toss.tsx                          mortarboard launch
      confetti.tsx                          instanced confetti
      reduced-motion-fallback.tsx           static fallback
```

## New dependencies

- `three`, `@react-three/fiber`, `@react-three/drei`
- Available `threejs-*` skills will guide implementation.

## Testing / validation

- `pnpm check-types` clean.
- `pnpm build` succeeds (verify `ssr: false` dynamic import, no WebGL in SSR).
- Manual: entry door unlocks audio; reduced-motion shows static fallback;
  countdown flips after target; calendar `.ics` downloads; Maps + Share work;
  mobile particle budget holds; page readable before canvas boots.

## Risks

- **5-day timeline** — 3D + sound is the bulk of effort. Hero + letter + actions
  are the must-ship core; the point-cloud/confetti degrade to the static
  fallback if needed, so the page is always shippable.
- **14 MB source image** — must optimize before it ships (build blocker otherwise).
- **Node 24 vs local 22** — warning only; not blocking.
