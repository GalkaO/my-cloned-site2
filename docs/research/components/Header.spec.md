# Header Specification

## Overview
- **Target file:** `src/components/sections/Header.tsx`
- **Interaction model:** scroll-driven (CSS class toggle based on scroll position)
- **Location:** Fixed at top, persists across all sections

## DOM Structure
```
<header class="custom-flex-grid fixed top-5 left-1/2 z-50 container w-full -translate-x-1/2 justify-center">
  <nav class="bg-light-gray/60 relative rounded-lg shadow-... ring-2 ring-white/30 backdrop-blur-lg">
    <button class="flex w-full h-14 items-center justify-between px-4 sm:px-6 cursor-pointer" aria-label="Navigation menu - Click to open">
      <a class="block w-22" href="/" aria-label="Home">
        <NewStudioLogo />
      </a>
      <div class="relative flex items-center gap-6">
        <a class="w-fit block nav-hide" href="/work">Case Studies</a>
        <a class="w-fit block nav-hide" href="/approach">Approach</a>
        <a class="w-fit block nav-hide" href="/insights">Insights</a>
        <a class="w-fit block nav-hide" href="/contact">Contact</a>
        <span class="menu-icon-area">≡</span>
      </div>
    </button>
  </nav>
</header>
```

## Computed Styles

### Outer header
- position: fixed; top: 20px (5 in tailwind v4 spacing = 1.25rem = 20px); left: 50%; translate-x: -50%
- max-width: 1600px (`max-w-[1600px]` or container with padding)
- padding: 0px 40px (var(--container-margin))
- height: 56px
- z-index: 50

### Inner nav (the pill)
- background: `oklab(0.907556 0.00117788 -0.00386381 / 0.24)` ≈ rgba(231, 231, 232, 0.24) — use `bg-light-gray/60`
- backdrop-filter: blur(16px) — use `backdrop-blur-lg`
- border-radius: 8px (rounded-lg)
- box-shadow: stacked
  ```
  0 0 0 2px oklab(0.976 0 0 / 0.3),
  inset 0 0 60px 0 rgba(255,255,255,0.3),
  inset 0 0 60px 0 rgba(255,255,255,0.3),
  0 4px 20px 0 rgba(0,0,20,0.2)
  ```
- ring: ring-2 ring-white/30
- height: 56px
- transition: all 300ms cubic-bezier(.4,0,.2,1)

### Navigation links (default state)
- color: rgb(0, 0, 20) (black)
- font-size: 16px
- font-family: FoundersGrotesk
- font-weight: 400
- hover: opacity 0.8, transition 200ms
- visible: `display: block` (class `nav-hide`)

### Logo (NewStudio)
- font-family: FoundersGrotesk
- font-size: 0.9375rem (15px)
- color: rgb(0, 0, 20)

## States & Behaviors

### Scroll-Triggered Pill Collapse (CRITICAL)

**Trigger:** scrollY > 50px

**State A — at top (scrollY ≤ 50):**
- Outer nav width: full container width (~1456px on 1536 viewport, scales down with --container-margin)
- All nav links visible (`display: block`)
- Inner nav `max-width: 100%` essentially

**State B — scrolled (scrollY > 50):**
- Outer nav `max-width: 472px` (compact pill)
- Nav links hidden via class `nav-hide-collapsed` (`display: none`)
- Pill remains centered

**Transition:** `transition: all 300ms cubic-bezier(.4,0,.2,1)` on max-width and on link visibility (use opacity+display transition or width-based hiding).

**Implementation approach:**
1. `useState<boolean>` `isScrolled`.
2. `useEffect` adds scroll listener (throttle via rAF). When `window.scrollY > 50`, set `isScrolled` true; below 50, set false.
3. Apply conditional className: `isScrolled ? "max-w-[472px]" : "max-w-full"` (or wrap with a state attribute and use Tailwind `data-[scrolled=true]:max-w-[472px]`).
4. Hide links: when `isScrolled` is true, links get `nav-hide-collapsed` class.

## Hover States
- Each link: `hover:opacity-80 transition-opacity duration-200`

## Text Content (verbatim)
- Logo wordmark: "NewStudio"
- Links: Case Studies → /work, Approach → /approach, Insights → /insights, Contact → /contact

## Responsive Behavior
- **Desktop (1440px+):** all links visible until scroll > 50, then collapses to logo + hamburger pill.
- **Mobile (<640px):** Always shows compact pill (logo + hamburger) — `nav-hide` is `display: none` on mobile by default, regardless of scroll.

The compact-pill width should be `~min(472px, calc(100% - var(--container-margin)*2))` so it never overflows on small viewports.
