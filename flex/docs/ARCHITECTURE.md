# FLEX System Architecture

## 1. System Overview

```
                          ┌───────────────────────────┐
                          │   src/config/site.config  │
                          │   (Active Preset ID, SEO) │
                          └─────────────┬─────────────┘
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │   src/config/presets/*    │
                          │  (agency, tool, saas...)  │
                          └─────────────┬─────────────┘
                                        │
                         Page Definition & Section Array
                                        │
                                        ▼
┌──────────────────────┐  ┌───────────────────────────┐  ┌──────────────────────┐
│  src/app/globals.css │  │ src/components/layout/    │  │ src/components/      │
│  (Design Tokens /    │─▶│   PageRenderer            │◀─│   MotionProvider     │
│   CSS Variables)     │  │ (ScrollProgress + Shell)  │  │ (anime.js v4 engine) │
└──────────────────────┘  └─────────────┬─────────────┘  └──────────────────────┘
                                        │
                        Iterates over section definitions
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │    src/lib/registry.tsx   │
                          │ (Lazy dynamic imports     │
                          │  maps SectionId to comp)  │
                          └─────────────┬─────────────┘
                                        │
                ┌───────────────────────┴───────────────────────┐
                ▼                                               ▼
   ┌──────────────────────────┐                   ┌───────────────────────────┐
   │ Content Sections         │                   │ Interactive Tool Seam     │
   │ (Hero, SplitBand,        │                   │ (toolPanel + resultsPanel │
   │  WorkGrid, Stats, FAQ)   │                   │  reads from src/lib/tool) │
   └──────────────────────────┘                   └───────────────────────────┘
```

---

## 2. Design Tokens (`src/app/globals.css`)

All color, spacing, radius, typography, and elevation styles are governed by CSS variables:
- **Colors**: `--ink`, `--paper`, `--paper-2`, `--line`, `--muted`, `--accent`, `--accent-ink`
- **Iridescent Palette**: `--iri-1`, `--iri-2`, `--iri-3`, `--iri-4`, `--iri-core`
- **Brutalist Tokens**: `--bw: 2px`, `--shadow-hard: 6px 6px 0 var(--ink)`, `--radius-none: 0`, `--radius-pill: 999px`
- **Style Modes**:
  - `brutal`: `--border-visible: 2px`, `--shadow-active: 6px 6px 0 var(--ink)`
  - `clean`: `--border-visible: 0px`, `--shadow-active: none`
  - `soft`: `--border-visible: 0px`, `--shadow-active: 0 4px 24px rgba(0,0,0,0.08)`

---

## 3. Section Registry (`src/lib/registry.tsx`)

Every section is code-split with `next/dynamic`.
Adding a new section is a 3-step process:
1. Create `src/components/sections/my-section.tsx`
2. Register it in `src/lib/registry.tsx`:
   ```tsx
   mySection: dynamic(() => import('@/components/sections/my-section').then(m => m.MySection))
   ```
3. Use `{ id: 'mySection', props: { ... } }` in any preset page!

---

## 4. The Interactive Tool Seam (`src/lib/tool.ts` & `src/lib/hooks.ts`)

- **Pipeline**: `runTool(input: ToolInput): Promise<ToolOutput>`
- **Hook**: `useTool()` manages `{ state, input, output, history, run, reset }` with automatic `localStorage` persistence.
- **Dynamic Form**: `<ToolPanel />` generates inputs on-the-fly from a JSON schema:
  - Supports sliders, selects, numeric inputs, text, toggles, segmented controls.
- **Results View**: `<ResultsPanel />` visualizes scores, breakdown progress bars, and recommendations.

---

## 5. anime.js v4 Motion System (`src/components/motion/`)

Built strictly around anime.js v4's modular API (`animate`, `createScope`, `createDraggable`, `stagger`, `onScroll`):
- **`useAnimeScope(callback)`**: Scoped animation lifecycle management with automatic cleanup on unmount.
- **`<MotionProvider />`**: Declarative engine scanning DOM for `data-anim="..."` attributes:
  - `reveal-up`, `fade`, `scale-in`, `slide-left`, `slide-right`, `count`, `stagger-children`
  - Interactive physics: `magnetic` cursor pull, `tilt` 3D card perspective, `float` continuous idle loop.
- **Safety**: Honors `prefers-reduced-motion` and global store killswitch (`animationsEnabled`).
