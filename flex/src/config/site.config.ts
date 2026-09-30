import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'NEOFORGE',
  logo: { type: 'text', value: 'NEO//FORGE' },
  tagline: 'Beyond Generation: Idea → Content Engine',
  nav: [
    { label: 'Pillars', href: '#pillars' },
    { label: 'Anti-Wrapper', href: '#manifesto' },
    { label: 'Live Studio', href: '#studio' },
    { label: 'Protocol', href: '#protocol' },
    { label: '50-Pt Rubric', href: '#rubric' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'LAUNCH STUDIO', href: '#studio' },
  seo: {
    titleTemplate: '%s | NEOFORGE',
    description: 'An AI-powered engine transforming raw user context into multi-platform content assets. Built for hackathon excellence: Not a ChatGPT wrapper.',
    ogImage: '/images/hero/blob-hq.png',
  },
  activePreset: 'agency',
  features: {
    animations: true,
    darkMode: true,
    cursor: false,
    devPanel: true,
    hero3D: false,
    preloader: false,
    smoothScroll: true,
  },
}
