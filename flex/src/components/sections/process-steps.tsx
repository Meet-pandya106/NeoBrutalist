import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'
import type { Step } from '@/config/types'

export interface ProcessStepsProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  steps?: Step[]
  title?: string
}

export function ProcessSteps({
  id,
  tone = 'default',
  className,
  loading,
  steps = [],
  title
}: ProcessStepsProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <Skeleton className="w-1/3 h-16 mb-16 mx-auto" />
          <div className="flex flex-col md:flex-row gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-4">
                <Skeleton className="w-20 h-20 rounded-full" />
                <Skeleton className="w-full h-8" />
                <Skeleton className="w-full h-24" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id={id} tone={tone} className={className}>
      <Container>
        <div className="py-16 md:py-24">
          {title && (
            <Heading level={2} className="text-center mb-20 md:mb-32">{title}</Heading>
          )}

          {steps.length > 0 ? (
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-ink/20 -z-10 mx-[12.5%]" />
              
              {/* Connecting Line (Mobile) */}
              <div className="md:hidden absolute top-0 bottom-0 left-10 w-1 bg-ink/20 -z-10" />

              <div className="flex flex-col md:flex-row gap-12 md:gap-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex-1 relative group">
                    <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 text-left md:text-center">
                      
                      {/* Step Circle */}
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-ink bg-paper shadow-brutal flex items-center justify-center font-display text-3xl md:text-4xl font-bold z-10 transition-transform group-hover:-translate-y-2 group-hover:bg-accent group-hover:shadow-hard">
                          {i + 1}
                        </div>
                        {/* Mobile connection dot active state indicator */}
                        <div className="absolute inset-0 rounded-full bg-ink scale-0 group-hover:scale-[1.15] -z-10 transition-transform duration-300 opacity-20" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 pt-2 md:pt-0">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                          {step.title}
                        </h3>
                        <p className="font-medium text-ink/70 leading-relaxed md:px-4">
                          {step.description}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-16 text-center border-4 border-dashed border-ink/30 bg-ink/5">
              <p className="font-bold uppercase tracking-widest text-ink/50">No steps configured</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
