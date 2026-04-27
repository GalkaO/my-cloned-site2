# Approach Specification

## Overview
- **Target file:** `src/components/sections/Approach.tsx`
- **Interaction model:** static + button hover
- **Position:** below SelectedWork

## DOM Structure
```
<section class="container">
  <div class="relative h-[calc(var(--svh)*90)] portrait:h-[calc(var(--svh)*70)] overflow-hidden rounded-md">
    <!-- Overlay text + CTA at the bottom-left -->
    <div class="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end gap-4 sm:gap-8 p-6 sm:p-12 text-white">
      <h2 class="h2 text-render max-w-3xl">
        Growing Products by Redefining <em>Culture</em>.
      </h2>
      <a class="btn-blue w-fit" href="/approach">Our Approach</a>
    </div>

    <!-- Background image: hand drawing logos -->
    <img
      src="/images/approach-hand-drawing.webp"
      alt="Hand drawing logo concepts"
      class="relative z-1 h-full w-full object-cover"
    />
  </div>
</section>
```

## Computed Styles

### Section
- max-width: 72rem + container-margin*2
- margin-inline: auto
- padding-inline: var(--container-margin)

### Inner relative wrapper
- height: `calc(var(--svh) * 90)` landscape ≈ 90vh
- height: `calc(var(--svh) * 70)` portrait ≈ 70vh
- position: relative
- overflow: hidden
- border-radius: 6px (rounded-md)

### Overlay text container
- position: absolute; top: 0; left: 0
- z-index: 10
- height: 100%; width: 100%
- display: flex; flex-direction: column; justify-content: flex-end
- gap: 16px mobile / 32px sm: (`gap-4 sm:gap-8`)
- padding: 24px mobile / 48px sm: (`p-6 sm:p-12`)
- color: rgb(247, 247, 247) (--white)

### h2 "Growing Products by Redefining Culture."
- font-family: MartinaPlantijn
- font-size: 64px (clamp 32-64)
- line-height: 70px
- font-weight: 400
- color: rgb(247, 247, 247) (white)
- max-width: 48rem (3xl) — keeps 2 lines on desktop
- "Culture" word inside `<em>` for italic

### Background image
- position: relative; z-index: 1
- height: 100%; width: 100%
- object-fit: cover
- src: `/images/approach-hand-drawing.webp`

### CTA button "Our Approach"
- bg: var(--color-blue) #0000f8
- color: white
- padding: 8px 24px (px-6 py-2)
- border-radius: 6px (rounded-md)
- font-size: 16px (p2)
- font-weight: 400 (NOTE: not bold)
- box-shadow:
  ```
  0 1px 1px 0 var(--color-blue) inset,
  0 4px 4px 0 rgba(255,255,255,0.4) inset,
  0 -4px 6px 0 rgba(0,0,20,0.3) inset,
  0 4px 15px 0 rgba(0,0,20,0.15)
  ```
- transition: all 300ms ease-out
- hover: scale(1.02), shadow expands
- active: scale(0.98)
- width: w-fit (intrinsic)

## States & Behaviors
- Static section. The image fills the wrapper and is overlaid with text + button.
- Button hover: scale and stronger shadow.

## Assets
- Background image: `/images/approach-hand-drawing.webp`

## Text Content (verbatim)
- Headline: `Growing Products by Redefining Culture.`
  - "Culture" inside `<em>` for italic
- CTA: `Our Approach` → `/approach`

## Responsive Behavior
- **Landscape:** wrapper height 90% of small viewport height
- **Portrait:** wrapper height 70% of small viewport height
- **Mobile:** padding p-6 (24px), gap-4 (16px)
- **Tablet+ (≥640px):** padding p-12 (48px), gap-8 (32px)
- Headline scales fluidly via clamp.
