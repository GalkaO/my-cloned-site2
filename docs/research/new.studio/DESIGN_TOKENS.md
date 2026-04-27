# new.studio — Design Tokens

Source: extracted via `getComputedStyle(document.documentElement)` from production site.

## Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--white` | #f7f7f7 | rgb(247, 247, 247) | page background, dark-section text |
| `--color-black` | #000014 | rgb(0, 0, 20) | primary text |
| `--blue` | #0000f8 | rgb(0, 0, 248) | accent, CTA buttons, footer bg |
| `--light-blue` | #1869f4 | rgb(24, 105, 244) | secondary blue |
| `--orange` | #f49518 | rgb(244, 149, 24) | accent |
| `--green` | #00f2a2 | rgb(0, 242, 162) | accent |
| `--purple` | #b217f3 | rgb(178, 23, 243) | accent |
| `--color-gray` | #e0e0e3 | rgb(224, 224, 227) | borders, hr, tag chips |
| `--light-gray` | #e0e0e366 | rgba(224, 224, 227, 0.4) | subtle bg, navbar pill |
| `--dark-gray` | #00001466 | rgba(0, 0, 20, 0.4) | secondary/muted text |

## Typography

Two font families:
- **FoundersGrotesk** (sans-serif) — body, UI, p1 (20px), p2 (16px). var: `--font-founders-grotesk`. Default font.
- **MartinaPlantijn** (serif, italic for emphasis) — h1, h2, h3 display headings. var: `--font-martina-plantijn`.

Fluid typography (clamp):
| Token | Min | Slope | Max | Description |
|-------|-----|-------|-----|-------------|
| `--font-size-h1` | 2.3125rem (37px) | .85rem + 6vw | 6.25rem (100px) | hero h1 |
| `--font-size-h2` | 2rem (32px) | 1.2958rem + 3.0047vw | 4rem (64px) | section h2 |
| `--font-size-h3` | 1.75rem (28px) | 1.2857rem + 1.9048vw | 3rem (48px) | h3 |
| `--font-size-p1` | — | — | 1.25rem (20px) | large body |
| `--font-size-p2` | — | — | 1rem (16px) | regular body |
| `--font-leading-h1` | 3.125rem (50px) | 1.7786rem + 5.5238vw | 6.75rem (108px) | h1 line-height |
| `--font-leading-h2` | 2.5rem (40px) | 1.8036rem + 2.8571vw | 4.375rem (70px) | h2 line-height |
| `--font-leading-p1` | — | — | 1.5rem (24px) | p1 line-height |
| `--font-leading-p2` | — | — | 1.375rem (22px) | p2 line-height |

`--font-weight-normal: 400` (only weight in use)

## Spacing & Layout

| Token | Value | Description |
|-------|-------|-------------|
| `--spacing` | .25rem (4px) | tailwind unit |
| `--container-6xl` | 72rem (1152px) | max content width |
| `--container-margin` | clamp(1.25rem, .7857rem + 1.9048vw, 2.5rem) (20-40px) | side padding |
| `--grid-gap` | 1.25rem (20px) | grid gap default |
| `--grid-columns` | 12 | desktop grid columns (4 on mobile via `[--span:4]`) |
| `--svh` | 1% of small viewport height | mobile-safe vh |
| `--full-height` | calc(var(--svh) * 100) | full viewport height |

Container max-width via Tailwind `container` class is 1456px on desktop (1536 - 80 padding).

## Effects

| Token | Value |
|-------|-------|
| `--blur-lg` | 16px (used for navbar pill backdrop) |
| `--ease-out` | cubic-bezier(0,0,.2,1) |
| `--ease-in-out` | cubic-bezier(.4,0,.2,1) |
| `--default-transition-duration` | .15s |
| `--radius-xs` | .125rem (2px) |
| `--radius-md` | .375rem (6px) |
| `--radius-lg` | .5rem (8px) — **navbar pill** |
| `--aspect-video` | 16/9 |

Navbar shadow (multiple layers):
```
0 0 0 2px oklab(0.976 0 0 / 0.3),     /* outer ring */
inset 0 0 60px 0 rgba(255,255,255,.3), /* inset glow */
inset 0 0 60px 0 rgba(255,255,255,.3), /* doubled */
0 4px 20px 0 rgba(0,0,20,.2)          /* drop shadow */
```

Navbar bg: `oklab(0.907556 0.00117788 -0.00386381 / 0.24)` ≈ rgba(231, 231, 232, 0.24) with backdrop-blur(16px) — looks like `bg-light-gray/60`.
Navbar ring: `ring-2 ring-white/30`.

## Custom Tailwind Utility Classes Observed

- `container` → max-w-6xl + auto margins + container-margin padding
- `custom-flex-grid`, `custom-grid` → layout grids with `[--span:N]` data
- `nav-hide` → display:block default, display:none when scrolled past hero
- `bg-light-gray/60`, `bg-blue`, `text-dark-gray`, `text-white` → from custom theme
- `h-(--full-height)` → full viewport height (Tailwind v4 arbitrary value)
- `pt-15`, `pb-15`, `mt-15` → 15 * 4 = 60px (Tailwind v4 spacing scale)
- `pt-30`, `pb-30` → 120px

## Breakpoints (Tailwind v4 default)

- `sm:` — 40rem (640px)
- `md:` — 48rem (768px)
- `lg:` — 64rem (1024px)
- `xl:` — 80rem (1280px)
- `2xl:` — 96rem (1536px)

The site mostly uses `sm:` for tablet+ (e.g., `sm:pt-30`, `sm:gap-y-16`, `sm:col-span-6`) and `md:` for layout flips (e.g., `md:flex-row`).

## Animation Variables

`html.lenis` indicates Lenis smooth scroll is active.
Header transitions use `transition: all` with default duration.

## Brand Voice / Content

- Studio: New Studio Partners Inc.
- Address: 25 Broadway, 10th Floor, New York, NY 10004
- Email: hello@new.studio
- Schedule a call link: external Cal.com or similar
- Social: Instagram, TikTok, GitHub, LinkedIn, X
- Copyright: © 2026 New Studio Partners Inc.
