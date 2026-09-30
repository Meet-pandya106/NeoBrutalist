import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'

export interface LogoCloudProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper' | 'paper-2' | 'ink'
  className?: string
  loading?: boolean
  logos?: { name: string; svg?: string; image?: string }[]
  title?: string
  image?: string
}

export function LogoCloud({
  id,
  tone = 'default',
  className,
  loading,
  logos = [],
  title,
  image,
}: LogoCloudProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <Container>
          <div className="flex flex-col items-center gap-12 py-12">
            <Skeleton className="w-1/3 h-8" />
            <div className="flex flex-wrap justify-center gap-12 w-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="w-32 h-16" />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  if (!logos.length && !image) return null

  return (
    <Section id={id} tone={tone} className={cn("py-12 md:py-20", className)}>
      <Container>
        <div className="flex flex-col items-center gap-10">
          {title && (
            <p className="font-mono font-bold uppercase tracking-[0.2em] text-sm text-ink text-center">
              {title}
            </p>
          )}

          {image ? (
            <div className="w-full max-w-4xl p-6 border-4 border-ink shadow-brutal bg-paper overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Partner Brand Logos"
                className="w-full h-auto object-contain filter contrast-125 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
              {logos.map((logo, i) => (
              <div 
                key={i}
                className="flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                title={logo.name}
              >
                {logo.svg ? (
                  <div dangerouslySetInnerHTML={{ __html: logo.svg }} className="h-10 md:h-12 w-auto fill-current text-ink" />
                ) : logo.image ? (
                  <img src={logo.image} alt={logo.name} className="h-10 md:h-12 w-auto object-contain" />
                ) : (
                  <span className="font-display text-2xl font-bold uppercase tracking-wider">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
