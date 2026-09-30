import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  accent: '#DFFF1F',
  accentInk: '#0A0A0A',
  accentPresets: [
    { name: 'Acid Lime', value: '#DFFF1F', ink: '#0A0A0A' },
    { name: 'Electric Orange', value: '#FF5B1F', ink: '#FFFFFF' },
    { name: 'Cyan', value: '#1FE0FF', ink: '#0A0A0A' },
    { name: 'Hot Pink', value: '#FF2E93', ink: '#FFFFFF' },
    { name: 'Signal Green', value: '#1FFF7A', ink: '#0A0A0A' },
    { name: 'Lilac', value: '#B79BFF', ink: '#0A0A0A' },
    { name: 'Solar Yellow', value: '#FFD500', ink: '#0A0A0A' },
  ],
  styleMode: 'brutal',
  borderWeight: 2,
  fontDisplay: "'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif",
  fontBody: "'Inter', -apple-system, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'Consolas', 'Courier New', monospace",
}
