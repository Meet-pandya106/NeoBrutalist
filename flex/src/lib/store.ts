'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface FlexStore {
  // Theme
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void

  // Preset
  activePreset: string
  setActivePreset: (id: string) => void

  // Accent
  accent: string
  accentInk: string
  setAccent: (color: string, ink: string) => void

  // Style mode
  styleMode: 'brutal' | 'clean' | 'soft'
  setStyleMode: (mode: 'brutal' | 'clean' | 'soft') => void

  // Animations
  animationsEnabled: boolean
  setAnimationsEnabled: (enabled: boolean) => void

  // Dev panel
  devPanelOpen: boolean
  setDevPanelOpen: (open: boolean) => void

  // Mobile menu
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void

  // Tool state
  toolState: 'idle' | 'loading' | 'success' | 'error'
  toolInput: Record<string, unknown> | null
  toolOutput: Record<string, unknown> | null
  setToolState: (state: 'idle' | 'loading' | 'success' | 'error') => void
  setToolInput: (input: Record<string, unknown>) => void
  setToolOutput: (output: Record<string, unknown> | null) => void

  // Toast queue
  toasts: Toast[]
  addToast: (message: string, type?: ToastType, duration?: number) => void
  removeToast: (id: string) => void

  // Cart stub
  cartItems: { id: string; name: string; price: number; qty: number }[]
  addToCart: (item: { id: string; name: string; price: number }) => void
  removeFromCart: (id: string) => void
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
}

export const useFlexStore = create<FlexStore>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      setTheme: (theme) => {
        set({ theme })
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme)
        }
      },
      toggleTheme: () => {
        const next = get().theme === 'light' ? 'dark' : 'light'
        get().setTheme(next)
      },

      // Preset
      activePreset: 'agency',
      setActivePreset: (id) => set({ activePreset: id }),

      // Accent
      accent: '#DFFF1F',
      accentInk: '#0A0A0A',
      setAccent: (color, ink) => {
        set({ accent: color, accentInk: ink })
        if (typeof document !== 'undefined') {
          document.documentElement.style.setProperty('--accent', color)
          document.documentElement.style.setProperty('--accent-ink', ink)
        }
      },

      // Style mode
      styleMode: 'brutal',
      setStyleMode: (mode) => {
        set({ styleMode: mode })
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-style', mode)
        }
      },

      // Animations
      animationsEnabled: true,
      setAnimationsEnabled: (enabled) => set({ animationsEnabled: enabled }),

      // Dev panel
      devPanelOpen: false,
      setDevPanelOpen: (open) => set({ devPanelOpen: open }),

      // Mobile menu
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

      // Tool state
      toolState: 'idle',
      toolInput: null,
      toolOutput: null,
      setToolState: (state) => set({ toolState: state }),
      setToolInput: (input) => set({ toolInput: input }),
      setToolOutput: (output) => set({ toolOutput: output }),

      // Toasts
      toasts: [],
      addToast: (message, type = 'info', duration = 4000) => {
        const id = Math.random().toString(36).slice(2)
        set((s) => ({ toasts: [...s.toasts, { id, message, type, duration }] }))
        if (duration > 0) {
          setTimeout(() => get().removeToast(id), duration)
        }
      },
      removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),

      // Cart
      cartItems: [],
      addToCart: (item) =>
        set((s) => {
          const existing = s.cartItems.find((i) => i.id === item.id)
          if (existing) {
            return {
              cartItems: s.cartItems.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + 1 } : i
              ),
            }
          }
          return { cartItems: [...s.cartItems, { ...item, qty: 1 }] }
        }),
      removeFromCart: (id) =>
        set((s) => ({ cartItems: s.cartItems.filter((i) => i.id !== id) })),
      cartOpen: false,
      setCartOpen: (open) => set({ cartOpen: open }),
    }),
    {
      name: 'flex-store',
      partialize: (state) => ({
        theme: state.theme,
        activePreset: state.activePreset,
        accent: state.accent,
        accentInk: state.accentInk,
        styleMode: state.styleMode,
        animationsEnabled: state.animationsEnabled,
      }),
    }
  )
)
