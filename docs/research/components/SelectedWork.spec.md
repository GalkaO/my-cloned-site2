# Selected Work Specification

## Overview
- **Target file:** `src/components/sections/SelectedWork.tsx`
- **Interaction model:** static + hover (each card link has hover:opacity-80)
- **Position:** below AmbitionPress section

## DOM Structure
```
<section class="relative pb-15 sm:pb-30">
  <!-- Header block -->
  <div class="container pt-15 sm:pt-30 relative z-1">
    <div class="mb-10 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end">
      <div class="flex-1">
        <p class="p1 text-dark-gray mb-4 sm:mb-8">Selected Work</p>
        <h2 class="h2 max-w-3xl">
          Work created at moments where change becomes <em>inevitable by design</em>.
        </h2>
      </div>
      <a class="btn-blue" href="/work">All Work</a>
    </div>
  </div>

  <!-- Cards grid -->
  <div class="custom-grid container gap-y-6 sm:gap-y-16 relative z-1">
    <WorkCardItem ... />  <!-- 5 cards total -->
  </div>
</section>
```

## Computed Styles

### Section
- position: relative
- padding-bottom: 60px mobile / 120px (sm:pb-30) tablet+
- background: var(--color-white)

### Header h2
- font-family: MartinaPlantijn
- font-size: 64px (clamp 32-64)
- line-height: 70px (clamp 40-70)
- font-weight: 400
- color: rgb(0, 0, 20)
- "inevitable by design" wrapped in `<em>` (italic)

### Header label "Selected Work"
- p1 (20px), color: rgba(0, 0, 20, 0.4) (--dark-gray)
- margin-bottom: 16/32px

### "All Work" button (CTA)
- bg: var(--color-blue) #0000f8
- color: white
- padding: 8px 24px (px-6 py-2)
- border-radius: 6px (rounded-md)
- font-size: 14px, font-weight: 700
- box-shadow:
  ```
  0 1px 1px 0 var(--color-blue) inset,
  0 4px 4px 0 rgba(255,255,255,0.4) inset,
  0 -4px 6px 0 rgba(0,0,20,0.3) inset,
  0 4px 15px 0 rgba(0,0,20,0.15)
  ```
- hover: scale(1.02), opacity 0.95, shadow expands
- transition: all 300ms ease-out

### Grid
- display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)) on mobile, repeat(12, minmax(0, 1fr)) on sm:
- column-gap: var(--grid-gap) = 20px
- row-gap: 24px mobile / 64px sm:

### Card layouts (column spans on 12-col desktop / 4-col mobile)
- Card 1 (SOROS): `col-span-4 sm:col-span-6` (left half)
- Card 2 (Robotic Implant Center): `col-span-4 sm:col-span-5 sm:col-start-8` (right side, offset by 1 col)
- Card 3 (Utica Public Library): `col-span-4 sm:col-span-12` (full width)
- Card 4 (Citi Bike Plus): `col-span-4 sm:col-span-6` (left half)
- Card 5 (Hint): `col-span-4 sm:col-span-6` (right half)

### Card structure
```
<div class="col-span-4 sm:col-span-N">
  <a class="relative h-fit hover:opacity-80 transition-all duration-300 ease-out" href="/work/{slug}">
    <div class="overflow-hidden rounded-md mb-6">
      <img src="..." alt="..." class="h-auto w-full aspect-3/2 object-cover" />
    </div>
    <p class="p1 mb-1">{title}</p>  <!-- 20px black -->
    <p class="p2 text-dark-gray mb-4">{description}</p>  <!-- 16px dark-gray -->
    <ul class="flex flex-wrap gap-1">
      {tags.map(tag => (
        <li class="bg-light-gray flex w-fit items-center rounded-xs px-2 pb-1 text-black text-base">
          {tag}
        </li>
      ))}
    </ul>
  </a>
</div>
```

### Card image
- aspect-ratio: 3/2 (cards 1,2,4,5) — aspect-[3/2]
- aspect-ratio: 16/9 or wider for full-bleed Card 3 (Utica)
- object-fit: cover
- border-radius: 6px (rounded-md)
- transition: opacity 300ms

### Card title
- font-family: FoundersGrotesk
- font-size: 20px (p1)
- color: rgb(0, 0, 20) (black)
- margin-top: 24px (after image)

### Card description
- font-family: FoundersGrotesk
- font-size: 16px (p2)
- color: rgba(0, 0, 20, 0.4) (--dark-gray)
- margin-bottom: 16px

### Tag pill (chip)
- bg: rgba(224, 224, 227, 0.4) (--light-gray)
- color: rgb(0, 0, 20) (black)
- padding: 0px 8px 4px (px-2 pb-1) — note no top padding, lets text breathe top-aligned
- border-radius: 2px (rounded-xs)
- font-size: 16px (text-base)
- font-family: FoundersGrotesk
- font-weight: 400
- gap between tags: 4px (gap-1)
- display: inline-flex w-fit

## States & Behaviors

### Hover on card link `<a>`
- opacity: 1 → 0.8
- transition: all 300ms ease-out

## Assets (per card, in order)

### Card 1 — SOROS
- href: `/work/soros`
- image: `/images/work-soros.webp`
- alt: `"SOROS logo on gradient"`
- title: `SOROS`
- description: `Designing trust for decentralized commerce.`
- tags: ["Brand Strategy","Naming","Brand Identity","Logo","Guidelines","Product Design","Digital Experience","Design Systems","Web","Engineering"]

### Card 2 — Robotic Implant Center
- href: `/work/robotic-implant-center`
- image: `/images/work-robotic-implant.webp`
- alt: `"Robotic Implant Center"`
- title: `Robotic Implant Center`
- description: `Positioning robotic dentistry as a category leader.`
- tags: ["Brand Strategy","Naming","Logo","Digital Experience","Web","Engineering","Motion & Video"]

### Card 3 — Utica Public Library
- href: `/work/utica-public-library`
- image: `/images/work-utica-library.webp`
- alt: `"Front of a library building with banners."`
- title: `Utica Public Library`
- description: `Rebuilding clarity for a historic institution at the heart of Utica.`
- tags: ["Brand Strategy","Research","Brand Identity","Logo","Guidelines","Campaigns"]

### Card 4 — Citi Bike Plus
- href: `/work/citi-bike-plus`
- image: `/images/work-citi-bike.webp`
- alt: `"Side view of a branded Citi Bike+ van"`
- title: `Citi Bike Plus`
- description: `Extending Citi Bike into a smarter way to move through the city.`
- tags: ["Brand Strategy","Naming","Brand Identity","Logo","Guidelines","Campaigns"]

### Card 5 — Hint
- href: `/work/hint`
- image: `/images/work-hint.webp`
- alt: `"Bus stop ad for Hint"`
- title: `Hint`
- description: `Designing a new category for everyday scent.`
- tags: ["Naming","Research","Brand Identity","Logo","Guidelines","Campaigns","Packaging"]

## Responsive Behavior
- **Desktop (≥640px):** 12-col grid. Card 1: cols 1-6; Card 2: cols 8-12; Card 3: cols 1-12; Card 4: cols 1-6; Card 5: cols 7-12.
- **Mobile (<640px):** 4-col grid; all cards span full width (col-span-4).
- Image aspect-ratio stays 3/2 across breakpoints.
- Header: column on mobile, row with right-aligned All Work button on `md:` (768px+).
