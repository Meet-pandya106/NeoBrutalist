'use client'

import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Pill } from '@/components/ui/pill'
import { Crosshair } from '@/components/ui/crosshair'
import { Skeleton } from '@/components/ui/skeleton'
import { HeroVisual, CircularTextBadge, GlobeVisual } from '@/components/hero/hero-visual'
import type { Stat } from '@/config/types'

export interface HeroProps {
  id?: string
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent'
  className?: string
  loading?: boolean
  /** Small pill label above headline */
  pill?: string
  /** Headline text - use \n for line breaks */
  headline?: string
  /** Supporting paragraph */
  paragraph?: string
  /** Primary CTA */
  ctaLabel?: string
  ctaHref?: string
  /** Secondary CTA */
  secondaryLabel?: string
  secondaryHref?: string
  /** Stats row beneath the hero text */
  stats?: Stat[]
  /** Hero visual variant */
  visual?: string
  /** Extra content for the visual slot */
  visualContent?: Record<string, unknown>
}

/**
 * Hero section — the main above-the-fold component.
 * Left: pill, giant headline, paragraph, CTAs, stats.
 * Right: hero visual + decorations.
 */
export function Hero({
  id,
  tone,
  className,
  loading,
  pill,
  headline = 'WE CREATE\nWHAT\nMOVES',
  paragraph,
  ctaLabel,
  ctaHref = '#',
  secondaryLabel,
  secondaryHref = '#',
  stats,
  visual = 'blob',
  visualContent,
}: HeroProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[70vh] items-center">
            <div className="space-y-6">
              <Skeleton className="w-48 h-6 rounded-full" />
              <Skeleton className="w-full h-32" />
              <Skeleton className="w-2/3 h-6" />
              <div className="flex gap-4">
                <Skeleton className="w-40 h-14 rounded-full" />
                <Skeleton className="w-40 h-14 rounded-full" />
              </div>
            </div>
            <Skeleton className="w-full aspect-square" />
          </div>
        </Container>
      </Section>
    )
  }

  const lines = headline.split('\\n').length > 1 ? headline.split('\\n') : headline.split('\n')

  return (
    <Section id={id} tone={tone} className={cn('relative overflow-hidden', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[70vh] items-center py-8 lg:py-0">
          {/* Left — Text */}
          <div className="flex flex-col items-start gap-6 z-10 relative order-2 lg:order-1">
            {pill && (
              <div data-anim="scale-in">
                <Pill>{pill}</Pill>
              </div>
            )}

            <h1
              data-anim="reveal-up"
              className="font-display leading-[0.88] tracking-[-0.02em] uppercase"
              style={{ fontSize: 'var(--fs-display-xl)' }}
            >
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {paragraph && (
              <p
                data-anim="reveal-up"
                data-anim-delay="0.1"
                className="text-[var(--muted)] max-w-lg"
                style={{ fontSize: 'var(--fs-body-l)', lineHeight: 1.6 }}
              >
                {paragraph}
              </p>
            )}

            <div data-anim="reveal-up" data-anim-delay="0.2" className="flex flex-wrap gap-4 mt-2">
              {ctaLabel && (
                <a
                  href={ctaHref}
                  data-anim="magnetic"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--accent-ink)] px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider hover:brightness-110 transition-all active:scale-95 shadow-brutal"
                >
                  {ctaLabel}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {secondaryLabel && (
                <a
                  href={secondaryHref}
                  data-anim="magnetic"
                  className="inline-flex items-center gap-2 border-2 border-[var(--ink)] text-[var(--ink)] px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all active:scale-95"
                >
                  {secondaryLabel}
                </a>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div
                data-anim="reveal-up"
                data-anim-delay="0.3"
                className="flex flex-wrap gap-6 lg:gap-8 mt-8 pt-8 border-t-2 border-[var(--line)] w-full"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 min-w-[100px]">
                    <span className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-ink tabular-nums">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </span>
                    <span className="text-label text-ink font-bold opacity-90">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — Visual */}
          <div data-anim="scale-in" data-anim-delay="0.15" className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Decorations */}
            <Crosshair size="lg" className="absolute -top-4 -right-4 opacity-30 hidden lg:block" />
            <Crosshair size="md" className="absolute bottom-8 -left-4 opacity-20 hidden lg:block" />

            {/* Globe wireframe behind blob */}
            {visual === 'blob' && (
              <div className="absolute top-0 right-0 opacity-60">
                <GlobeVisual className="w-[160px] lg:w-[200px]" />
              </div>
            )}

            {/* Circular text badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-4 lg:right-4 z-20">
              <CircularTextBadge />
            </div>

            {/* Counter */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-20">
              <span className="font-mono text-sm font-bold">01</span>
              <div className="w-px h-16 bg-[var(--line)]" />
              <span className="font-mono text-sm text-[var(--muted)]">05</span>
            </div>

            <HeroVisual variant={visual} content={visualContent} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
