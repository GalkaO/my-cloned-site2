# new.studio — Page Topology

Target: https://www.new.studio/?ref=land-book.com
Total page height (desktop 1536x769): 7783px
Tech: Next.js (App Router), Tailwind v4, Lenis smooth scroll, MuxPlayer for video, Sanity CDN for images.

## Page Sections (top → bottom)

| # | Name | Selector | Top (px) | Height (px) | Notes |
|---|------|----------|----------|-------------|-------|
| H | Header (fixed pill nav) | `header.fixed.top-5` | 20 | 56 | Fixed; transforms on scroll |
| 1 | Hero | `section.h-(--full-height)` | 0 | 769 (var(--full-height)) | Canvas blue silk animation + h1 + tagline |
| 2 | Ambition + Press Carousel | `section.relative.z-1.-mt-15.sm:-mt-30` | 649 | 1276 | Overlap hero (-30 mt). Has manifesto + Mux video |
| 3 | Selected Work | `section.relative.pb-15.sm:pb-30` | 1925 | 2895 | Header + 12-col grid of 5 work cards |
| 4 | Approach (Growing Products) | `section.container` | 4820 | 692 | Full-bleed image + overlay text + CTA |
| 5 | Insights | `section.relative.pb-15.sm:pb-30` | 5512 | 904 | Header + 3 article cards (1 with Mux video) |
| F | Footer / Build Your New Future With Us | `footer.bg-blue.text-white.pt-15.pb-8` | 6416 | 1260 | Big "NewStudio" wordmark + sitemap |

## Interaction Model

- **Header**: morphs on scroll. At scrollY ≤ ~50, the nav is full-width with all 4 links visible (`block`). Above ~60, links get `display:none` and pill shrinks to ~472px wide (logo + hamburger). Transition: `all` (smoothed, ~300ms).
- **Hero canvas**: blue silk animation rendered to a single canvas in the hero (full viewport).
- **Ambition section**: pure scroll, no interactions; auto-playing Mux video plays the press carousel (autoplay, loop, muted).
- **Selected Work cards**: hover opacity 80% on links (transition all 300ms).
- **Approach section**: full-bleed image with overlay; "Our Approach" CTA button (blue pill).
- **Insights cards**: Mux video plays on the second card (autoplay/loop/muted).
- **Footer**: gigantic NewStudio wordmark spans full width.
- **Smooth scroll**: Lenis (`html.lenis`).

## Mux Video Asset Map

- Player 1 → playback-id `s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00` — ambition press carousel (16:9, full container width)
- Player 2 → playback-id `WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E` — insight card 2 thumbnail (4-col, 354h)

URLs follow pattern: `https://stream.mux.com/<playback-id>/medium.mp4`

## Image Asset Map (Sanity CDN)

All under `https://cdn.sanity.io/images/sym1v71u/production/...?auto=format&fm=webp&q=90`:

| Slot | Filename | Dimensions | Alt |
|------|----------|-----------|-----|
| Work card 1 | `d640a2e343fa1d75323583685086a8b11caba5-4000x3000.jpg` | 4000×3000 | "SOROS logo on gradient" |
| Work card 2 | `3737ada2253f517d8c9bc975396839a5f9cb7ef-2186x1061.png` | 2186×1061 | "Robotic Implant Center" |
| Work card 3 | `f88416219d0a433d8614c6de800531a268f0f06a-3712x2296.webp` | 3712×2296 | "Front of a library building with banners." (Utica) |
| Work card 4 | `20d282c91ade23ed3d2d70e5fef1d3cd8f49813f-3000x1856.webp` | 3000×1856 | Citi Bike Plus van |
| Work card 5 | `<bus-stop-hint>-...webp` | TBD | "Bus stop ad for Hint" |
| Approach hero | hand-drawing image | TBD | Hand drawing logos |
| Insight 1 | rainbow gradient | TBD | "the future of design isn't design" |
| Insight 3 | podium photo | TBD | "Jonathan Lin gives talk at AICAD Conference" |
