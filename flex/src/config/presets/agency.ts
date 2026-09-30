import type { Preset } from '../types'

export const agency: Preset = {
  id: 'agency',
  meta: {
    name: 'Creative Agency',
    description: 'A bold, neo-brutalist preset for creative agencies and studios.',
  },
  theme: {
    accent: '#DFFF1F', // acid lime
    styleMode: 'brutal',
  },
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    variant: 'cta',
    ctaHeadline: "LET'S BUILD\nSOMETHING\nICONIC.",
    ctaButton: 'START A PROJECT',
    contactEmail: 'hello@brvnd.design',
    contactPhone: '+1 (212) 555-0198',
    contactAddress: '447 Broadway, 2nd Floor\nNew York, NY 10013',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'Dribbble', url: 'https://dribbble.com' },
    ],
  },
  pages: {
    '/': {
      title: 'FLEX Creative Agency',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'A CREATIVE DESIGN AGENCY',
            headline: 'WE CREATE\nWHAT\nMOVES',
            paragraph: 'FLEX is a global creative agency helping ambitious brands stand out through design, technology and ideas.',
            ctaLabel: 'SEE OUR WORK',
            ctaHref: '/work',
            secondaryLabel: 'OUR SERVICES',
            secondaryHref: '/services',
            visual: 'blob',
            tone: 'default',
            stats: [
              { value: '12+', label: 'YEARS OF EXPERIENCE' },
              { value: '250+', label: 'BRANDS PARTNERED' },
              { value: '98%', label: 'CLIENT SATISFACTION' },
              { value: '30+', label: 'DESIGN AWARDS' },
            ],
          },
        },
        {
          id: 'marquee',
          props: {
            items: [
              'BRAND IDENTITY',
              'DIGITAL SYSTEMS',
              'ANIME.JS MOTION',
              'EDITORIAL TYPOGRAPHY',
              'CREATIVE TECH',
              'CATEGORY DOMINANCE',
            ],
            tone: 'accent',
          },
        },
        {
          id: 'statsRow',
          props: {
            stats: [
              { value: '12+', label: 'Years Experience' },
              { value: '250+', label: 'Brands Launched' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '30+', label: 'Industry Awards' },
            ],
            tone: 'accent',
          },
        },
        {
          id: 'splitBand',
          props: {
            headline: 'STRATEGY BY DESIGN.',
            highlightWord: 'BY DESIGN.',
            image: '/images/hero/split-portrait.png',
            text: 'We blend strategy, creativity and technology to craft bold experiences that connect brands with people.',
            ctaLabel: 'OUR SERVICES',
            ctaHref: '/services',
            tone: 'default',
          },
        },
        {
          id: 'workGrid',
          props: {
            title: 'SELECTED WORK',
            markerDot: true,
            viewAllHref: '/work',
            items: [
              {
                title: 'VOLT ENERGY',
                category: 'BRANDING / PACKAGING',
                badge: 'FLAGSHIP',
                image: '/images/work/futuristic-nexus.png',
                href: '/work',
              },
              {
                title: 'FOUR-PANEL EDITORIAL',
                category: 'PORTFOLIO / DIGITAL SYSTEM',
                badge: 'HOT',
                image: '/images/work/four-panel-portfolio.png',
                href: '/work',
              },
              {
                title: 'FUTURE BUILT DIFFERENT',
                category: 'BRANDING / DIGITAL',
                image: '/images/work/bebas-neue.png',
                href: '/work',
              },
              {
                title: 'MIND OVER MATTER',
                category: 'BRANDING / PRINT',
                image: '/images/textures/iridescent-waves.png',
                href: '/work',
              },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: "LET'S BUILD\nSOMETHING\nICONIC.",
            buttonText: 'TALK TO US',
            buttonHref: '/contact',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },

    '/work': {
      title: 'Selected Work — FLEX',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'PORTFOLIO REPERTOIRE',
            headline: 'ICONIC WORK\nTHAT SHAPES\nCULTURE',
            paragraph: 'Explore our selected commissions across high-growth technology, luxury lifestyle, and digital-first venture ecosystems.',
            ctaLabel: 'COMMISSION A PROJECT',
            ctaHref: '/contact',
            visual: 'collage',
            tone: 'default',
            stats: [
              { value: '$4.2B', label: 'CLIENT VALUATION' },
              { value: '45+', label: 'GLOBAL AWARDS' },
              { value: '180M', label: 'USERS REACHED' },
              { value: '99.4%', label: 'RETENTION RATE' },
            ],
          },
        },
        {
          id: 'workGrid',
          props: {
            title: 'ALL CASE STUDIES',
            markerDot: true,
            items: [
              {
                title: 'VOLT ENERGY CAN',
                category: 'BEVERAGE PACKAGING & CAMPAIGN',
                subtitle: 'PACKAGING / 3D',
                badge: 'FLAGSHIP',
                image: '/images/work/futuristic-nexus.png',
                href: '/contact',
              },
              {
                title: 'FOUR-PANEL EDITORIAL SYSTEM',
                category: 'NEXT-GEN PORTFOLIO ARCHITECTURE',
                subtitle: 'DESIGN SYSTEM / WEB',
                badge: 'HOT',
                image: '/images/work/four-panel-portfolio.png',
                href: '/contact',
              },
              {
                title: 'BEBAS NEUE DIGITAL TYPE',
                category: 'EXPERIMENTAL TYPOGRAPHY & IDENTITY',
                subtitle: 'EDITORIAL / TYPE',
                image: '/images/work/bebas-neue.png',
                href: '/contact',
              },
              {
                title: 'CIPHER SECURITY SUITE',
                category: 'CRYPTOGRAPHIC PRODUCT & APPAREL',
                subtitle: 'FINTECH / UI-UX',
                badge: 'IN PROGRESS',
                image: '/images/hero/split-portrait.png',
                href: '/contact',
              },
              {
                title: 'LIQUID CHROME HORIZON',
                category: 'AUDIOVISUAL BRANDING SYSTEM',
                subtitle: 'EXPERIENTIAL / 3D',
                image: '/images/textures/iridescent-waves.png',
                href: '/contact',
              },
              {
                title: 'NEXUS HARDWARE LABS',
                category: 'SPATIAL COMPUTING IDENTITY',
                subtitle: 'HARDWARE / WEB3',
                image: '/images/work/futuristic-nexus.png',
                href: '/contact',
              },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'quoteBand',
          props: {
            quote: 'Good design is good business. Brutal, unapologetic editorial craft is permanently unforgettable.',
            author: 'BRVND MANIFESTO',
            role: 'CORE OPERATING PRINCIPLE',
            tone: 'ink',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'READY TO BUILD\nYOUR FLAGSHIP\nWORK?',
            buttonText: 'GET IN TOUCH',
            buttonHref: '/contact',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },

    '/services': {
      title: 'Capabilities & Practice — FLEX',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'CAPABILITIES & SPECIALIZATIONS',
            headline: 'STRATEGY,\nDESIGN &\nTECHNOLOGY',
            paragraph: 'We bridge radical artistic vision with robust front-end performance, building category leaders from zero to scaled market dominance.',
            ctaLabel: 'EXPLORE CAPABILITIES',
            ctaHref: '#services-list',
            secondaryLabel: 'DISCUSS PRICING',
            secondaryHref: '#pricing-tiers',
            visual: 'globe',
            tone: 'default',
          },
        },
        {
          id: 'servicesList',
          props: {
            id: 'services-list',
            title: 'PRACTICE AREAS',
            services: [
              {
                index: '01',
                title: 'BRAND IDENTITY & NAMING',
                description: 'Complete visual identity systems, typographic guidelines, voice definition, and physical/digital brand architecture.',
                tags: ['Positioning', 'Art Direction', 'Typography', 'Logo Systems'],
                features: ['Brand Guidelines', 'Type Hierarchy', 'Packaging', 'Motion Tokens'],
                href: '/contact',
              },
              {
                index: '02',
                title: 'DIGITAL PRODUCT & UI/UX',
                description: 'Next-generation web applications, interactive software platforms, and mobile apps designed with surgical precision.',
                tags: ['Design Systems', 'App Architecture', 'Prototyping', 'User Research'],
                features: ['React Architecture', 'WCAG AA Accessibility', 'Micro-Interactions'],
                href: '/contact',
              },
              {
                index: '03',
                title: 'CREATIVE TECH & MOTION',
                description: 'Cutting-edge anime.js animation, WebGL shaders, Three.js 3D hero objects, and reactive visual storytelling.',
                tags: ['anime.js v4', 'WebGL', 'Three.js', 'Shader Craft'],
                features: ['Scroll Choreography', 'Physics Animations', 'Smooth Transitions'],
                href: '/contact',
              },
              {
                index: '04',
                title: 'GROWTH ENGINE & LAUNCH',
                description: 'Conversion-rate optimized landing pages, editorial campaign microsites, and investor presentation collateral.',
                tags: ['SEO Architecture', 'Speed Optimization', 'Analytics', 'Conversion'],
                features: ['Sub-1s Load Time', 'Lighthouse 95+', 'A/B Test Seams'],
                href: '/contact',
              },
            ],
            tone: 'paper',
          },
        },
        {
          id: 'processSteps',
          props: {
            title: 'OUR WORKING METHOD',
            steps: [
              { number: '01', title: 'DISCOVERY & AUDIT', description: 'Deconstruct your market, competitors, and core technical constraints in week one.' },
              { number: '02', title: 'RADICAL CONCEPTING', description: 'Present polarized creative directions that challenge category norms and establish dominance.' },
              { number: '03', title: 'SYSTEMS & CODE', description: 'Build componentized, bulletproof design tokens and production-grade React codebases.' },
              { number: '04', title: 'POLISH & SCALE', description: 'Run comprehensive accessibility audits, motion choreography, and high-velocity deployment.' },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'pricing',
          props: {
            id: 'pricing-tiers',
            title: 'ENGAGEMENT MODELS',
            subtitle: 'Transparent, high-conviction pricing built for startup velocity and enterprise scale.',
            showToggle: true,
            plans: [
              {
                name: 'SPRINT ENGAGEMENT',
                price: '$18,500',
                priceYearly: '$15,000',
                description: 'Rapid 3-week intensive sprint for brand launch or crucial product MVP.',
                features: [
                  'Brand Strategy & Core Identity',
                  'FLEX Neo-Brutalist Web Template',
                  'anime.js v4 Motion Choreography',
                  'Production Next.js Deployment',
                  '2 Weeks Post-Launch Support',
                ],
                ctaLabel: 'BOOK SPRINT',
                ctaHref: '/contact',
              },
              {
                name: 'FLAGSHIP PARTNERSHIP',
                price: '$45,000',
                priceYearly: '$38,000',
                description: 'Full-spectrum creative overhaul and custom technical architecture.',
                highlighted: true,
                features: [
                  'Complete Visual Identity & Typography',
                  'Multi-Page Web Platform & CMS',
                  'Custom WebGL / 3D Hero Visuals',
                  'Complete Design Token System',
                  'Lighthouse 95+ Performance Guarantee',
                  'Dedicated Senior Creative Team',
                ],
                ctaLabel: 'START PARTNERSHIP',
                ctaHref: '/contact',
              },
              {
                name: 'ENTERPRISE RETAINER',
                price: '$24,000',
                priceYearly: '$20,000',
                period: '/month',
                description: 'Continuous creative direction, design iteration, and engineering support.',
                features: [
                  'Ongoing Feature Architecture',
                  'Quarterly Campaign Microsites',
                  'Investor & Keynote Deck Craft',
                  'Direct Slack Channel with Directors',
                  'Guaranteed 48-Hour Turnaround',
                ],
                ctaLabel: 'INQUIRE RETAINER',
                ctaHref: '/contact',
              },
            ],
            tone: 'default',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'READY TO ACCELERATE\nYOUR BRAND?',
            buttonText: 'TALK TO AN ENGINEER',
            buttonHref: '/contact',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },

    '/about': {
      title: 'About the Studio — FLEX',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'ABOUT FLEX BRVND',
            headline: 'OBSESSED WITH\nCRAFT, DISRUPTION\n& IMPACT',
            paragraph: 'We are an independent design studio and creative engineering lab built for ambitious founders who refuse to look like everyone else.',
            ctaLabel: 'OUR CREATIVE TEAM',
            ctaHref: '#team-members',
            visual: 'globe',
            tone: 'default',
            stats: [
              { value: '2014', label: 'FOUNDED IN NYC' },
              { value: '14', label: 'CITIES REPRESENTED' },
              { value: '100%', label: 'INDEPENDENTLY OWNED' },
              { value: '0', label: 'LOREM IPSUM' },
            ],
          },
        },
        {
          id: 'splitBand',
          props: {
            headline: 'STRATEGY BY DESIGN.',
            highlightWord: 'BY DESIGN.',
            image: '/images/hero/split-portrait.png',
            text: 'We do not follow trends or regurgitate templated corporate gradients. We build editorial monumentality that commands the room.',
            ctaLabel: 'EXPLORE OUR REPERTOIRE',
            ctaHref: '/work',
            tone: 'paper-2',
          },
        },
        {
          id: 'team',
          props: {
            id: 'team-members',
            title: 'LEADERSHIP & DIRECTORS',
            people: [
              {
                name: 'ALEXANDER BRVND',
                role: 'EXECUTIVE CREATIVE DIRECTOR',
                image: '/images/hero/split-portrait.png',
              },
              {
                name: 'ELENA VANCE',
                role: 'HEAD OF TECHNICAL ARCHITECTURE',
                image: '/images/work/futuristic-nexus.png',
              },
              {
                name: 'MARCUS CHEN',
                role: 'DIRECTOR OF TYPOGRAPHY & SYSTEMS',
                image: '/images/work/bebas-neue.png',
              },
              {
                name: 'SOPHIA KOWALSKI',
                role: 'PRINCIPAL MOTION & 3D DESIGNER',
                image: '/images/textures/chrome.png',
              },
            ],
            featuredImage: '/images/team/directors-quartet.png',
            tone: 'default',
          },
        },
        {
          id: 'logoCloud',
          props: {
            title: 'TRUSTED BY INNOVATORS WORLDWIDE',
            image: '/images/logos/partner-grid.png',
            logos: [
              { name: 'NEXUS DYNAMICS' },
              { name: 'CIPHER PROTOCOL' },
              { name: 'SYNTAX CAPITAL' },
              { name: 'VOLT ENERGY' },
              { name: 'AURORA LABS' },
              { name: 'QUANTUM REACH' },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'quoteBand',
          props: {
            quote: 'A brand is not a logo. It is a persistent psychological posture in the mind of the viewer.',
            author: 'STUDIO ETHOS',
            role: 'NEW YORK STUDIO',
            tone: 'ink',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'COME BUILD WITH\nTHE REBELS.',
            buttonText: 'GET IN TOUCH',
            buttonHref: '/contact',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },

    '/insights': {
      title: 'Field Notes & Essays — FLEX',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'PUBLIC LAB & DISPATCHES',
            headline: 'CRITICAL ESSAYS\nON DESIGN &\nTECH CULTURE',
            paragraph: 'Analytical breakdowns, design system teardowns, and technical dispatches written by our team of practicing directors and engineers.',
            ctaLabel: 'READ ESSAYS',
            ctaHref: '#essays',
            visual: 'chart',
            tone: 'default',
          },
        },
        {
          id: 'featureGrid',
          props: {
            id: 'essays',
            title: 'FEATURED DISPATCHES',
            subtitle: 'Essays on aesthetics, speed, typography, and web evolution.',
            columns: 3,
            variant: 'numbered',
            features: [
              {
                icon: 'Terminal',
                title: 'THE DEATH OF SOFT GRADIENTS',
                description: 'Why the modern web is rebelling against SaaS blandness in favor of brutal high-contrast typography and visible borders.',
              },
              {
                icon: 'Zap',
                title: 'PERFORMANCE AS A DESIGN TOKEN',
                description: 'How we achieve 60fps anime.js choreography and sub-second Lighthouse scores without sacrificing aesthetic ambition.',
              },
              {
                icon: 'Layers',
                title: 'CONFIG-DRIVEN DESIGN SYSTEMS',
                description: 'Architecting websites that can pivot entire brand identities in five minutes during high-stakes hackathons.',
              },
              {
                icon: 'Code',
                title: 'TYPOGRAPHY IN THE SPATIAL AGE',
                description: 'Why Bebas Neue and condensed grotesques remain the ultimate tool for visual hierarchy across mobile and desktop folds.',
              },
              {
                icon: 'Sliders',
                title: 'THE SEAM: CONNECTING LOGIC TO UI',
                description: 'A developer guide on building lightweight, resilient seams between business logic, APIs, and editorial layout.',
              },
              {
                icon: 'Globe',
                title: 'OFFLINE FIRST FOR LIVE DEMOS',
                description: 'Defensive engineering strategies to guarantee your web application never breaks on conference Wi-Fi.',
              },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'newsletter',
          props: {
            title: 'SUBSCRIBE TO THE BRVND DISPATCH',
            subtitle: 'Every Thursday: one radical perspective on typography, front-end architecture, and brand authority. No spam, ever.',
            placeholder: 'ENTER YOUR EMAIL FOR DISPATCHES',
            tone: 'paper',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'HAVE AN ESSAY\nIDEA OR PITCH?',
            buttonText: 'WRITE TO US',
            buttonHref: '/contact',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },

    '/contact': {
      title: 'Start a Project — FLEX',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'TRANSMISSION INITIATION',
            headline: 'LET’S BUILD\nSOMETHING\nICONIC',
            paragraph: 'Tell us about your organization, project timeline, and what success looks like. We typically reply within 24 hours with schedule availability.',
            ctaLabel: 'JUMP TO FORM',
            ctaHref: '#contact-form',
            visual: 'mapPins',
            tone: 'default',
            stats: [
              { value: '< 24H', label: 'RESPONSE TIME' },
              { value: '3', label: 'GLOBAL OFFICES' },
              { value: 'Q4', label: 'BOOKINGS OPEN' },
            ],
          },
        },
        {
          id: 'contactForm',
          props: {
            id: 'contact-form',
            title: 'PROJECT INTAKE FORM',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'FLEX Studios HQ\n447 Broadway, 2nd Floor\nNew York, NY 10013',
            tone: 'paper',
          },
        },
        {
          id: 'faq',
          props: {
            title: 'PARTNERSHIP FAQ',
            subtitle: 'Everything you need to know about working with FLEX.',
            faqs: [
              {
                question: 'What is your typical project timeline?',
                answer: 'Our focused sprints run 3 to 4 weeks. Full-scale flagship overhauls (brand identity + custom web architecture) typically span 8 to 12 weeks.',
              },
              {
                question: 'How do you handle development handoff?',
                answer: 'We build production-ready Next.js codebases directly. You receive a fully typed, componentized GitHub repository with zero external UI kit dependencies.',
              },
              {
                question: 'Can you work with our existing engineering team?',
                answer: 'Yes. We often partner as the lead design and front-end engineering SWAT team, embedding directly into client sprints and design system repositories.',
              },
              {
                question: 'Do you offer post-launch support and retainers?',
                answer: 'Yes. We offer continuous monthly advisory retainers for key partners needing ongoing creative direction and feature rollouts.',
              },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'WANT TO CHAT\nDIRECTLY?',
            buttonText: 'CALL NYC OFFICE',
            buttonHref: 'tel:+12125550198',
            email: 'hello@brvnd.design',
            phone: '+1 (212) 555-0198',
            address: 'New York, NY',
            tone: 'accent',
          },
        },
      ],
    },
  },
}
