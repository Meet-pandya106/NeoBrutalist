import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { MarkerDot } from '@/components/ui/marker-dot'
import { Skeleton } from '@/components/ui/skeleton'
import type { Card } from '@/config/types'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface WorkGridProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  title?: string
  markerDot?: boolean
  viewAllHref?: string
  cards?: Card[]
  items?: Card[]
}

export function WorkGrid({
  id,
  tone = 'default',
  className,
  loading,
  title,
  markerDot,
  viewAllHref,
  cards = [],
  items = [],
}: WorkGridProps) {
  const activeCards = cards.length > 0 ? cards : items
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col gap-12">
            <Skeleton className="w-1/3 h-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="w-full aspect-square" />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id={id} tone={tone} className={className}>
      <Container>
        <div className="flex flex-col gap-16 py-12">
          {title && (
            <div className="flex items-end justify-between border-b-4 border-ink pb-8">
              <div className="flex items-center gap-6">
                {markerDot && <MarkerDot size="lg" className="hidden md:block" />}
                <Heading level={2} className="mb-0">{title}</Heading>
              </div>
              {viewAllHref && (
                <Link 
                  href={viewAllHref}
                  className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent-ink transition-colors"
                >
                  View All
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              )}
            </div>
          )}

          {activeCards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {activeCards.map((card, i) => (
                <Link 
                  key={i} 
                  href={card.href || '#'}
                  data-anim="tilt"
                  data-cursor="VIEW"
                  className="group flex flex-col gap-4 focus:outline-none"
                >
                  <div className="relative aspect-square w-full overflow-hidden border-4 border-ink bg-paper-2 shadow-brutal transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-hard group-focus-visible:ring-4 group-focus-visible:ring-accent">
                    {card.badge && (
                      <div className="absolute top-3 right-3 z-20 font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-accent-2 text-paper border-2 border-ink shadow-[2px_2px_0px_var(--ink)]">
                        {card.badge}
                      </div>
                    )}
                    {card.image ? (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-8 bg-stripes-ink opacity-20 group-hover:opacity-40 transition-opacity" />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out-expo flex items-center justify-center p-8 text-center border-t-4 border-ink">
                      <span className="font-display text-4xl uppercase font-bold text-ink mix-blend-color-burn">
                        Explore
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mt-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-ink group-hover:text-accent-ink transition-colors">
                      {card.title}
                    </h3>
                    {(card.subtitle || card.category) && (
                      <span className="font-bold uppercase tracking-widest text-xs px-3 py-1 bg-ink text-paper mt-1">
                        {card.subtitle || card.category}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border-4 border-dashed border-ink/30 bg-ink/5">
              <p className="font-bold uppercase tracking-widest text-ink/50">No works available</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
