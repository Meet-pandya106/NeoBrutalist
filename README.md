# NEOFORGE — Universal Neo-Brutalist Content Engine

A bold, editorial content engine that transforms raw ideas, domain notes, and concepts into publish-ready, multi-channel publishing assets. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Zustand, anime.js v4, and Google AI Studio (Gemini 2.0 Flash) API integration.

---

## ⚡ Quick Start

```bash
# 1. Navigate to the project
cd flex

# 2. Install dependencies
npm install

# 3. Configure your Google AI Studio API key (optional)
cp .env.example .env.local
# Add GEMINI_API_KEY=your_key_here

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.  
Open [http://localhost:3000/styleguide](http://localhost:3000/styleguide) to inspect the component library and token controls.

---

## 📁 Repository Structure

- **[`/flex`](./flex)**: The Next.js 16 web application.
  - Multi-channel editorial synthesis engine (`src/lib/tool.ts`)
  - Google AI Studio Gemini integration (`src/app/api/ai/route.ts`)
  - Interactive studio with live clipboard copy and quality scoring
  - Floating Dev Panel (toggle with backtick key `` ` ``)
- **[`/asset`](./asset)**: Source visual design graphics.
