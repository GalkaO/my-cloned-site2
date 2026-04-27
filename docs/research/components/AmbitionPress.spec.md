# Ambition + Press Carousel Specification

## Overview
- **Target file:** `src/components/sections/AmbitionPress.tsx`
- **Interaction model:** static (auto-playing video, no user interaction)
- **Position:** Section below hero, OVERLAPS hero by 60-120px (negative top margin)

## DOM Structure
```
<section class="relative z-1 -mt-15 sm:-mt-30">
  <!-- Manifesto block -->
  <div class="relative container pt-15 sm:pt-30">
    <p class="p1 text-dark-gray mb-4 sm:mb-8">Ambition</p>
    <div class="mb-10 flex flex-col justify-between gap-8 sm:mb-24 md:flex-row md:items-end">
      <h2 class="h2 text-render inline sm:block">
        We exist to make the <em>new possible</em>.
        <br />
        New clarity. New systems. New futures.
      </h2>
    </div>
  </div>

  <!-- Press carousel video (Mux) -->
  <div class="container aspect-video">
    <MuxPlayer
      playbackId="s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00"
      autoPlay="muted"
      loop
      playsInline
      streamType="on-demand"
      preload="auto"
      poster="/images/poster-press-carousel.jpg"
      style={{ aspectRatio: "16/9", width: "100%", height: "auto", "--controls": "none" }}
      title="Press carousel"
      className="h-auto w-full border-0 outline-none"
    />
  </div>
</section>
```

## Computed Styles

### Section
- position: relative; z-index: 1
- margin-top: -60px (`-mt-15`) on mobile / -120px (`sm:-mt-30`) on tablet+
- background: var(--color-white) — inherits from body, but make it explicit

### Container (manifesto block)
- max-width: 72rem + 2*container-margin
- padding-inline: var(--container-margin) (20-40px)
- padding-top: 60px (`pt-15`) mobile / 120px (`sm:pt-30`) tablet+
- background: var(--color-white) — IMPORTANT: opaque so it covers the bottom of the hero

### "Ambition" label
- font-family: FoundersGrotesk
- font-size: 20px (--font-size-p1)
- line-height: 24px
- font-weight: 400
- color: rgba(0, 0, 20, 0.4) (--color-dark-gray)
- margin-bottom: 16px (`mb-4`) mobile / 32px (`sm:mb-8`) tablet+

### Manifesto h2
- font-family: MartinaPlantijn, serif (italic for emphasis)
- font-size: 64px (--font-size-h2 clamped: 32 → 64)
- line-height: 70px (--font-leading-h2 clamped: 40 → 70)
- font-weight: 400
- color: rgb(0, 0, 20) (black)
- text content split across multiple words with reveal animation hooks (we render plain text)
- "new possible" wrapped in `<em>` (italic)
- after "possible." there's a `<br />` then "New clarity. New systems. New futures."

### Manifesto wrapper div
- display: flex
- flex-direction: column on mobile / row on `md:` (768px+)
- gap: 32px (`gap-8`)
- justify-content: space-between
- md: items-end (alignment on tablet)
- margin-bottom: 40px (mb-10) mobile / 96px (sm:mb-24) tablet+

### Press carousel video container
- width: 100%
- max-width: container max
- aspect-ratio: 16 / 9
- margin-inline: auto

### MuxPlayer
- width: 100%; height: auto
- border: 0; outline: none
- playbackId: `s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00`
- autoPlay (muted), loop, playsInline
- preload: auto
- streamType: "on-demand"
- title: optional
- Hide controls via inline `--controls: none` style (Mux Player CSS variable).

## States & Behaviors
- Mux video auto-plays, loops, muted from the moment it enters the DOM.
- Manifesto words could fade in on scroll (optional). The default rendering should be fully visible.

## Assets
- Mux playback id: `s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00`
- Poster fallback: `public/images/poster-press-carousel.jpg`

## Text Content (verbatim)
- Label: `Ambition`
- Headline: `We exist to make the new possible. New clarity. New systems. New futures.`
  - "new possible" inside `<em>` for italic.
  - Period after "possible.", then `<br>` for visual line break.

## Responsive Behavior
- **Desktop (≥768px):** manifesto layout `flex-row items-end`, headline takes most of width, may have right-side content (none currently). Section overlaps hero by 120px.
- **Tablet (640-767px):** layout still flex-col, padding pt-30 (120px).
- **Mobile (<640px):** flex-col with gap-8, padding pt-15 (60px), section overlaps hero by 60px (`-mt-15`).
- Press carousel always 16:9.
