'use client'

import { useEffect, useRef } from 'react'
import { createScope, Scope } from 'animejs'
import { useFlexStore } from '@/lib/store'
import { motionConfig } from '@/config/motion.config'

export type ScopeCallback = (scope: Scope) => void

/**
 * useAnimeScope
 * Creates an anime.js v4 Scope attached to a root element or document.
 * Safely reverts all animations on unmount (React StrictMode compatible).
 * Honors prefers-reduced-motion and store animationsEnabled flag.
 */
export function useAnimeScope(
  callback: ScopeCallback,
  deps: React.DependencyList = []
) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const animationsEnabled = useFlexStore((s) => s.animationsEnabled)

  useEffect(() => {
    // Check if motion is disabled globally or by user preference
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!motionConfig.enabled || !animationsEnabled || prefersReduced) {
      return
    }

    const scope = createScope({ root: rootRef.current ?? undefined })

    try {
      scope.add(() => {
        callback(scope)
      })
    } catch (e) {
      console.warn('[anime.js] error initializing scope:', e)
    }

    return () => {
      try {
        scope.revert()
      } catch (e) {
        // ignore revert errors
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationsEnabled, ...deps])

  return rootRef
}
