'use client'

import { useEffect } from 'react'
import { useFlexStore } from '@/lib/store'

/**
 * Initializes theme from localStorage or system preference on mount.
 * Applies data-theme and data-style attributes to documentElement.
 */
export function ThemeInitializer() {
  const { theme, setTheme, styleMode, accent, accentInk } = useFlexStore()

  useEffect(() => {
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-style', styleMode)

    // Apply accent
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--accent-ink', accentInk)

    // Check system preference on first visit (no stored preference)
    const stored = localStorage.getItem('flex-store')
    if (!stored) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        setTheme('dark')
      }
    }
  }, [theme, styleMode, accent, accentInk, setTheme])

  return null
}
