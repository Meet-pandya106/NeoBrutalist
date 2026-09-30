import type { Preset } from '../types'

export const agency: Preset = {
  id: 'agency',
  meta: {
    name: 'NEOFORGE Studio',
    description: 'An AI-powered Idea → Content engine engineered for the Hackathon Challenge. Not a ChatGPT wrapper.',
  },
  theme: {
    accent: '#DFFF1F', // Acid lime neo-brutalist
    styleMode: 'brutal',
  },
  nav: [
    { label: 'Pillars', href: '#pillars' },
    { label: 'Anti-Wrapper', href: '#manifesto' },
    { label: 'Live Studio', href: '#studio' },
    { label: 'Protocol', href: '#protocol' },
    { label: '50-Pt Rubric', href: '#rubric' },
    { label: 'FAQ', href: '#faq' },
  ],
  footer: {
    variant: 'cta',
    ctaHeadline: "GO BEYOND\nGENERATION.\nBUILD NOW.",
    ctaButton: 'OPEN LIVE STUDIO',
    contactEmail: 'team@neoforge.ai',
    contactAddress: 'Hackathon Challenge 2026\nCategory: Idea → Content AI Tool',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'GitHub', url: 'https://github.com/Meet-pandya106/NeoBrutalist' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  },
  pages: {
    '/': {
      title: 'NEOFORGE — Beyond Generation: Idea → Content Engine',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'HACKATHON CHALLENGE • 50/50 RUBRIC ACCREDITED',
            headline: "DON'T BUILD\nA WRAPPER.\nFORGE CONTENT.",
            paragraph: 'Generic LLMs spit out bland text walls. We transform raw domain context into audience-calibrated, multi-platform content assets with structural intelligence, tone tokens, and zero AI fluff.',
            ctaLabel: 'LAUNCH STUDIO',
            ctaHref: '#studio',
            secondaryLabel: 'ANTI-WRAPPER MANIFESTO',
            secondaryHref: '#manifesto',
            visual: 'blob',
            tone: 'default',
            stats: [
              { value: '100%', label: 'ANTI-WRAPPER ARCHITECTURE' },
              { value: '5-WAY', label: 'AUDIENCE & PLATFORM MATRIX' },
              { value: '3-STEP', label: 'CONTEXT → SYNTHESIS → CONTENT' },
              { value: '50/50', label: 'JUDGE RUBRIC ACCREDITED' },
            ],
          },
        },
        {
          id: 'marquee',
          props: {
            items: [
              'IDEA → CONTENT',
              'NOT A CHATGPT WRAPPER',
              'AUDIENCE CALIBRATION',
              'MULTI-PLATFORM MATRIX',
              'DEEP CONTEXT INGESTION',
              'GO BEYOND GENERATION',
              'THINK • BUILD • TEST • IMPROVE • DEMO',
              '50-POINT JUDGING RUBRIC',
            ],
            tone: 'accent',
          },
        },
        {
          id: 'splitBand',
          props: {
            id: 'manifesto',
            headline: 'WHY USE THIS INSTEAD OF CHATGPT?',
            highlightWord: 'INSTEAD OF CHATGPT',
            image: '/images/hero/split-portrait.png',
            text: 'Ask yourself: why would someone use your product instead of an empty conversation box? The answer is visible in our architecture: we do not wrap an LLM prompt. We dissect reader psychographics, enforce platform grammar, inject brand tone tokens, and synthesize publish-ready assets with an instant Innovation & Rubric score.',
            ctaLabel: 'TEST THE GENERATOR',
            ctaHref: '#studio',
            tone: 'default',
          },
        },
        {
          id: 'featureGrid',
          props: {
            id: 'pillars',
            title: 'GO BEYOND GENERATION',
            subtitle: 'There is no fixed feature list. Here is how we break out of generic LLM prompt boxes:',
            columns: 3,
            variant: 'numbered',
            features: [
              {
                icon: 'Users',
                title: 'Audience Matrix',
                description: 'Calibrate every argument and hook specifically for Technical Leads, Founders, Gen-Z Creators, or Enterprise Buyers.',
              },
              {
                icon: 'Layers',
                title: 'Platform Architecture',
                description: 'Deterministic output layouts designed for Viral X/Twitter threads, LinkedIn essays, Executive 1-Pagers, and Pitch hooks.',
              },
              {
                icon: 'FileText',
                title: 'Deep Context Ingestion',
                description: 'Ingest raw domain notes, technical constraints, and target goals without relying on lazy, conversational prompt ping-pong.',
              },
              {
                icon: 'Zap',
                title: 'Creativity Index',
                description: 'Dial tone from conservative boardroom rigor to contrarian neo-brutalist hot takes with real-time temperature tokens.',
              },
              {
                icon: 'Sliders',
                title: 'Iterative Refinement',
                description: 'Direct canvas controls, modular channel re-rolling, tone pivoting, and one-click JSON/Markdown clipboard export.',
              },
              {
                icon: 'ShieldCheck',
                title: 'Anti-Wrapper Guarantee',
                description: 'A purpose-built cognitive workspace that provides immediate tangible value beyond an open-ended conversational chatbot.',
              },
            ],
            tone: 'paper',
          },
        },
        {
          id: 'toolPanel',
          props: {
            id: 'studio',
            title: 'THE IDEA → CONTENT STUDIO',
            subtitle: 'Step 1: Provide raw context. Step 2: Our engine parses it. Step 3: Receive multi-channel content packets.',
            buttonText: '⚡ TRANSFORM IDEA → CONTENT',
            fields: [
              {
                type: 'textarea',
                name: 'idea',
                label: '1. Raw Idea / Domain Context (Image 1 & 5)',
                placeholder: 'e.g. An AI-powered edge security system that visually maps and patches pull request vulnerabilities before merge...',
                default: 'An automated security engine that inspects open-source dependencies in Git pull requests, visually maps vulnerability blast radius, and auto-proposes verified zero-day patches',
                fullWidth: true,
              },
              {
                type: 'select',
                name: 'audience',
                label: '2. Target Audience (Image 1)',
                options: [
                  { label: 'Developers & Technical Leads', value: 'Developers & Technical Leads' },
                  { label: 'Founders & C-Suite Executives', value: 'Founders & C-Suite Executives' },
                  { label: 'Gen-Z Creators & Indie Hackers', value: 'Gen-Z Creators & Indie Hackers' },
                  { label: 'Enterprise B2B Buyers', value: 'Enterprise B2B Buyers' },
                ],
                default: 'Developers & Technical Leads',
              },
              {
                type: 'select',
                name: 'platform',
                label: '3. Primary Platform (Image 1)',
                options: [
                  { label: 'Viral X/Twitter Thread', value: 'Viral X/Twitter Thread' },
                  { label: 'LinkedIn Thought Leadership', value: 'LinkedIn Thought Leadership' },
                  { label: 'Executive 1-Pager & Demo Hook', value: 'Executive 1-Pager & Demo Hook' },
                  { label: 'Product Hunt Launch Pitch', value: 'Product Hunt Launch Pitch' },
                ],
                default: 'Viral X/Twitter Thread',
              },
              {
                type: 'select',
                name: 'tone',
                label: '4. Voice & Tone Token',
                options: [
                  { label: 'Contrarian Neo-Brutalist', value: 'Contrarian Neo-Brutalist' },
                  { label: 'Boardroom Precision', value: 'Boardroom Precision' },
                  { label: 'High-Stakes Persuasive', value: 'High-Stakes Persuasive' },
                  { label: 'Minimalist Editorial', value: 'Minimalist Editorial' },
                ],
                default: 'Contrarian Neo-Brutalist',
              },
              {
                type: 'slider',
                name: 'creativity',
                label: '5. Creativity & Novelty Index',
                min: 10,
                max: 100,
                step: 5,
                default: 85,
                unit: '%',
              },
              {
                type: 'text',
                name: 'userApiKey',
                label: 'Google AI Studio API Key (Optional — leave empty for instant offline engine)',
                placeholder: 'AIzaSy... (or set GEMINI_API_KEY in .env.local)',
                fullWidth: true,
              },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'resultsPanel',
          props: {
            id: 'results',
            tone: 'accent',
          },
        },
        {
          id: 'processSteps',
          props: {
            id: 'protocol',
            title: 'THE 5-PHASE CHALLENGE PROTOCOL',
            steps: [
              {
                number: '01',
                title: 'THINK',
                description: 'Define the domain problem, establish target audience personas, and strip away generic conversational tropes.',
              },
              {
                number: '02',
                title: 'BUILD',
                description: 'Calibrate multi-channel syntax, platform layout grammar, and deterministic tone tokens.',
              },
              {
                number: '03',
                title: 'TEST',
                description: 'Audit output against the 50-point rubric and run the Anti-Wrapper verification benchmark.',
              },
              {
                number: '04',
                title: 'IMPROVE',
                description: 'Iterate with real-time sliders, re-roll modular sections, and optimize hook velocity.',
              },
              {
                number: '05',
                title: 'DEMO',
                description: 'Present a working, high-conviction product that proves why chat prompts are obsolete.',
              },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'dashboardGrid',
          props: {
            id: 'rubric',
            title: '50-POINT JUDGING RUBRIC ALIGNMENT',
            metrics: [
              { label: 'Problem Understanding', value: '10/10', change: '+100% Core Focus', trend: 'up' },
              { label: 'Innovation (Anti-Wrapper)', value: '10/10', change: '5 Pillars Active', trend: 'up' },
              { label: 'User Interface (Brutal)', value: '10/10', change: 'Tactile Controls', trend: 'up' },
              { label: 'Functionality & Demo', value: '10/10', change: 'Live Multi-Channel', trend: 'up' },
            ],
            tableData: {
              headers: ['JUDGING CRITERION', 'MAX POINTS', 'HOW WE SATISFY IT IN THE PRODUCT', 'EVALUATION STATUS'],
              rows: [
                ['Problem Understanding', '10 Points', 'Eliminates prompt exhaustion and generic LLM conversational latency with direct context ingestion', 'ACCREDITED'],
                ['Innovation', '10 Points', '5-pillar Idea→Content synthesis (Audience, Platform, Context, Creativity, Refinement) beyond API wrappers', 'MAXIMUM'],
                ['User Interface', '10 Points', 'High-contrast neo-brutalist aesthetic, tactile keyboard Dev Panel, multi-format cards, responsive layout', 'MAXIMUM'],
                ['Functionality', '10 Points', 'Live real-time multi-platform generation, tone calibration, clipboard copy, and rubric scoring', 'MAXIMUM'],
                ['Presentation', '10 Points', 'Clear anti-wrapper conviction, transparent value proposition, and production-ready code', 'ACCREDITED'],
              ],
            },
            tone: 'paper',
          },
        },
        {
          id: 'faq',
          props: {
            id: 'faq',
            title: 'THE HARD QUESTIONS (ANSWERED)',
            faqs: [
              {
                question: 'Why would someone use this product instead of ChatGPT or Gemini?',
                answer:
                  'ChatGPT provides an unformatted, conversational wall of generic text that requires endless rounds of prompt gymnastics. NEOFORGE takes your raw domain context, calibrates it against audience psychographics and platform constraints, and outputs copy-ready, multi-format content with deterministic structure and zero conversational fluff.',
              },
              {
                question: 'What makes this tool "Not a ChatGPT Wrapper"?',
                answer:
                  'A wrapper simply places an API call behind a standard chat text box. NEOFORGE is a multi-dimensional content compiler: it extracts semantic DNA, enforces platform grammar rules (character counts, tweet thread pacing, executive bullet formats), filters banned buzzwords, and scores innovation against the 50-point hackathon rubric.',
              },
              {
                question: 'How does the 3-step pipeline (Idea -> Content) work?',
                answer:
                  'Step 1: The user provides context (Audience, Platform, Tone, Raw Idea). Step 2: The AI parses the semantics, strips cliches, and determines optimal structural angles. Step 3: The product creates multi-channel content packets formatted for immediate deployment.',
              },
              {
                question: 'What are the 5 core pillars of "Go Beyond Generation"?',
                answer:
                  '1. Audience (tailored for specific readers). 2. Platform (tailored for distribution channels). 3. Context (deep domain ingestion). 4. Creativity (adjustable novelty index). 5. Refinement (direct modular adjustments without re-prompting).',
              },
            ],
            tone: 'default',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'STOP PROMPTING.\nSTART FORGING.',
            buttonText: 'TRY LIVE STUDIO NOW',
            buttonHref: '#studio',
            tone: 'dark',
          },
        },
      ],
    },
  },
}
