import type { Preset } from '../types'

export const agency: Preset = {
  id: 'agency',
  meta: {
    name: 'NEOFORGE Studio',
    description: 'An AI-powered editorial workspace that transforms raw concepts into multi-channel content packets.',
  },
  theme: {
    accent: '#DFFF1F', // Acid lime neo-brutalist
    styleMode: 'brutal',
  },
  nav: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Why NEOFORGE', href: '#manifesto' },
    { label: 'Live Studio', href: '#studio' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Channels', href: '#channels' },
    { label: 'FAQ', href: '#faq' },
  ],
  footer: {
    variant: 'cta',
    ctaHeadline: "TURN CONCEPTS\nINTO CONTENT\nTHAT HITS.",
    ctaButton: 'LAUNCH STUDIO',
    contactEmail: 'contact@neoforge.studio',
    contactAddress: 'NEOFORGE Labs\nModern Multi-Channel Publishing Engine',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'GitHub', url: 'https://github.com/Meet-pandya106/NeoBrutalist' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  },
  pages: {
    '/': {
      title: 'NEOFORGE — Multi-Channel Editorial Engine',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'NEXT-GEN EDITORIAL WORKSPACE • AI-POWERED',
            headline: "TURN RAW IDEAS\nINTO CONTENT\nVELOCITY.",
            paragraph: 'Stop wrestling with open-ended prompt boxes. NEOFORGE transforms your raw domain notes and unstructured concepts into audience-calibrated, publish-ready content assets across every major distribution channel.',
            ctaLabel: 'TRY THE STUDIO',
            ctaHref: '#studio',
            secondaryLabel: 'HOW IT WORKS',
            secondaryHref: '#manifesto',
            visual: 'blob',
            tone: 'default',
            stats: [
              { value: '10x', label: 'EDITORIAL VELOCITY' },
              { value: '4+', label: 'NATIVE PLATFORM FORMATS' },
              { value: '99%', label: 'ZERO FLUFF GUARANTEE' },
              { value: '1-CLICK', label: 'INSTANT CLIPBOARD EXPORT' },
            ],
          },
        },
        {
          id: 'marquee',
          props: {
            items: [
              'CONCEPT TO PUBLICATION',
              'MULTI-CHANNEL SYNTHESIS',
              'AUDIENCE TARGETING',
              'STRUCTURAL EDITORIALS',
              'DETERMINISTIC TONE TOKENS',
              'HIGH-IMPACT HOOKS',
              'ZERO BOILERPLATE',
              'PRODUCTION READY OUTPUT',
            ],
            tone: 'accent',
          },
        },
        {
          id: 'splitBand',
          props: {
            id: 'manifesto',
            headline: 'STRUCTURED FOR REAL PUBLISHING.',
            highlightWord: 'REAL PUBLISHING.',
            image: '/images/hero/split-portrait.png',
            text: 'Generic chatbots produce walls of unformatted prose that require endless editing. NEOFORGE is engineered for builders and teams who need instant, formatted content packets—complete with hook velocity, platform-specific rhythm, and actionable takeaways with zero conversational filler.',
            ctaLabel: 'EXPERIMENT WITH STUDIO',
            ctaHref: '#studio',
            tone: 'default',
          },
        },
        {
          id: 'featureGrid',
          props: {
            id: 'capabilities',
            title: 'ENGINEERED FOR MODERN CONTENT TEAMS',
            subtitle: 'Built from the ground up for high-leverage builders, founders, and creators:',
            columns: 3,
            variant: 'numbered',
            features: [
              {
                icon: 'Users',
                title: 'Audience Tuning',
                description: 'Calibrate rhetoric and nuance specifically for technical engineers, executive buyers, or hyper-engaged digital communities.',
              },
              {
                icon: 'Layers',
                title: 'Multi-Channel Layouts',
                description: 'Instant formatting for X/Twitter sequences, LinkedIn thought leadership, technical documentation, or keynote memos.',
              },
              {
                icon: 'FileText',
                title: 'Context Ingestion',
                description: 'Input raw messy brainstorms, project bullet points, or product specs without manual prompt crafting.',
              },
              {
                icon: 'Zap',
                title: 'Tone & Novelty Sliders',
                description: 'Dial voice parameters from crisp boardroom precision to bold, contrarian neo-brutalist stances with live temperature tokens.',
              },
              {
                icon: 'Sliders',
                title: 'Modular Canvas Controls',
                description: 'Inspect, refine, and re-roll individual channel blocks with real-time feedback and direct copy capabilities.',
              },
              {
                icon: 'ShieldCheck',
                title: 'Deterministic Outputs',
                description: 'Structured JSON-backed generation that guarantees consistency, clean formatting, and absence of generic AI tropes.',
              },
            ],
            tone: 'paper',
          },
        },
        {
          id: 'toolPanel',
          props: {
            id: 'studio',
            title: 'THE CONTENT STUDIO',
            subtitle: 'Provide your raw concept below and watch NEOFORGE generate synchronized multi-channel content packets.',
            buttonText: '⚡ SYNTHESIZE CONTENT PACKET',
            fields: [
              {
                type: 'textarea',
                name: 'idea',
                label: '1. Raw Concept / Domain Notes',
                placeholder: 'e.g. An automated security engine that inspects open-source dependencies in Git pull requests, visually maps blast radius, and auto-proposes verified zero-day patches...',
                default: 'An automated security engine that inspects open-source dependencies in Git pull requests, visually maps vulnerability blast radius, and auto-proposes verified zero-day patches',
                fullWidth: true,
              },
              {
                type: 'select',
                name: 'audience',
                label: '2. Target Reader',
                options: [
                  { label: 'Developers & Technical Leads', value: 'Developers & Technical Leads' },
                  { label: 'Founders & C-Suite Executives', value: 'Founders & C-Suite Executives' },
                  { label: 'Digital Creators & Indie Hackers', value: 'Digital Creators & Indie Hackers' },
                  { label: 'Enterprise B2B Decision Makers', value: 'Enterprise B2B Decision Makers' },
                ],
                default: 'Developers & Technical Leads',
              },
              {
                type: 'select',
                name: 'platform',
                label: '3. Primary Channel',
                options: [
                  { label: 'Viral X/Twitter Thread', value: 'Viral X/Twitter Thread' },
                  { label: 'LinkedIn Thought Leadership', value: 'LinkedIn Thought Leadership' },
                  { label: 'Executive 1-Pager & Demo Hook', value: 'Executive 1-Pager & Demo Hook' },
                  { label: 'Product Launch Announcement', value: 'Product Launch Announcement' },
                ],
                default: 'Viral X/Twitter Thread',
              },
              {
                type: 'select',
                name: 'tone',
                label: '4. Editorial Voice',
                options: [
                  { label: 'Contrarian Neo-Brutalist', value: 'Contrarian Neo-Brutalist' },
                  { label: 'Boardroom Precision', value: 'Boardroom Precision' },
                  { label: 'High-Impact Persuasive', value: 'High-Impact Persuasive' },
                  { label: 'Minimalist Technical', value: 'Minimalist Technical' },
                ],
                default: 'Contrarian Neo-Brutalist',
              },
              {
                type: 'slider',
                name: 'creativity',
                label: '5. Voice Intensity & Novelty',
                min: 10,
                max: 100,
                step: 5,
                default: 85,
                unit: '%',
              },
              {
                type: 'text',
                name: 'userApiKey',
                label: 'Google Gemini API Key (Optional — leave blank to use built-in engine)',
                placeholder: 'AIzaSy... (or configure GEMINI_API_KEY in .env.local)',
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
            id: 'workflow',
            title: 'THE EDITORIAL PIPELINE',
            steps: [
              {
                number: '01',
                title: 'INGEST',
                description: 'Supply raw thoughts, messy project notes, or architectural briefs without pre-formatting.',
              },
              {
                number: '02',
                title: 'ANALYZE',
                description: 'The engine parses semantics, strips clichés, and identifies high-traction angles.',
              },
              {
                number: '03',
                title: 'SYNTHESIZE',
                description: 'Generates tailor-made content structures suited for each specific distribution platform.',
              },
              {
                number: '04',
                title: 'CALIBRATE',
                description: 'Fine-tune tone intensity and re-roll individual modular blocks on the fly.',
              },
              {
                number: '05',
                title: 'DEPLOY',
                description: 'One-click copy formatted markdown or raw copy straight to your publishing channels.',
              },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'dashboardGrid',
          props: {
            id: 'channels',
            title: 'DISTRIBUTION MATRIX & PERFORMANCE',
            metrics: [
              { label: 'Average Prep Time', value: '30s', change: '90% Faster', trend: 'up' },
              { label: 'Editorial Density', value: '98%', change: 'Zero Fluff', trend: 'up' },
              { label: 'Output Formats', value: '4+', change: 'Synchronized', trend: 'up' },
              { label: 'Hook Velocity', value: '9.8/10', change: 'Tested', trend: 'up' },
            ],
            tableData: {
              headers: ['DISTRIBUTION CHANNEL', 'OPTIMAL FORMAT', 'CORE EMPHASIS', 'DELIVERY SPEED'],
              rows: [
                ['Twitter / X Thread', '4-6 Connected Tweets', 'High-tension hook, numbered proofs, CTA link', 'Instant Copy'],
                ['LinkedIn Perspective', '300-500 Words', 'Contextual story, operational takeaway, discussion question', 'Instant Copy'],
                ['Executive 1-Pager', '1-Page Memo', 'Problem overview, quantifiable ROI, implementation plan', 'Instant Copy'],
                ['Product Launch Brief', '200 Words', 'Key value proposition, core differentiators, immediate link', 'Instant Copy'],
              ],
            },
            tone: 'paper',
          },
        },
        {
          id: 'faq',
          props: {
            id: 'faq',
            title: 'FREQUENTLY ASKED QUESTIONS',
            faqs: [
              {
                question: 'How does NEOFORGE differ from standard conversational AI?',
                answer:
                  'Conversational AI gives you an unformatted wall of generic text that requires endless re-prompting. NEOFORGE is an editorial compiler: it ingests your raw context, calibrates it against audience psychographics and platform constraints, and outputs copy-ready, multi-format content with deterministic structure.',
              },
              {
                question: 'Can I use my own Google AI Studio / Gemini API key?',
                answer:
                  'Yes. You can paste your free Google AI Studio Gemini API key directly into the Studio form or add it to your .env.local file as GEMINI_API_KEY. If no key is set, the studio seamlessly uses its built-in synthesis engine.',
              },
              {
                question: 'What channels does the studio generate simultaneously?',
                answer:
                  'The studio generates multi-platform output sets: an attention-stopping social thread sequence, a long-form professional editorial, and an executive briefing memo—all calibrated from the same core concept.',
              },
              {
                question: 'Can I customize the editorial tone?',
                answer:
                  'Yes. You can choose between Contrarian Neo-Brutalist, Boardroom Precision, High-Impact Persuasive, and Minimalist Technical voices, and adjust the novelty slider to control voice intensity.',
              },
            ],
            tone: 'default',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'READY TO TURN IDEAS\nINTO CONTENT?',
            buttonText: 'OPEN THE LIVE STUDIO',
            buttonHref: '#studio',
            tone: 'dark',
          },
        },
      ],
    },
  },
}
