'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'
import type { Testimonial } from '@/config/types'
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react'

export interface TestimonialsProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  testimonials?: Testimonial[]
  variant?: 'carousel' | 'grid'
  title?: string
}

export function Testimonials({
  id,
  tone = 'default',
  className,
  loading,
  testimonials = [],
  variant = 'carousel',
  title
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col gap-12 py-16">
            <Skeleton className="w-1/3 h-16 mx-auto" />
            <Skeleton className="w-full h-96" />
          </div>
        </Container>
      </Section>
    )
  }

  if (!testimonials.length) return null

  return (
    <Section id={id} tone={tone} className={className}>
      <Container>
        <div className="py-16 md:py-24">
          {title && (
            <Heading level={2} className="text-center mb-16">{title}</Heading>
          )}

          {variant === 'carousel' ? (
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden border-4 border-ink shadow-brutal bg-paper p-8 md:p-16">
                <Quote className="w-16 h-16 text-accent mb-8" />
                
                <div 
                  className="flex transition-transform duration-500 ease-out-expo"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((t, i) => (
                    <div key={i} className="w-full shrink-0 flex flex-col gap-8">
                      <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-ink object-cover" />
                        ) : (
                          <div className="w-16 h-16 rounded-full border-2 border-ink bg-accent flex items-center justify-center font-bold text-xl">
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="font-bold uppercase tracking-wider">{t.name}</p>
                          <p className="text-sm font-medium text-ink/70">{t.role}</p>
                        </div>
                        {t.rating && (
                          <div className="ml-auto flex gap-1">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={cn("w-5 h-5", j < t.rating! ? "fill-ink" : "fill-transparent stroke-ink/30")} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8 px-4">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "w-12 h-3 border-2 border-ink transition-colors",
                        i === activeIndex ? "bg-accent" : "bg-paper-2 hover:bg-ink/10"
                      )}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 border-2 border-ink flex items-center justify-center bg-paper hover:bg-accent transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button onClick={next} className="w-12 h-12 border-2 border-ink flex items-center justify-center bg-paper hover:bg-accent transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 border-4 border-ink shadow-brutal bg-paper hover:-translate-y-2 hover:shadow-hard transition-all">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={cn("w-5 h-5", j < (t.rating || 5) ? "fill-ink" : "fill-transparent stroke-ink/30")} />
                    ))}
                  </div>
                  <p className="font-medium text-lg flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-ink">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-ink object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full border-2 border-ink bg-accent flex items-center justify-center font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold uppercase tracking-wider text-sm">{t.name}</p>
                      <p className="text-xs font-bold text-ink/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
