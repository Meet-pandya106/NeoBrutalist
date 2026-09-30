'use client'

import React, { useEffect, useRef } from 'react'
import { createDraggable, animate } from 'animejs'
import { useFlexStore } from '@/lib/store'

export function DraggableSticker() {
  const stickerRef = useRef<HTMLDivElement | null>(null)
  const animationsEnabled = useFlexStore((s) => s.animationsEnabled)

  useEffect(() => {
    if (!stickerRef.current || !animationsEnabled) return

    let draggable: ReturnType<typeof createDraggable> | null = null

    try {
      draggable = createDraggable(stickerRef.current, {})
    } catch {
      // Fallback simple pointer events
      const el = stickerRef.current
      let isDragging = false
      let startX = 0
      let startY = 0

      const onPointerDown = (e: PointerEvent) => {
        isDragging = true
        startX = e.clientX
        startY = e.clientY
        el.setPointerCapture(e.pointerId)
      }

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return
        const dx = e.clientX - startX
        const dy = e.clientY - startY
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(-6deg)`
      }

      const onPointerUp = () => {
        if (!isDragging) return
        isDragging = false
        animate(el, {
          translateX: 0,
          translateY: 0,
          duration: 500,
          ease: 'out(4)',
        })
      }

      el.addEventListener('pointerdown', onPointerDown)
      el.addEventListener('pointermove', onPointerMove)
      el.addEventListener('pointerup', onPointerUp)

      return () => {
        el.removeEventListener('pointerdown', onPointerDown)
        el.removeEventListener('pointermove', onPointerMove)
        el.removeEventListener('pointerup', onPointerUp)
      }
    }

    return () => {
      if (draggable && typeof (draggable as { revert?: () => void }).revert === 'function') {
        ;(draggable as { revert: () => void }).revert()
      }
    }
  }, [animationsEnabled])

  return (
    <div
      ref={stickerRef}
      className="fixed bottom-6 left-6 z-50 cursor-grab active:cursor-grabbing select-none"
      title="Draggable Easter Egg"
    >
      <div className="flex items-center shadow-brutal -rotate-6 hover:rotate-0 transition-transform font-display text-xs md:text-sm font-bold uppercase">
        <span className="bg-accent-2 text-paper px-3 py-2 border-2 border-ink border-r-0">
          ★ LIVE 2026
        </span>
        <span className="bg-accent text-accent-ink px-3 py-2 border-2 border-ink">
          DRAG ME ↗
        </span>
      </div>
    </div>
  )
}
