# FLEX — Universal Neo-Brutalist Website Template

A bold, editorial, neo-brutalist website template engineered for rapid hackathon deployment. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Zustand, and anime.js v4.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build & type check
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the active preset.
Open [http://localhost:3000/styleguide](http://localhost:3000/styleguide) to inspect all components and token controls.

---

## ⌨️ Keyboard Shortcuts & Dev Panel

- **` (Backtick)**: Toggles the floating **Dev Panel** anywhere on the site.
  - Live preset switching (`agency`, `tool`, `dashboard`, `saas`, `event`)
  - Accent color picker (7 presets)
  - Style mode toggle (`brutal`, `clean`, `soft`)
  - Dark mode / Light mode toggle
  - Global animation toggle

---

## 📁 Project Structure

```
src/
  app/
    layout.tsx              # Root layout with theme initializer
    page.tsx                # Dynamic renderer for active preset
    [slug]/page.tsx         # Slug page router
    styleguide/page.tsx     # Complete component & visual showcase
    api/                    # Mock data & AI route stubs
  config/
    site.config.ts          # Core site metadata, nav, active preset
    theme.config.ts         # Accent colors, fonts, style modes
    motion.config.ts        # anime.js v4 timing and ease tokens
    presets/                # 5 complete presets (agency, tool, dashboard, saas, event)
  components/
    ui/                     # Button, Highlight, Pill, Counter, Crosshair, etc.
    layout/                 # Header, Footer, Section, Container, DevPanel
    sections/               # Hero, SplitBand, WorkGrid, ToolPanel, Pricing, FAQ, etc.
    hero/                   # HeroVisual switch (blob, CSS blob, globe, toolCard, etc.)
    motion/                 # MotionProvider, useAnimeScope, CustomCursor, Preloader
  lib/
    registry.tsx            # Section ID → Lazy component registry
    tool.ts                 # The interactive tool pipeline (single hackathon file)
    hooks.ts                # useTool() and useLiveData()
    store.ts                # Zustand global store with localStorage persistence
    cn.ts                   # Class merging utility
```

---

## 🎨 Design DNA & System Rules

1. **Colossal Condensed Headlines**: Tight uppercase typography with negative tracking.
2. **Surgical Accent Color**: Acid lime (`#DFFF1F`) used on highlighter brush strokes, pills, and CTAs.
3. **Highlighter Device**: Reusable `<Highlight>` with rough SVG brush stroke textures.
4. **Circle-Arrow Motif**: Signature `↗` circular button used in navigation, inline in headlines, and on cards.
5. **Interactive Tool Seam**: Pre-wired weighted calculator in `src/lib/tool.ts` with schema-driven forms.
6. **anime.js v4 Motion**: Declarative data-attribute animation engine (`data-anim="reveal-up|fade|scale-in|tilt|magnetic"`).

---

## 📖 Documentation

- [5-Minute Swap Guide](docs/SWAP_GUIDE.md)
- [Hackathon Agent Reskin Prompt](docs/RESKIN_PROMPT.md)
- [System Architecture](docs/ARCHITECTURE.md)
- [Assets Needed](ASSETS_NEEDED.md)
- [Build Log](BUILD_LOG.md)
