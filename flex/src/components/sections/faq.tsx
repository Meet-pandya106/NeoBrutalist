'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'
import type { Faq } from '@/config/types'
import { Plus, Minus } from 'lucide-react'

export interface FaqProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  faqs?: Faq[]
  title?: string
  subtitle?: string
}

export function FaqSection({
  id,
  tone = 'default',
  className,
  loading,
  faqs = [],
  title,
  subtitle
}: FaqProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 py-16">
            <div className="w-full lg:w-1/3">
              <Skeleton className="w-3/4 h-16" />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-20" />
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
        <div className="py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            {title && <Heading level={2} className="mb-6">{title}</Heading>}
            {subtitle && <p className="text-xl font-medium text-ink/70">{subtitle}</p>}
          </div>

          <div className="w-full lg:w-2/3 flex flex-col border-t-4 border-ink">
            {faqs.length > 0 ? (
              faqs.map((faq, i) => {
                const isOpen = openIndex === i
                
                return (
                  <div key={i} className="border-b-4 border-ink group">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none focus-visible:bg-ink/5"
                    >
                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight pr-8 group-hover:text-accent-ink transition-colors">
                        {faq.question}
                      </h3>
                      <div className={cn(
                        "w-12 h-12 shrink-0 border-2 border-ink flex items-center justify-center bg-paper transition-all duration-300",
                        isOpen ? "bg-accent shadow-brutal rotate-180" : "group-hover:bg-ink/10"
                      )}>
                        {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </div>
                    </button>
                    
                    <div className={cn(
                      "grid transition-all duration-300 ease-out-expo",
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <p className="font-medium text-lg leading-relaxed text-ink/80 max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="py-12 text-center bg-ink/5">
                <p className="font-bold uppercase tracking-widest text-ink/50">No FAQs available</p>
              </div>
            )}
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
