import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'
import type { Feature } from '@/config/types'
import * as Icons from 'lucide-react'

export interface FeatureGridProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  features?: Feature[]
  columns?: 3 | 4
  variant?: 'icon' | 'numbered'
  title?: string
  subtitle?: string
}

export function FeatureGrid({
  id,
  tone = 'default',
  className,
  loading,
  features = [],
  columns = 3,
  variant = 'icon',
  title,
  subtitle
}: FeatureGridProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col gap-16">
            <Skeleton className="w-1/2 h-16 mx-auto" />
            <div className={cn("grid gap-8 lg:gap-12", columns === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3")}>
              {Array.from({ length: columns }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="w-3/4 h-8" />
                  <Skeleton className="w-full h-24" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  const gridCols = columns === 4 
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
    : "grid-cols-1 md:grid-cols-3"

  return (
    <Section id={id} tone={tone} className={className}>
      <Container>
        <div className="py-16 md:py-24">
          {(title || subtitle) && (
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
              {title && <Heading level={2} className="mb-0">{title}</Heading>}
              {subtitle && <p className="text-xl font-medium leading-relaxed">{subtitle}</p>}
            </div>
          )}

          {features.length > 0 ? (
            <div className={cn("grid gap-x-12 gap-y-16", gridCols)}>
              {features.map((feature, i) => {
                // @ts-ignore - dynamic icon loading
                const Icon = feature.icon && Icons[feature.icon] ? Icons[feature.icon] : Icons.CheckCircle
                
                return (
                  <div key={i} className="flex flex-col gap-6 group relative">
                    {/* Number background for 'numbered' variant */}
                    {variant === 'numbered' && (
                      <div className="absolute -top-12 -left-4 font-display text-[8rem] font-bold text-ink/5 -z-10 group-hover:text-accent/20 transition-colors pointer-events-none leading-none select-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    )}

                    <div className={cn(
                      "flex items-center justify-center border-4 border-ink bg-paper shadow-brutal transition-transform group-hover:-translate-y-1 group-hover:shadow-hard",
                      variant === 'icon' ? "w-16 h-16 rounded-full" : "w-14 h-14 bg-accent"
                    )}>
                      {variant === 'icon' ? (
                        <Icon className="w-8 h-8 text-ink" strokeWidth={2.5} />
                      ) : (
                        <span className="font-display text-2xl font-bold">{i + 1}</span>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3 border-b-2 border-ink pb-3 inline-block">
                        {feature.title}
                      </h3>
                      <p className="font-medium text-ink/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-12 text-center border-4 border-dashed border-ink/30 bg-ink/5">
              <p className="font-bold uppercase tracking-widest text-ink/50">No features configured</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
