'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Pill } from '@/components/ui/pill'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import type { Service } from '@/config/types'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export interface ServicesListProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper' | 'paper-2' | 'ink' | 'alt'
  className?: string
  loading?: boolean
  services?: Service[]
  title?: string
}

export function ServicesList({
  id,
  tone = 'default',
  className,
  loading,
  services = [],
  title
}: ServicesListProps) {
  const [expandedId, setExpandedId] = React.useState<string | null>(null)

  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <Skeleton className="w-1/3 h-16 mb-12" />
          <div className="flex flex-col border-t-4 border-ink">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="py-8 border-b-4 border-ink flex items-center justify-between">
                <Skeleton className="w-1/2 h-12" />
                <Skeleton className="w-32 h-10" />
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
            <Heading level={2} className="mb-16 uppercase">{title}</Heading>
          )}

          {services.length > 0 ? (
            <div className="flex flex-col border-t-4 border-ink">
              {services.map((service, i) => {
                const isExpanded = expandedId === service.title
                
                return (
                  <div 
                    key={i} 
                    className="group border-b-4 border-ink hover:bg-accent/10 transition-colors"
                  >
                    {/* Desktop View - Hover Reveal */}
                    <Link 
                      href={service.href || '#'} 
                      className="hidden md:grid grid-cols-12 gap-6 items-center py-10 px-4 focus:outline-none focus:bg-accent/20"
                    >
                      <div className="col-span-1 font-display text-2xl font-bold text-ink/30">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      
                      <div className="col-span-6 flex flex-col gap-2">
                        <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                          {service.title}
                        </h3>
                        {/* Hidden description revealed on hover */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out-expo">
                          <p className="overflow-hidden font-medium text-lg text-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xl group-hover:translate-x-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="col-span-4 flex flex-wrap gap-2 justify-end">
                        {(service.features ?? service.tags ?? []).slice(0, 3).map((feat: string, j: number) => (
                          <Pill key={j} className="bg-paper border-ink group-hover:bg-ink group-hover:text-paper transition-colors">
                            {feat}
                          </Pill>
                        ))}
                      </div>
                      
                      <div className="col-span-1 flex justify-end">
                        <div className="w-16 h-16 rounded-full border-4 border-ink bg-paper flex items-center justify-center group-hover:bg-accent group-hover:-rotate-45 transition-all duration-300">
                          <ArrowRight strokeWidth={3} className="w-8 h-8" />
                        </div>
                      </div>
                    </Link>

                    {/* Mobile View - Accordion */}
                    <div className="md:hidden">
                      <button 
                        onClick={() => setExpandedId(isExpanded ? null : service.title)}
                        className="w-full flex items-center justify-between py-6 px-2 focus:outline-none"
                      >
                        <div className="flex flex-col items-start text-left gap-2">
                          <span className="font-display text-sm font-bold text-ink/50">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                            {service.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 border-2 border-ink flex items-center justify-center shrink-0 ml-4 bg-paper">
                          {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      
                      <div className={cn(
                        "grid transition-all duration-300 ease-in-out px-2",
                        isExpanded ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <p className="font-medium text-ink/80 mb-6">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {(service.features ?? service.tags ?? []).map((feat: string, j: number) => (
                              <span key={j} className="text-xs font-bold uppercase tracking-wider border-2 border-ink px-2 py-1">
                                {feat}
                              </span>
                            ))}
                          </div>
                          {service.href && (
                            <Button href={service.href} variant="outline" className="w-full">
                              Explore Service
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-24 text-center border-4 border-dashed border-ink/30 bg-ink/5">
              <p className="font-bold uppercase tracking-widest text-ink/50">No services available</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
