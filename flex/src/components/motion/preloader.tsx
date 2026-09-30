'use client'

import React, { useEffect, useState, useRef } from 'react'
import { animate } from 'animejs'
import { siteConfig } from '@/config/site.config'

export function Preloader() {
  const [complete, setComplete] = useState(false)
  const [count, setCount] = useState(0)
  const leftPanelRef = useRef<HTMLDivElement | null>(null)
  const rightPanelRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!siteConfig.features.preloader) {
      setComplete(true)
      return
    }

    // Skip on repeat visits in same session
    if (sessionStorage.getItem('flex-preloaded')) {
      setComplete(true)
      return
    }

    const obj = { val: 0 }
    animate(obj, {
      val: 100,
      duration: 1100,
      ease: 'inOut(3)',
      onUpdate: () => {
        setCount(Math.round(obj.val))
      },
      onComplete: () => {
        // Curtain wipe
        if (contentRef.current) {
          animate(contentRef.current, {
            opacity: 0,
            duration: 200,
            ease: 'out(2)',
          })
        }
        if (leftPanelRef.current && rightPanelRef.current) {
          animate(leftPanelRef.current, {
            translateX: '-100%',
            duration: 600,
            ease: 'inOut(4)',
          })
          animate(rightPanelRef.current, {
            translateX: '100%',
            duration: 600,
            ease: 'inOut(4)',
            onComplete: () => {
              sessionStorage.setItem('flex-preloaded', 'true')
              setComplete(true)
            },
          })
        } else {
          sessionStorage.setItem('flex-preloaded', 'true')
          setComplete(true)
        }
      },
    })
  }, [])

  if (complete) return null

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex" aria-hidden="true">
      {/* Left curtain */}
      <div
        ref={leftPanelRef}
        className="w-1/2 h-full bg-ink border-r border-line/20 relative"
      />
      {/* Right curtain */}
      <div
        ref={rightPanelRef}
        className="w-1/2 h-full bg-ink border-l border-line/20 relative"
      />

      {/* Central progress readout */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-paper"
      >
        <span className="font-mono text-7xl md:text-9xl font-bold tracking-tight text-accent">
          {String(count).padStart(3, '0')}
        </span>
        <div className="w-64 h-2 bg-paper/20 mt-6 overflow-hidden rounded-full border border-paper/40">
          <div
            className="h-full bg-accent transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-muted mt-4">
          INITIALIZING SYSTEM...
        </span>
      </div>
    </div>
  )
}
