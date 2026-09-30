/* ============================================
   FLEX — Shared Content Types
   All data structures used across presets.
   ============================================ */

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type Stat = {
  value: string
  label: string
  prefix?: string
  suffix?: string
  countUp?: boolean
}

export type Card = {
  title: string
  category?: string
  subtitle?: string
  badge?: string
  image?: string
  type?: 'photo' | 'solid' | 'dark' | 'text'
  href?: string
  description?: string
}

export type Feature = {
  icon?: string
  title: string
  description: string
}

export type Service = {
  index: string
  title: string
  tags: string[]
  description?: string
  image?: string
  href?: string
  features?: string[]
}

export type Step = {
  number: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company?: string
  avatar?: string
  rating?: number
}

export type Plan = {
  name: string
  price: string
  period?: string
  yearlyPrice?: string
  priceYearly?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta?: string
  ctaLabel?: string
  ctaHref?: string
}

export type Faq = {
  question: string
  answer: string
}

export type Person = {
  name: string
  role: string
  image?: string
  imageHover?: string
  social?: { platform: string; url: string }[]
}

export type Post = {
  title: string
  excerpt?: string
  image?: string
  date: string
  readTime?: string
  tags?: string[]
  slug: string
  featured?: boolean
  author?: string
}

export type Product = {
  name: string
  price: string
  image?: string
  badge?: string
  category?: string
  slug: string
}

export type Event = {
  title: string
  date: string
  time?: string
  venue?: string
  description?: string
  speakers?: Person[]
}

export type Metric = {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'flat'
  chartData?: number[]
}

export type Location = {
  name: string
  address: string
  phone?: string
  email?: string
  lat?: number
  lng?: number
}

export type ToolField = {
  type: 'slider' | 'select' | 'number' | 'text' | 'file' | 'segmented' | 'switch' | 'textarea'
  name: string
  label: string
  min?: number
  max?: number
  step?: number
  options?: { label: string; value: string }[]
  default?: string | number | boolean
  placeholder?: string
  required?: boolean
  helpText?: string
  unit?: string
}

/* ---- Section & Page Types ---- */

export type SectionId =
  | 'hero'
  | 'statsRow'
  | 'splitBand'
  | 'workGrid'
  | 'featureGrid'
  | 'servicesList'
  | 'processSteps'
  | 'marquee'
  | 'logoCloud'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'team'
  | 'timeline'
  | 'gallery'
  | 'blogGrid'
  | 'productGrid'
  | 'eventInfo'
  | 'menuList'
  | 'toolPanel'
  | 'resultsPanel'
  | 'dashboardGrid'
  | 'chatPanel'
  | 'mapList'
  | 'comparison'
  | 'quoteBand'
  | 'newsletter'
  | 'contactForm'
  | 'ctaBand'
  | 'richText'
  | 'notFound'

export type SectionDef = {
  id: SectionId
  props: Record<string, unknown>
}

export type PageDef = {
  title: string
  description?: string
  sections: SectionDef[]
}

export type FooterDef = {
  variant: 'cta' | 'slim'
  ctaHeadline?: string
  ctaButton?: string
  contactEmail?: string
  contactPhone?: string
  contactAddress?: string
  columns?: { title: string; links: { label: string; href: string }[] }[]
  socials?: { platform: string; url: string }[]
  textureImage?: string
}

export type ThemeOverride = {
  accent?: string
  accentInk?: string
  styleMode?: 'brutal' | 'clean' | 'soft'
  darkDefault?: boolean
  fontDisplay?: string
  fontBody?: string
}

export type Preset = {
  id: string
  meta: { name: string; description: string }
  theme?: ThemeOverride
  nav: NavItem[]
  pages: Record<string, PageDef>
  footer: FooterDef
}

export type SiteConfig = {
  name: string
  logo: { type: 'text' | 'svg'; value: string }
  tagline: string
  nav: NavItem[]
  cta: { label: string; href: string }
  seo: {
    titleTemplate: string
    description: string
    ogImage?: string
  }
  activePreset: string
  features: {
    animations: boolean
    darkMode: boolean
    cursor: boolean
    devPanel: boolean
    hero3D: boolean
    preloader: boolean
    smoothScroll: boolean
  }
}

export type ThemeConfig = {
  accent: string
  accentInk: string
  accentPresets: { name: string; value: string; ink: string }[]
  styleMode: 'brutal' | 'clean' | 'soft'
  borderWeight: number
  fontDisplay: string
  fontBody: string
  fontMono: string
}

export type MotionConfig = {
  enabled: boolean
  durations: {
    fast: number
    base: number
    slow: number
    hero: number
  }
  eases: {
    snappyOut: string
    expoOut: string
    inOut: string
    spring: { stiffness: number; damping: number }
  }
  stagger: {
    fast: number
    base: number
    slow: number
  }
  scroll: {
    threshold: number
    once: boolean
  }
}
