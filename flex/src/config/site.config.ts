import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'NEOFORGE',
  logo: { type: 'text', value: 'NEO//FORGE' },
  tagline: 'Universal Content Engine — Raw Ideas to Multi-Channel Velocity',
  nav: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Why NEOFORGE', href: '#manifesto' },
    { label: 'Studio', href: '#studio' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Channels', href: '#channels' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'OPEN STUDIO', href: '#studio' },
  seo: {
    titleTemplate: '%s | NEOFORGE',
    description: 'An AI-powered content engine that converts raw concepts into publish-ready, multi-channel editorial assets with precision tone control.',
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
