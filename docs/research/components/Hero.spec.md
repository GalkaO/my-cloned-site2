# Hero Specification

## Overview
- **Target file:** `src/components/sections/Hero.tsx`
- **Interaction model:** static + scroll-triggered word reveal (optional). Background canvas animation simplified to a still image / CSS gradient.

## DOM Structure
```
<section class="h-(--full-height) w-full overflow-hidden">
  <!-- Background layer: blue silk animation -->
  <div class="z-0 overflow-hidden w-full h-full">
    <!-- canvas in original; we substitute a CSS gradient + animated noise -->
    <div class="absolute inset-0 bg-blue-silk" />
  </div>

  <!-- Centered headline -->
  <div class="absolute top-1/2 left-1/2 z-1 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center text-white flex justify-center items-center">
    <h1 class="h1 text-render inline sm:block w-fit">
      <em>Transforming</em> Brands,
      <br class="hidden sm:inline" />
      Building <em>Futures</em>
    </h1>
  </div>

  <!-- Bottom tagline -->
  <div class="absolute bottom-8 left-1/2 z-1 w-full -translate-x-1/2 px-5 text-center">
    <p class="p1 text-white">A New York–based brand transformation studio working across strategy, design, and digital.</p>
  </div>
</section>
```

## Computed Styles

### Section
- height: var(--full-height) ≈ 100svh (full viewport height)
- width: 100%
- overflow: hidden
- position: relative

### Background
- Renders the blue silk gradient. Original is a custom canvas/WebGL animation.
- Approach for clone: full-bleed `<div>` with a layered radial gradient + linear gradient using the brand blue (#0000f8) and lighter highlights (#1869f4, #4d4dff). Apply `mix-blend-mode` and a subtle CSS animation (animate gradient positions or rotation) for movement.
  - Alternative: render a static large PNG of the silk pattern (acceptable but less dynamic).
  - Recommended CSS:
    ```css
    background:
      radial-gradient(60% 80% at 30% 30%, #4d6dff 0%, transparent 50%),
      radial-gradient(50% 70% at 75% 70%, #2030d6 0%, transparent 60%),
      radial-gradient(40% 60% at 60% 30%, #6080ff 0%, transparent 70%),
      linear-gradient(125deg, #0000f8 0%, #1f3fff 30%, #0010c8 60%, #0000a8 100%);
    filter: saturate(1.1);
    ```
  - Animation: `@keyframes silk { 0% { transform: scale(1.05) rotate(0deg); } 50% { transform: scale(1.1) rotate(2deg); } 100% { transform: scale(1.05) rotate(0deg); } }` applied to a layer with `animation: silk 18s ease-in-out infinite`.

### h1 (Headline)
- font-family: MartinaPlantijn, "MartinaPlantijn Fallback", serif
- font-size: 100px (clamped — 37px → 100px via `--font-size-h1`)
- line-height: 108px (clamped via `--font-leading-h1`)
- font-weight: 400
- color: rgb(247, 247, 247) (--white)
- text-align: center
- letter-spacing: -0.01em (subtle)
- "Transforming" and "Futures" wrapped in `<em>` (italic — uses MartinaPlantijn Italic)
- "Brands," and "Building" are upright (regular)
- Word "Brands," followed by a comma `,`
- Line break between "Brands," and "Building" (visible via `<br>` on desktop, just space on mobile)

### Tagline (p1)
- font-family: FoundersGrotesk
- font-size: 20px (--font-size-p1)
- line-height: 24px (--font-leading-p1)
- font-weight: 400
- color: rgb(247, 247, 247) (--white)
- text-align: center
- bottom: 32px (bottom-8 in Tailwind)

## States & Behaviors

### Word-by-word reveal animation (optional polish)
Each word in h1 is wrapped with an animation. Initial state hidden (`opacity: 0; filter: blur(10px); transform: translateY(50px)`). On mount, animate in with stagger delay 100ms per word. Use Framer Motion or a CSS animation with `animation-delay`.

Simpler implementation (acceptable): plain h1 with no animation. Match the static visual exactly.

### No hover states
The hero is non-interactive.

## Assets
- Background: pure CSS (silk gradient). No assets needed.
- (If used) `public/images/hero-silk.webp` — a static fallback.

## Text Content (verbatim)
**Headline:** "Transforming Brands, Building Futures"
- "Transforming" (italic)
- " Brands,"
- "Building "
- "Futures" (italic)

**Tagline:** "A New York–based brand transformation studio working across strategy, design, and digital."
(Note: en-dash between "York" and "based" — character "–", not "-".)

## Responsive Behavior
- **Desktop (≥640px):** h1 displays on 2 lines (line break after "Brands,"), large 100px text.
- **Mobile (<640px):** h1 wraps naturally (no forced line break), text shrinks to ~37px.
- Tagline stays centered horizontally.
- Background gradient fills full viewport on all sizes.
