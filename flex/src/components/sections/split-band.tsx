import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Highlight } from '@/components/ui/highlight'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export interface SplitBandProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper' | 'paper-2' | 'ink' | 'alt'
  className?: string
  loading?: boolean
  image?: string
  statement?: string
  headline?: string
  highlightWord?: string
  paragraph?: string
  text?: string
  ctaLabel?: string
  buttonText?: string
  ctaHref?: string
  buttonHref?: string
}

export function SplitBand({
  id,
  tone = 'default',
  className,
  loading,
  image,
  statement,
  headline,
  highlightWord = 'BY DESIGN.',
  paragraph,
  text,
  ctaLabel,
  buttonText,
  ctaHref,
  buttonHref,
}: SplitBandProps) {
  const activeStatement = statement || headline || 'STRATEGY BY DESIGN.'
  const activeParagraph = paragraph || text || 'We blend strategy, creativity and technology to craft bold experiences.'
  const activeCtaLabel = ctaLabel || buttonText || 'OUR SERVICES'
  const activeCtaHref = ctaHref || buttonHref || '/services'
  if (loading) {
    return (
      <Section id={id} tone={tone} className={className}>
        <div className="flex flex-col lg:flex-row min-h-[50vh] border-y-4 border-ink">
          <div className="w-full lg:w-1/3 bg-ink/10 p-12 flex items-center justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-ink">
            <Skeleton className="w-full h-full min-h-[300px]" />
          </div>
          <div className="w-full lg:w-2/3 p-12 lg:p-24 flex flex-col justify-center gap-8">
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-2/3 h-16" />
            <Skeleton className="w-full h-24 mt-4" />
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section id={id} tone={tone} className={cn('p-0 overflow-hidden', className)}>
      <div className="flex flex-col lg:flex-row min-h-[60vh] border-y-4 border-ink bg-paper">
        {/* Left Side - Image with clip path */}
        <div className="w-full lg:w-[40%] relative border-b-4 lg:border-b-0 lg:border-r-4 border-ink min-h-[40vh] lg:min-h-full overflow-hidden bg-accent">
          {image ? (
            <img 
              src={image} 
              alt="Section media" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
              style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-stripes-ink">
              <span className="font-bold uppercase tracking-widest bg-paper px-4 py-2 border-2 border-ink">Media Slot</span>
            </div>
          )}
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center p-8 sm:p-16 lg:p-24 gap-8">
          {activeStatement && (
            <h2 data-anim="reveal-up" className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
              {highlightWord && activeStatement.includes(highlightWord) ? (
                activeStatement.split(highlightWord).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <Highlight>{highlightWord}</Highlight>}
                  </React.Fragment>
                ))
              ) : (
                activeStatement
              )}
            </h2>
          )}
          
          <div data-anim="reveal-up" data-anim-delay="0.15" className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-4">
            {activeParagraph && (
              <p className="text-xl font-medium leading-tight max-w-md border-l-4 border-accent pl-6 py-2">
                {activeParagraph}
              </p>
            )}
            
            {activeCtaLabel && (
              <div className="sm:ml-auto">
                <Button href={activeCtaHref} variant="solid" size="l" data-anim="magnetic">
                  {activeCtaLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
