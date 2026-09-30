'use client'

import dynamic from 'next/dynamic'
import type { SectionId } from '@/config/types'
import type { ComponentType } from 'react'

/**
 * Section Registry — maps section IDs to lazy-loaded components.
 * Unknown IDs render a visible dev warning, never crash.
 * Adding a section = create component + register here + use in a preset.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
type SectionComponent = ComponentType<any>

const registry: Partial<Record<SectionId, SectionComponent>> = {
  hero: dynamic(() => import('@/components/sections/hero').then(m => m.Hero)),
  statsRow: dynamic(() => import('@/components/sections/stats-row').then(m => m.StatsRow)),
  splitBand: dynamic(() => import('@/components/sections/split-band').then(m => m.SplitBand)),
  workGrid: dynamic(() => import('@/components/sections/work-grid').then(m => m.WorkGrid)),
  featureGrid: dynamic(() => import('@/components/sections/feature-grid').then(m => m.FeatureGrid)),
  servicesList: dynamic(() => import('@/components/sections/services-list').then(m => m.ServicesList)),
  processSteps: dynamic(() => import('@/components/sections/process-steps').then(m => m.ProcessSteps)),
  marquee: dynamic(() => import('@/components/sections/marquee').then(m => m.Marquee)),
  logoCloud: dynamic(() => import('@/components/sections/logo-cloud').then(m => m.LogoCloud)),
  testimonials: dynamic(() => import('@/components/sections/testimonials').then(m => m.Testimonials)),
  pricing: dynamic(() => import('@/components/sections/pricing').then(m => m.Pricing)),
  faq: dynamic(() => import('@/components/sections/faq').then(m => m.FaqSection)),
  team: dynamic(() => import('@/components/sections/team').then(m => m.Team)),
  ctaBand: dynamic(() => import('@/components/sections/cta-band').then(m => m.CtaBand)),
  quoteBand: dynamic(() => import('@/components/sections/quote-band').then(m => m.QuoteBand)),
  newsletter: dynamic(() => import('@/components/sections/newsletter').then(m => m.Newsletter)),
  contactForm: dynamic(() => import('@/components/sections/contact-form').then(m => m.ContactForm)),
  toolPanel: dynamic(() => import('@/components/sections/tool-panel').then(m => m.ToolPanel)),
  resultsPanel: dynamic(() => import('@/components/sections/results-panel').then(m => m.ResultsPanel)),
  dashboardGrid: dynamic(() => import('@/components/sections/dashboard-grid').then(m => m.DashboardGrid)),
  richText: dynamic(() => import('@/components/sections/rich-text').then(m => m.RichText)),
  notFound: dynamic(() => import('@/components/sections/not-found-section').then(m => m.NotFoundSection)),
}

export function getSection(id: SectionId): SectionComponent | null {
  return registry[id] ?? null
}

export function SectionRenderer({ id, props }: { id: SectionId; props: Record<string, unknown> }) {
  const Component = getSection(id)
  if (!Component) {
    return (
      <div className="p-8 border-2 border-dashed border-[var(--danger)] bg-[var(--danger)]/10 text-center">
        <p className="font-mono text-sm text-[var(--danger)]">
          ⚠ Unknown section: <strong>{id}</strong>
        </p>
        <p className="font-mono text-xs text-[var(--muted)] mt-1">
          Register this section in src/lib/registry.tsx
        </p>
      </div>
    )
  }
  return <Component {...props} />
}
