import * as React from 'react'
import { cn } from '@/lib/cn'
import { Section } from '@/components/layout/section'
import { Skeleton } from '@/components/ui/skeleton'
import { Star } from 'lucide-react'

export interface MarqueeProps {
  id?: string
  tone?: 'default' | 'accent' | 'dark' | 'paper'
  className?: string
  loading?: boolean
  items?: string[]
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  variant?: 'text' | 'logo'
}

export function Marquee({
  id,
  tone = 'accent',
  className,
  loading,
  items = [],
  speed = 'normal',
  direction = 'left',
  variant = 'text'
}: MarqueeProps) {
  if (loading) {
    return (
      <Section id={id} tone={tone} className={cn("py-4 md:py-6 border-y-4 border-ink overflow-hidden", className)}>
        <div className="flex gap-8 px-4 opacity-50">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-48 h-12 shrink-0" />
          ))}
        </div>
      </Section>
    )
  }

  if (!items.length) return null

  // Duplicate items to ensure smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items]

  const speedClass = {
    slow: 'animate-[marquee_60s_linear_infinite]',
    normal: 'animate-[marquee_40s_linear_infinite]',
    fast: 'animate-[marquee_20s_linear_infinite]'
  }[speed]

  const directionStyle = direction === 'right' ? { animationDirection: 'reverse' } : {}

  return (
    <Section 
      id={id} 
      tone={tone} 
      bleed={true}
      className={cn(
        "py-4 md:py-6 border-y-4 border-ink overflow-hidden flex whitespace-nowrap select-none",
        className
      )}
    >
      <div 
        className="marquee-track flex items-center w-max"
        style={directionStyle}
      >
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {variant === 'text' ? (
              <>
                <span className="font-display text-3xl md:text-5xl font-bold uppercase tracking-widest px-8 text-ink">
                  {item}
                </span>
                <Star className="w-6 h-6 md:w-8 md:h-8 text-accent-2 shrink-0 fill-accent-2 mx-2" />
              </>
            ) : (
              <div className="px-12 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <img src={item} alt="Logo" className="h-12 object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
