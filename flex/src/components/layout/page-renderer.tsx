'use client'

import { useEffect } from 'react'
import type { Preset, PageDef } from '@/config/types'
import { SectionRenderer } from '@/lib/registry'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { DevPanel } from '@/components/layout/dev-panel'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { useFlexStore } from '@/lib/store'

import { MotionProvider } from '@/components/motion/motion-provider'
import { CustomCursor } from '@/components/motion/custom-cursor'
import { Preloader } from '@/components/motion/preloader'
import { DraggableSticker } from '@/components/motion/draggable-sticker'

interface PageRendererProps {
  preset: Preset
  page: PageDef
}

/**
 * Renders a complete page from a preset + page definition.
 * Includes header, sections in order, footer, and dev panel.
 */
export function PageRenderer({ preset, page }: PageRendererProps) {
  const { accent, accentInk, styleMode } = useFlexStore()

  // Apply preset theme overrides
  useEffect(() => {
    if (preset.theme?.accent) {
      document.documentElement.style.setProperty('--accent', preset.theme.accent)
      document.documentElement.style.setProperty('--accent-ink', preset.theme.accentInk ?? '#0A0A0A')
    }
    if (preset.theme?.styleMode) {
      document.documentElement.setAttribute('data-style', preset.theme.styleMode)
    }
  }, [preset.theme, accent, accentInk, styleMode])

  return (
    <MotionProvider>
      <Preloader />
      <CustomCursor />
      <ScrollProgress totalSections={page.sections.length} />
      <Header nav={preset.nav} />

      <main id="main-content" className="min-h-screen">
        {page.sections.map((section, index) => (
          <SectionRenderer
            key={`${section.id}-${index}`}
            id={section.id}
            props={section.props}
          />
        ))}
      </main>

      <Footer {...preset.footer} />
      <DraggableSticker />
      <DevPanel />
    </MotionProvider>
  )
}
