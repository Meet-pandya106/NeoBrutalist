'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import type { Plan } from '@/config/types'
import { Check } from 'lucide-react'

export interface PricingProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  plans?: Plan[]
  title?: string
  subtitle?: string
  showToggle?: boolean
}

export function Pricing({
  id,
  tone = 'default',
  className,
  loading,
  plans = [],
  title,
  subtitle,
  showToggle = true
}: PricingProps) {
  const [isAnnual, setIsAnnual] = React.useState(false)

  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col items-center gap-12 py-16">
            <Skeleton className="w-1/2 h-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-[500px]" />
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
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-8">
            {title && <Heading level={2} className="mb-0">{title}</Heading>}
            {subtitle && <p className="text-xl font-medium">{subtitle}</p>}
            
            {showToggle && (
              <div className="flex items-center gap-4 bg-paper-2 border-4 border-ink p-2 mt-4 font-bold uppercase tracking-wider text-sm shadow-brutal">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={cn("px-6 py-2 transition-colors", !isAnnual ? "bg-ink text-paper" : "hover:bg-ink/5")}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={cn("px-6 py-2 transition-colors flex items-center gap-2", isAnnual ? "bg-ink text-paper" : "hover:bg-ink/5")}
                >
                  Yearly
                  <span className="text-[10px] bg-accent text-ink px-2 py-0.5 ml-1">Save 20%</span>
                </button>
              </div>
            )}
          </div>

          {plans.length > 0 ? (
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-4 xl:gap-8 max-w-7xl mx-auto">
              {plans.map((plan, i) => {
                const price = isAnnual && plan.priceYearly ? plan.priceYearly : plan.price
                const isHighlighted = plan.highlighted
                
                return (
                  <div 
                    key={i}
                    className={cn(
                      "flex-1 flex flex-col p-8 border-4 border-ink transition-transform hover:-translate-y-2 relative",
                      isHighlighted ? "bg-accent shadow-hard lg:-mt-8 lg:mb-8" : "bg-paper shadow-brutal"
                    )}
                  >
                    {isHighlighted && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-paper px-4 py-1 font-bold uppercase tracking-widest text-xs">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                      {plan.name}
                    </h3>
                    <p className={cn("text-sm font-medium mb-8 h-10", isHighlighted ? "text-ink/80" : "text-ink/60")}>
                      {plan.description}
                    </p>
                    
                    <div className="mb-8 pb-8 border-b-2 border-ink">
                      <span className="font-display text-6xl font-bold">{price}</span>
                      {price !== 'Custom' && (
                        <span className="font-bold uppercase tracking-widest text-sm ml-2 opacity-60">
                          / {isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    
                    <ul className="flex flex-col gap-4 flex-1 mb-10">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-3 font-medium">
                          <Check className="w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href={plan.ctaHref || '#'} 
                      variant={isHighlighted ? 'primary' : 'outline'}
                      className="w-full mt-auto"
                    >
                      {plan.ctaLabel || 'Get Started'}
                    </Button>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-24 text-center border-4 border-dashed border-ink/30 bg-ink/5">
              <p className="font-bold uppercase tracking-widest text-ink/50">No pricing plans configured</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
