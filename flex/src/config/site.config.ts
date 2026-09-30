import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'FLEX',
  logo: { type: 'text', value: 'FLEX' },
  tagline: 'Universal Neo-Brutalist Template',
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Get Started', href: '/contact' },
  seo: {
    titleTemplate: '%s | FLEX',
    description: 'A bold, editorial, neo-brutalist website template that adapts to any purpose through configuration.',
    ogImage: '/images/og-default.png',
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
