# FLEX — Asset Manifest

> Generated at build start. Assets marked "Code-generated" will be created during build.
> Assets marked "Need from user" require external generation or download.

## Fonts

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | AI Prompt / Source | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-------------------|-------------|-----------|
| 1 | Bebas Neue Bold | Display headlines | WOFF2 | ~30KB | No | Download from Google Fonts | System: "Impact", "Arial Narrow", sans-serif | `/public/fonts/BebasNeue-Regular.woff2` |
| 2 | Inter Regular/Medium/SemiBold/Bold | Body, UI text | WOFF2 | ~80KB total | No | Download from Google Fonts | System: -apple-system, "Segoe UI", sans-serif | `/public/fonts/Inter-*.woff2` |
| 3 | JetBrains Mono Regular | Labels, counters, code | WOFF2 | ~30KB | No | Download from Google Fonts | System: "Consolas", "Courier New", monospace | `/public/fonts/JetBrainsMono-Regular.woff2` |

## Hero Visuals

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | AI Prompt | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-----------|-------------|-----------|
| 4 | Iridescent blob SVG | Default hero visual | SVG | ~500x500 | Yes | N/A — layered SVG gradients | Self (code-generated) | Inline component |
| 5 | High-quality iridescent blob | Optional hero upgrade | PNG/WebP | 800x800, transparent bg | No | "A glossy iridescent liquid-metal blob sculpture floating in empty space, deep purple and blue and magenta gradient surface with chromatic reflections, glossy black obsidian core visible through the translucent surface, one bright acid-yellow/lime streak accent highlight, specular studio lighting from above-right, transparent background, 3D render, ultra-high quality, cinema 4D style" | SVG blob (asset #4) | `/public/images/hero/blob-hq.webp` |
| 6 | CSS blob fallback | Lightweight hero | CSS | N/A | Yes | N/A | Self | Inline CSS |

## Textures

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | AI Prompt | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-----------|-------------|-----------|
| 7 | Liquid chrome texture | CTA band background | JPG/WebP | 16:9, 1440x810 | No | "Abstract liquid chrome metallic texture, black and white with high contrast, flowing mercury-like reflections, liquid metal ripples, dramatic studio lighting, seamless tileable, monochrome" | CSS radial-gradient chrome simulation | `/public/images/textures/chrome.webp` |
| 8 | Film grain overlay | Decorative texture | PNG | 512x512, tileable | Yes | N/A — SVG feTurbulence filter | Self (CSS/SVG generated) | Inline CSS filter |
| 9 | Paper noise | Subtle background texture | PNG | 256x256, tileable | Yes | N/A — CSS noise function | Self (CSS generated) | Inline CSS |

## Decorative SVGs (All Code-Generated)

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-------------|-----------|
| 10 | Brush stroke highlight (shape 1) | `<Highlight>` component | SVG | inline | Yes | Self | `/public/svg/brush-1.svg` |
| 11 | Brush stroke highlight (shape 2) | `<Highlight>` component | SVG | inline | Yes | Self | `/public/svg/brush-2.svg` |
| 12 | Brush stroke highlight (shape 3) | `<Highlight>` component | SVG | inline | Yes | Self | `/public/svg/brush-3.svg` |
| 13 | Crosshair / plus mark | Decorative corners | SVG | 24/32/48px | Yes | Self | Inline component |
| 14 | Wireframe globe | Hero decoration | SVG | 200x200 | Yes | Self | Inline component |
| 15 | Circular text badge | Rotating text around circle-arrow | SVG | 120x120 | Yes | Self | Inline component |
| 16 | Arrow set (↗ ↘ → ←) | Buttons, links | SVG | 16/24/32px | Yes | lucide-react icons | Inline component |
| 17 | Grid pattern | Background decoration | SVG | tileable | Yes | Self | Inline component |
| 18 | Blob mask shapes (3) | Image clipping | SVG | viewBox | Yes | Self | Inline component |

## Photography (Placeholder Strategy: Duotone gradient tiles with accent color)

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | AI Prompt | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-----------|-------------|-----------|
| 19 | Agency work samples (4) | Work grid cards | WebP | 1:1, 600x600 | No | "Bold graphic design poster mockup, dark background, modern typography, studio photography" (×4 variations) | Duotone gradient tile | `/public/images/work/work-{1-4}.webp` |
| 20 | Split band portrait | Split band section | WebP | 3:4, 600x800 | No | "Close-up black and white portrait, dramatic eye detail, high contrast studio lighting, editorial style" | Duotone gradient tile | `/public/images/hero/split-portrait.webp` |
| 21 | Team portraits (4-6) | Team section | WebP | 1:1, 400x400 | No | "Professional headshot portrait, neutral background, modern editorial style, confident expression" (×6) | Gradient avatar circles | `/public/images/team/person-{1-6}.webp` |
| 22 | Testimonial avatars (4) | Testimonials | WebP | 1:1, 80x80 | No | Same as team but smaller | Gradient avatar circles | `/public/images/avatars/avatar-{1-4}.webp` |
| 23 | Product shots (4) | Store preset | WebP | 1:1, 600x600 | No | "Minimal product photography, white background, modern consumer product, studio lighting" | Gradient tiles | `/public/images/products/product-{1-4}.webp` |
| 24 | Food shots (4) | Restaurant preset | WebP | 4:3, 800x600 | No | "Overhead food photography, dark moody style, gourmet plating, dramatic lighting" | Gradient tiles | `/public/images/food/dish-{1-4}.webp` |
| 25 | Event/venue (2) | Event preset | WebP | 16:9, 1200x675 | No | "Modern conference venue, dramatic lighting, stage setup, wide angle" | Gradient tiles | `/public/images/events/venue-{1-2}.webp` |

## Logos

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-------------|-----------|
| 26 | FLEX brand logo | Site logo | SVG | auto | Yes — text SVG | Text "FLEX" in display font | `/public/svg/logo.svg` |
| 27 | Client/partner logos (6) | Logo cloud | SVG | varied | Yes — abstract geometric marks | Generated geometric SVGs | `/public/svg/logos/client-{1-6}.svg` |
| 28 | Social icons | Footer, contact | SVG | 24x24 | Yes | lucide-react icons | Inline via lucide |
| 29 | Payment icons (4) | Store preset | SVG | 32x20 | Yes | Simple rectangles | `/public/svg/payment/` |

## Favicon / App Icons / OG

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-------------|-----------|
| 30 | Favicon | Browser tab | ICO/SVG | 32x32 | Yes — SVG | Bold "F" letter | `/public/favicon.ico`, `/public/icon.svg` |
| 31 | Apple touch icon | iOS | PNG | 180x180 | Yes | Bold "F" on accent | `/public/apple-touch-icon.png` |
| 32 | OG image | Social sharing | PNG | 1200x630 | Yes — generated route | Bold template with site name | `/public/images/og-default.png` or route |

## Video (Optional)

| # | Asset | Purpose | Format | Size/Ratio | Code-gen? | AI Prompt | Placeholder | File Path |
|---|-------|---------|--------|-----------|-----------|-----------|-------------|-----------|
| 33 | Hero loop video | Video hero variant | MP4/WebM | 16:9, 1280x720, <8MB, 6-10s | No | "Abstract liquid chrome morphing slowly, dark background, iridescent reflections, seamless loop" | Poster image / blob SVG | `/public/video/hero-loop.mp4` |

## Icons

lucide-react covers all UI icon needs. No custom icons required beyond the decorative SVGs listed above.

## Audio (Optional, off by default)

| # | Asset | Purpose | Format | Code-gen? | File Path |
|---|-------|---------|--------|-----------|-----------|
| 34 | Hover tick | Interaction feedback | MP3 | No — optional | `/public/audio/tick.mp3` |
| 35 | Click pop | Button feedback | MP3 | No — optional | `/public/audio/pop.mp3` |

## 3D (Optional, behind flag)

| # | Asset | Purpose | Format | Code-gen? | Placeholder | File Path |
|---|-------|---------|--------|-----------|-------------|-----------|
| 36 | HDR environment map | Three.js lighting | HDR | No | Built-in lighting | `/public/3d/env.hdr` |

---

## Summary: What You Need to Supply

After build, the following assets should be replaced for a polished look:

1. **Font files** — Download from Google Fonts (Bebas Neue, Inter, JetBrains Mono)
2. **Hero blob HQ image** — Generate with the AI prompt above (#5)
3. **Chrome texture** — Generate with the AI prompt above (#7)
4. **Work sample photos** (4) — Generate or source (#19)
5. **Split band portrait** — Generate or source (#20)
6. **Team portraits** (4-6) — Generate or source (#21)
7. **Testimonial avatars** (4) — Generate or source (#22)
8. **Product shots** (4) — For store preset (#23)
9. **Food shots** (4) — For restaurant preset (#24)
10. **Event venue photos** (2) — For event preset (#25)
11. **Hero video** (optional) — For video hero variant (#33)
12. **Audio files** (optional) — For interaction sounds (#34-35)
13. **HDR environment map** (optional) — For 3D hero (#36)

All other assets are code-generated and will work out of the box.
