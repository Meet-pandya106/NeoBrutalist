# FLEX — 5-Minute Swap Guide

> How to transform this template for any hackathon theme in under 5 minutes without touching component code.

---

## 1. Change Brand Name & Logo
Edit `src/config/site.config.ts`:
```ts
export const siteConfig: SiteConfig = {
  name: 'YOUR_BRAND',
  logo: { type: 'text', value: 'YOUR_BRAND' },
  tagline: 'Your punchy one-liner',
  // ...
}
```

## 2. Switch Preset (The Fastest Path)
Change one string in `src/config/site.config.ts` or hit the **` (backtick)** key to switch live in the dev panel:
- `'agency'` — Editorial agency, high craft, split hero, work grid, CTA band (matches BRVND reference)
- `'tool'` — Calculator / estimator landing with live formula and results breakdown
- `'dashboard'` — Analytics & metrics view with charts and real-time counters
- `'saas'` — Modern software landing with features, tier pricing, and testimonials
- `'event'` — Conference / hackathon page with countdown, speakers, and schedule

## 3. Change Accent Color
One-line edit in `src/config/theme.config.ts` or in the active preset:
```ts
accent: '#DFFF1F', // Acid Lime (default)
// Or pick from presets:
// Electric Orange: #FF5B1F | Cyan: #1FE0FF | Hot Pink: #FF2E93
// Signal Green: #1FFF7A   | Lilac: #B79BFF | Solar Yellow: #FFD500
```
Every button, highlighter brush stroke, badge, and glow updates instantly across the entire application.

## 4. Switch Style Mode
Toggle between three distinct aesthetics in `src/config/theme.config.ts`:
- `'brutal'` — 2px solid ink borders, 6px hard offset drop-shadows, zero radius
- `'clean'` — Borderless, flat, card rounded corners
- `'soft'` — Subtle soft blur shadows, rounded pill styling

## 5. Edit Page Copy & Sections
Open `src/config/presets/<preset-name>.ts`. Every section is a declarative JSON block:
```ts
sections: [
  {
    id: 'hero',
    props: {
      pill: 'YOUR CATEGORY PILL',
      headline: 'COLOSSAL\\nHEADLINE\\nHERE',
      paragraph: 'Your believable, punchy pitch paragraph.',
      ctaLabel: 'GET STARTED',
      ctaHref: '/contact',
      visual: 'blob', // 'blob' | 'blobCss' | 'globe' | 'toolCard' | 'chart' | 'chatPreview' | 'mapPins'
    }
  },
  // Reorder, delete, or add sections by editing this array!
]
```

## 6. Wire Your Custom Tool Logic (Hackathon Seam)
Open `src/lib/tool.ts`:
```ts
export async function runTool(input: ToolInput): Promise<ToolOutput> {
  // >>> WIRE YOUR HACKATHON LOGIC HERE <<<
  const { budget, timeline, teamSize } = input
  
  return {
    score: 88,
    headline: 'Optimal Project Viability',
    breakdown: [
      { label: 'Budget Efficiency', value: 92, unit: '%' },
      { label: 'Feasibility', value: 84, unit: '%' }
    ],
    suggestions: ['Proceed with phase 1 implementation immediately.']
  }
}
```
Define your inputs in `src/config/presets/tool.ts` under `toolPanel` `fields: [...]`. The form generates automatically.

## 7. Toggle Motion / Dev Tools
- Press **` (backtick)** at any time to open the floating Dev Panel.
- Toggle animations on/off, change theme, or switch presets in real time.
- Respects `prefers-reduced-motion` automatically.

## 8. Deploy
```bash
npm run build
# Ready for Vercel, Netlify, Cloudflare Pages, or Docker
```
