'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { CircleArrowButton } from '@/components/ui/circle-arrow-button'
import { Highlight } from '@/components/ui/highlight'
import { Pill } from '@/components/ui/pill'
import { Heading } from '@/components/ui/heading'
import { LabelText } from '@/components/ui/label-text'
import { Counter } from '@/components/ui/counter'
import { Crosshair } from '@/components/ui/crosshair'
import { Divider } from '@/components/ui/divider'
import { MarkerDot } from '@/components/ui/marker-dot'
import { Skeleton } from '@/components/ui/skeleton'
import { ImageBlock } from '@/components/ui/image-block'
import { HeroVisual, CircularTextBadge, GlobeVisual } from '@/components/hero/hero-visual'
import { useFlexStore } from '@/lib/store'
import { DevPanel } from '@/components/layout/dev-panel'
import { themeConfig } from '@/config/theme.config'

export default function StyleguidePage() {
  const { theme, toggleTheme, accent, setAccent, styleMode, setStyleMode } = useFlexStore()
  const [activeHeroVisual, setActiveHeroVisual] = useState<string>('blob')

  const heroVisuals = [
    'blob',
    'blobCss',
    'globe',
    'toolCard',
    'chart',
    'chatPreview',
    'mapPins',
    'collage',
  ]

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors">
      <Header />

      <main className="pt-24 pb-32">
        <Section tone="paper">
          <Container>
            <div className="mb-16 border-b-4 border-ink pb-8">
              <Pill className="mb-4">SYSTEM DESIGN SYSTEM</Pill>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight font-bold">
                FLEX <Highlight variant={1}>STYLEGUIDE</Highlight>
              </h1>
              <p className="text-xl text-muted max-w-2xl mt-4 font-medium">
                Comprehensive component showcase and token verification page for neo-brutalist layouts.
              </p>
            </div>

            {/* THEME & TOKEN CONTROLS */}
            <div className="mb-20 p-8 border-4 border-ink shadow-brutal bg-paper-2">
              <h2 className="font-display text-3xl uppercase font-bold mb-6 flex items-center gap-2">
                <MarkerDot size="md" /> Design Tokens & Live Controls
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <LabelText className="mb-2 block">Theme Mode</LabelText>
                  <Button onClick={toggleTheme} variant="solid" className="w-full">
                    Toggle Mode: {theme.toUpperCase()}
                  </Button>
                </div>
                <div>
                  <LabelText className="mb-2 block">Style Mode</LabelText>
                  <div className="flex gap-2">
                    {(['brutal', 'clean', 'soft'] as const).map((m) => (
                      <Button
                        key={m}
                        variant={styleMode === m ? 'accent' : 'outline'}
                        onClick={() => setStyleMode(m)}
                        size="sm"
                        className="flex-1"
                      >
                        {m}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <LabelText className="mb-2 block">Accent Presets</LabelText>
                  <div className="flex flex-wrap gap-2">
                    {themeConfig.accentPresets.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => setAccent(p.value, p.ink)}
                        className="w-8 h-8 rounded-full border-2 border-ink hover:scale-110 transition-transform"
                        style={{ backgroundColor: p.value }}
                        title={p.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mb-20">
              <h2 className="font-display text-4xl uppercase font-bold mb-8 pb-2 border-b-2 border-ink flex items-center gap-3">
                <Counter current={1} total={5} /> Buttons & Circle-Arrow Motif
              </h2>
              <div className="space-y-8">
                <div>
                  <LabelText className="mb-4 block">Variants</LabelText>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="solid">Solid Button</Button>
                    <Button variant="accent">Accent Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                </div>

                <div>
                  <LabelText className="mb-4 block">Sizes & States</LabelText>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="s">Small</Button>
                    <Button size="m">Medium</Button>
                    <Button size="l">Large</Button>
                    <Button withArrow>With Arrow</Button>
                    <Button isLoading>Loading State</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <LabelText className="mb-4 block">CircleArrowButton Motif (Sizes 32, 48, 64, 96)</LabelText>
                  <div className="flex flex-wrap items-center gap-6">
                    <CircleArrowButton size={32} />
                    <CircleArrowButton size={48} variant="filled-accent" />
                    <CircleArrowButton size={64} variant="filled-ink" />
                    <CircleArrowButton size={96} variant="outline" />
                  </div>
                </div>
              </div>
            </div>

            {/* TYPOGRAPHY & HIGHLIGHTS */}
            <div className="mb-20">
              <h2 className="font-display text-4xl uppercase font-bold mb-8 pb-2 border-b-2 border-ink flex items-center gap-3">
                <Counter current={2} total={5} /> Typography & Highlighters
              </h2>
              <div className="space-y-8">
                <div className="p-8 border-2 border-ink bg-paper">
                  <span className="text-label text-muted block mb-2">DISPLAY XL</span>
                  <div className="font-display text-display-xl uppercase font-bold leading-none">
                    WE CREATE WHAT M<span className="inline-block align-middle mx-1"><CircleArrowButton size={48} variant="filled-accent" /></span>VES
                  </div>
                </div>

                <div className="p-8 border-2 border-ink bg-paper">
                  <span className="text-label text-muted block mb-2">HIGHLIGHT BRUSH STROKES</span>
                  <div className="font-display text-4xl md:text-5xl uppercase font-bold space-y-4">
                    <div>
                      STRATEGY <Highlight variant={1}>BY DESIGN.</Highlight> (Shape 1)
                    </div>
                    <div>
                      BUILT FOR <Highlight variant={2}>SCALE AND SPEED</Highlight> (Shape 2)
                    </div>
                    <div>
                      RADICAL <Highlight variant={3}>SIMPLICITY</Highlight> (Shape 3)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 border-2 border-ink">
                    <span className="text-label text-muted block mb-2">Pills & Badges</span>
                    <div className="flex flex-wrap gap-3">
                      <Pill variant="solid">DESIGN AGENCY</Pill>
                      <Pill variant="tag">SYSTEM 2.0</Pill>
                      <Pill variant="badge">ACTIVE 99.9%</Pill>
                    </div>
                  </div>
                  <div className="p-6 border-2 border-ink">
                    <span className="text-label text-muted block mb-2">Crosshairs & Micro Labels</span>
                    <div className="flex items-center gap-6">
                      <Crosshair size="sm" />
                      <Crosshair size="md" />
                      <Crosshair size="lg" />
                      <LabelText>SYS.CONF.019</LabelText>
                      <MarkerDot size="lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO VISUAL VARIANTS */}
            <div className="mb-20">
              <h2 className="font-display text-4xl uppercase font-bold mb-8 pb-2 border-b-2 border-ink flex items-center gap-3">
                <Counter current={3} total={5} /> Hero Visual Switcher
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {heroVisuals.map((v) => (
                  <Button
                    key={v}
                    variant={activeHeroVisual === v ? 'accent' : 'outline'}
                    size="sm"
                    onClick={() => setActiveHeroVisual(v)}
                  >
                    {v}
                  </Button>
                ))}
              </div>
              <div className="p-12 border-4 border-ink bg-paper-2 flex flex-col md:flex-row items-center justify-around gap-8 min-h-[450px]">
                <div className="max-w-xs">
                  <span className="text-label text-muted block mb-2">ACTIVE VARIANT</span>
                  <h3 className="font-display text-4xl uppercase font-bold mb-4">{activeHeroVisual}</h3>
                  <p className="text-sm text-muted">
                    Slot-based visual architecture allows swapping any hero graphic without touching layout structure.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <CircularTextBadge />
                    <GlobeVisual className="w-24 h-24" />
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <HeroVisual variant={activeHeroVisual} />
                </div>
              </div>
            </div>

            {/* ASYNC & SKELETON STATES */}
            <div className="mb-20">
              <h2 className="font-display text-4xl uppercase font-bold mb-8 pb-2 border-b-2 border-ink flex items-center gap-3">
                <Counter current={4} total={5} /> Loading Skeletons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border-2 border-ink">
                  <Skeleton className="w-24 h-6 mb-4" />
                  <Skeleton className="w-full h-12 mb-3" />
                  <Skeleton className="w-3/4 h-8" />
                </div>
                <div className="p-6 border-2 border-ink">
                  <Skeleton className="w-full aspect-video mb-4" />
                  <Skeleton className="w-1/2 h-6" />
                </div>
                <div className="p-6 border-2 border-ink flex flex-col items-center justify-center">
                  <Skeleton className="w-24 h-24 rounded-full mb-4" />
                  <Skeleton className="w-32 h-6" />
                </div>
              </div>
            </div>

            {/* IMAGE BLOCK MASKS */}
            <div className="mb-20">
              <h2 className="font-display text-4xl uppercase font-bold mb-8 pb-2 border-b-2 border-ink flex items-center gap-3">
                <Counter current={5} total={5} /> Image Block Masks & Presets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <LabelText className="mb-2 block">Square (1:1)</LabelText>
                  <ImageBlock aspectRatio="square" alt="Square" />
                </div>
                <div>
                  <LabelText className="mb-2 block">Portrait (3:4)</LabelText>
                  <ImageBlock aspectRatio="3:4" alt="Portrait" />
                </div>
                <div>
                  <LabelText className="mb-2 block">Landscape (16:9)</LabelText>
                  <ImageBlock aspectRatio="16:9" alt="Landscape" />
                </div>
                <div>
                  <LabelText className="mb-2 block">Angled Mask</LabelText>
                  <ImageBlock aspectRatio="square" angled alt="Angled" />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer
        variant="cta"
        ctaHeadline="READY TO EXPLORE THE TEMPLATES?"
        ctaButton="VIEW HOME"
        contactEmail="hello@flex.brutal"
      />
      <DevPanel />
    </div>
  )
}
