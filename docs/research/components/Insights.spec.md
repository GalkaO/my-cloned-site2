# Insights Specification

## Overview
- **Target file:** `src/components/sections/Insights.tsx`
- **Interaction model:** static + hover
- **Position:** below Approach

## DOM Structure
```
<section class="relative pb-15 sm:pb-30">
  <!-- Header block -->
  <div class="container pt-15 sm:pt-30 relative z-1">
    <div class="mb-10 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end">
      <div class="flex-1">
        <p class="p1 text-dark-gray mb-4 sm:mb-8">Insights</p>
        <h2 class="h2 max-w-3xl">
          The latest from <em>our world and beyond</em>.
        </h2>
      </div>
      <a class="btn-blue" href="/insights">Explore All</a>
    </div>
  </div>

  <!-- Cards grid -->
  <div class="custom-grid container gap-y-6 sm:gap-y-16 relative z-1">
    <InsightCardItem ... />  <!-- 3 cards -->
  </div>
</section>
```

## Computed Styles

### Section, Header, Grid
Same structure as SelectedWork. Padding pb-15 (60px) mobile / pb-30 (120px) sm:.

### Insight card structure
```
<div class="col-span-4 h-auto">
  <a
    class="relative h-fit hover:opacity-80 transition-all duration-300 ease-out block"
    href="/insights/{slug}"
  >
    <div class="overflow-hidden rounded-md mb-6 aspect-[4/3]">
      {kind === 'image' ? (
        <img src="..." alt="..." class="h-full w-full object-cover" />
      ) : (
        <MuxPlayer
          playbackId="..."
          autoPlay="muted" loop playsInline
          class="h-full w-full"
          poster="/images/poster-...jpg"
        />
      )}
    </div>
    <div class="flex justify-between items-start gap-4">
      <div>
        <p class="p1 mb-1">{title}</p>
        <p class="p2 text-dark-gray">Posted {N} days ago</p>
        <p class="p2 mt-3">
          <span class="bg-light-gray flex w-fit items-center rounded-xs px-2 pb-1 text-black">{category}</span>
        </p>
      </div>
      <span class="p2 underline whitespace-nowrap">Read more</span>
    </div>
  </a>
</div>
```

### Card image / video container
- aspect-ratio: 4/3 (`aspect-[4/3]`)
- border-radius: 6px (rounded-md)
- overflow: hidden
- margin-bottom: 24px

### Card title
- p1 (20px), color black, margin-bottom 4px

### "Posted N days ago"
- p2 (16px), color: rgba(0, 0, 20, 0.4) (--dark-gray)

### Category pill
- Same style as work tag pills: bg-light-gray, rounded-xs, px-2 pb-1, color black, font-size 16px

### "Read more" link
- p2 (16px), underline, color: rgb(0, 0, 20)
- whitespace: nowrap

## States & Behaviors
- Hover on card link: opacity 1 → 0.8

## Per-Card Content

### Card 1 — The Future of Design Isn't Design
- href: `/insights/the-future-of-design-isnt-design`
- kind: image
- image: `/images/insight-future-of-design.webp`
- alt: `Gradient image with title "the future of design isn't design"`
- title: `The Future of Design Isn't Design`
- postedDaysAgo: 75
- category: Opinion

### Card 2 — New Studio featured on Navbar Gallery
- href: `/insights/new-studio-featured-on-navbar-gallery`
- kind: video (Mux)
- muxPlaybackId: `WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E`
- poster: `/images/poster-insight-navbar.jpg`
- title: `New Studio featured on Navbar Gallery`
- postedDaysAgo: 85
- category: Press

### Card 3 — Jonathan Lin gives talk at AICAD Conference
- href: `/insights/jonathan-lin-gives-talk-at-aicad-conference`
- kind: image
- image: `/images/insight-aicad.webp`
- alt: `AICAD New Studio`
- title: `Jonathan Lin gives talk at AICAD Conference`
- postedDaysAgo: 153
- category: Press

## Responsive Behavior
- **Desktop (≥640px):** 12-col grid; each card `col-span-4` (so 3 across).
- **Mobile (<640px):** 4-col grid; each card `col-span-4` (full-width = stacked).
- Aspect-ratio 4/3 on the media stays consistent.
- Header: column on mobile / row on `md:`.
