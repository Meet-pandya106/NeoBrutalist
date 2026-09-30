import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Skeleton } from '@/components/ui/skeleton'
import type { Stat } from '@/config/types'

export interface StatsRowProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  stats?: Stat[]
  countUp?: boolean
}

export function StatsRow({
  id,
  tone = 'default',
  className,
  loading,
  stats = [],
  countUp = false
}: StatsRowProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={cn('py-12 border-y-2 border-ink', className)}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-2 divide-ink">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 px-4">
                <Skeleton className="w-24 h-16" />
                <Skeleton className="w-16 h-4" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    )
  }

  if (!stats.length) return null

  return (
    <Section id={id} tone={tone} className={cn('py-16 md:py-24 border-y-4 border-ink', className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 divide-x-0 md:divide-x-4 divide-ink">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-anim="reveal-up"
              data-anim-delay={String(i * 0.08)}
              className={cn(
                "flex flex-col items-center justify-center gap-3 px-4 md:px-8 text-center",
                i % 2 !== 0 && "border-l-4 md:border-l-0 border-ink", // Mobile grid dividers
                "md:border-t-0"
              )}
            >
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink leading-none tabular-nums">
                {stat.value}
              </div>
              <div className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-ink opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
