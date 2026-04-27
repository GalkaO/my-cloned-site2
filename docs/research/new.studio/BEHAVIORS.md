# new.studio — Behavior & Interaction Bible

## Smooth Scroll
- Lenis is active (html.lenis class).
- Setup: `npm install lenis`. Wrap app in a Lenis wrapper that drives requestAnimationFrame.

## Header Scroll Transformation

**Trigger:** scrollY ≥ ~50px (transitioning between 50 and 60).
**State A (top, scrollY ≤ 50):**
- Outer header position: fixed, top: 20px, padding: 0 40px
- Inner nav (`<nav>`) width: full container width (1456px on desktop)
- All nav links visible (`display: block`, classes: `w-fit block nav-hide`)
- Background pill: `bg-light-gray/60 backdrop-blur-lg` ring-2 ring-white/30 rounded-lg shadow-... 

**State B (scrolled, scrollY > 60):**
- Inner nav width: ~472px (compact pill — only logo + hamburger visible)
- Nav links display: none (CSS class `.nav-hide` overridden via JS-driven className toggle, OR via `[data-scrolled]` attribute on header)
- Pill is centered (`left-1/2 -translate-x-1/2`)

**Transition:** `transition: all` with default duration (~150ms).

**Implementation approach:**
- Use a scroll listener (or IntersectionObserver on hero sentinel) to flip a boolean `isScrolled`.
- Apply conditional classes on the nav: `isScrolled ? "max-w-[472px]" : "max-w-full"` and toggle nav-hide elements.

## Hero Canvas Animation

- Single `<canvas>` element fills the hero (1536x769 at desktop).
- Renders the blue silk gradient animation.
- Implementation likely a custom WebGL / 2D canvas shader with noise/flow.
- For our clone: replace with a static or looping CSS `linear-gradient` background OR a still PNG of the blue silk pattern (acceptable simplification).
- Alternative: A gradient + animated `filter: blur` mesh.

## Mux Video Players

Mux Player auto-plays muted, loop, playsinline. We use `@mux/mux-player-react`.

- **Press carousel video** (Ambition section) — playback-id `s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00`. Aspect 16:9. Always playing.
- **Insight card video** (card 2) — playback-id `WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E`. Aspect ~4:3. Always playing.

## Hover States

- Work cards: parent `<a>` has `hover:opacity-80 transition-all duration-300`. Child elements unchanged.
- Insight cards: same pattern.
- "All Work" / "Explore All" / "Our Approach" CTA buttons (blue pills): `hover:opacity-90 transition-opacity` (assumed).
- Header nav links: `hover:opacity-80` (default).
- Footer links: `hover:underline`.

## Responsive Layout Switches

Confirmed Tailwind classes observed:
- Hero h1: `text-h1` fluid (37 → 100px).
- Section padding: `pt-15 sm:pt-30` (60 → 120px).
- Manifesto: `flex-col gap-8 md:flex-row md:items-end` (stacks on mobile, row on tablet+).
- Work card grid: `col-span-4` mobile (4-col grid), `sm:col-span-6` / `sm:col-span-5 sm:col-start-8` / `sm:col-span-12` desktop (12-col grid).
- Insight cards: `col-span-4` (mobile = full width, but on desktop the grid is 12 cols so 3 cards × col-span-4).
- Approach: `h-[calc(var(--svh)*90)] portrait:h-[calc(var(--svh)*70)]` (90vh landscape, 70vh portrait).

## Footer Wordmark

- Massive "NewStudio" text spans full container width.
- font: MartinaPlantijn (serif), font-size: probably auto-fit via responsive clamp / font-size-h0.
- color: `--white` on `--blue` background.

## Section Overlap

- Section 2 (Ambition) has `-mt-15 sm:-mt-30` (negative top margin) so it visually overlaps the bottom of the hero.
- Section 2 also has `relative z-1` so it sits above the hero.

## What's NOT scroll-driven

- No tabbed content, no scroll-snap on body, no parallax layers.
- No scroll-driven progress indicators.
- The whole page is one long flow with smooth-scroll easing only.
