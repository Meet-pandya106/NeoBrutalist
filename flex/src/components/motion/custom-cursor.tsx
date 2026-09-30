'use client'

import React, { useEffect, useState, useRef } from 'react'
import { animate } from 'animejs'
import { siteConfig } from '@/config/site.config'

/**
 * CustomCursor
 * Neo-brutalist interactive cursor with crosshair / dot.
 * Auto-hides on touch screens.
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Only enable if flag is true or desktop with mouse
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        animate(cursorRef.current, {
          translateX: e.clientX,
          translateY: e.clientY,
          duration: 80,
          ease: 'out(1)',
        })
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null
      const interactive = target?.closest('a, button, [role="button"], input, select, textarea, [data-cursor]')
      if (interactive) {
        setIsHovered(true)
        const customLabel = interactive.getAttribute('data-cursor')
        setLabel(customLabel || null)
      } else {
        setIsHovered(false)
        setLabel(null)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted || !siteConfig.features.cursor) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center transition-all duration-200 ${
          isHovered
            ? 'w-12 h-12 bg-accent text-accent-ink rounded-full scale-110 shadow-brutal'
            : 'w-4 h-4 bg-paper rounded-full'
        }`}
      >
        {label && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
