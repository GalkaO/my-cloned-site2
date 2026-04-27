# Footer Specification

## Overview
- **Target file:** `src/components/sections/Footer.tsx`
- **Interaction model:** static
- **Position:** bottom of page

## DOM Structure
```
<footer class="bg-blue pt-15 pb-8 text-white sm:pt-30">
  <div class="container flex flex-col gap-15 sm:gap-30">
    <!-- Top: Build Your New Future With Us + description -->
    <div class="custom-grid">
      <div class="col-span-4 sm:col-span-7">
        <h2 class="h2 text-white">Build Your New<br />Future With Us</h2>
      </div>
      <div class="col-span-4 sm:col-span-5">
        <p class="p2 text-white max-w-md">
          New Studio is a New York-based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.
        </p>
      </div>
    </div>

    <!-- Middle: 3 rows of sitemap / visit / work with us -->
    <div class="flex flex-col">
      <Row title="Sitemap">
        <a href="/">Home</a>
        <a href="/work">Case Studies</a>
        <a href="/approach">Approach</a>
        <a href="/insights">Insights</a>
        <a href="/contact">Contact</a>
      </Row>
      <Row title="Visit">
        <a href="https://maps.app.goo.gl/viig1nF1h1BKwkhWA" target="_blank">25 Broadway, 10th Floor</a>
        <span>New York, NY 10004</span>
      </Row>
      <Row title="Work With Us">
        <a href="mailto:hello@new.studio">hello@new.studio</a>
        <a href="https://book.new.studio/#/newstudio" target="_blank">Schedule a call</a>
      </Row>
    </div>

    <!-- Big NewStudio wordmark -->
    <div class="w-full overflow-hidden">
      <p
        class="font-serif text-white leading-none"
        style={{
          fontSize: "clamp(6rem, 17.5vw, 16rem)",
          letterSpacing: "-0.02em",
        }}
      >NewStudio</p>
    </div>

    <!-- Bottom: socials + copyright -->
    <div class="flex w-full flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
      <div class="flex gap-6">
        <a href="https://instagram.com/newstudio">Instagram</a>
        <a href="https://tiktok.com/@newstudio">TikTok</a>
        <a href="https://github.com/newstudio">GitHub</a>
        <a href="https://linkedin.com/company/newstudio">LinkedIn</a>
        <a href="https://x.com/newstudio">X</a>
      </div>
      <p class="p2 text-white">© 2026 New Studio Partners Inc.</p>
    </div>
  </div>
</footer>
```

Where each `<Row title="...">` uses a 12-col custom-grid with title in cols 1-3, and content stacked in cols 4-12 (or right-aligned), with a horizontal rule between rows.

```
<div class="custom-grid border-t border-white/20 py-8">
  <p class="col-span-4 sm:col-span-3 p2 text-white">{title}</p>
  <div class="col-span-4 sm:col-span-9 flex flex-col gap-2 p2 text-white sm:items-end">
    {children}
  </div>
</div>
```

But looking at the actual render, the layout is: `Sitemap` label on left, links on RIGHT (right column shows Home, Case Studies, etc. stacked).

## Computed Styles

### Footer
- background: var(--color-blue) #0000f8
- color: rgb(247, 247, 247) (white)
- padding-top: 60px (`pt-15`) mobile / 120px (`sm:pt-30`)
- padding-bottom: 32px (`pb-8`)

### "Build Your New Future With Us" h2
- font-family: MartinaPlantijn
- font-size: 64px (h2 clamp)
- line-height: 70px
- color: white
- can be `<p>` with span line break or `<h2>` with `<br>`

### Description p
- p2 (16px), color white
- max-width: ~28rem so it stays compact

### Section row
- 12-col grid
- border-top: 1px solid rgba(255,255,255,0.2)
- padding-block: 32px
- title col-span 3 on desktop, content right-aligned col-span 9

### Big "NewStudio" wordmark
- font-family: MartinaPlantijn (italic? — NO, looking at screenshot it's the SANS-serif FoundersGrotesk)
- WAIT: looking at the screenshot more carefully, the giant "NewStudio" is the same font as the rest of the body — FoundersGrotesk. Use `font-family: var(--font-sans)`.
- font-size: ~232px on desktop (1456px width / 6.27 ≈ 232px). Use `clamp(6rem, 17.5vw, 16rem)` to match.
- line-height: 1 (leading-none)
- letter-spacing: -0.02em (slight tightening)
- color: white
- Render as a single text line; let it overflow horizontally if needed. The original uses an SVG with full width fitting (1360x217 viewBox). Either approach works visually:
  - Approach A (text): single `<p>` with massive font-size that fills width. Works if calculated correctly.
  - Approach B (SVG): use the actual `NEW` SVG path (provided in extraction). Each letter is a `<path data-scroll-letter="true">`.

For our clone, **Approach A (text)** is simplest and crisp. Use:
```
<p style={{ fontSize: "min(17.5vw, 16rem)", lineHeight: 1, letterSpacing: "-0.025em" }}>
  NewStudio
</p>
```

### Socials row
- font: p2 (16px) white
- gap-x: 24px (gap-6)
- copyright on right side on `md:` breakpoint, below on mobile

## Sitemap row content
- Title: "Sitemap"
- Links (right column, stacked): Home, Case Studies, Approach, Insights, Contact

## Visit row content
- Title: "Visit"
- Right column:
  - "25 Broadway, 10th Floor" (link to Google Maps)
  - "New York, NY 10004" (plain text)

## Work With Us row content
- Title: "Work With Us"
- Right column:
  - "hello@new.studio" (mailto link)
  - "Schedule a call" (external link to book.new.studio)

## States & Behaviors
- Links: `hover:underline` (or `hover:opacity-80`)

## Text Content (verbatim)
- Headline: `Build Your New Future With Us` (line break after "New")
- Description: `New Studio is a New York-based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.`
- Sitemap entries: Home, Case Studies, Approach, Insights, Contact
- Visit entries: "25 Broadway, 10th Floor", "New York, NY 10004"
- Work With Us entries: "hello@new.studio", "Schedule a call"
- Bottom socials: Instagram, TikTok, GitHub, LinkedIn, X
- Copyright: `© 2026 New Studio Partners Inc.`

## Responsive Behavior
- **Desktop (≥640px):** 12-col grids, headline + description side-by-side, socials row horizontal with copyright right-aligned.
- **Mobile (<640px):** 4-col stacked grids; headline above description; rows stack title/content vertically; copyright stacks below socials.
- Big NewStudio wordmark scales fluidly via `clamp(6rem, 17.5vw, 16rem)` — about 96px on mobile, ~250px on desktop.
