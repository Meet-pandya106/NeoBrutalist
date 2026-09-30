'use client'

import { useEffect } from 'react'
import { useFlexStore } from '@/lib/store'
import { cn } from '@/lib/cn'
import { Settings, X } from 'lucide-react'
import { themeConfig } from '@/config/theme.config'
import { presets } from '@/config/presets'

const STYLE_MODES = ['brutal', 'clean', 'soft'] as const

/**
 * Dev Panel — toggled with backtick key.
 * Controls preset, accent, style mode, dark mode, animations.
 * Hidden in production via feature flag.
 */
export function DevPanel() {
  const {
    devPanelOpen,
    setDevPanelOpen,
    theme,
    toggleTheme,
    accent,
    setAccent,
    styleMode,
    setStyleMode,
    activePreset,
    setActivePreset,
    animationsEnabled,
    setAnimationsEnabled,
  } = useFlexStore()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault()
        setDevPanelOpen(!devPanelOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [devPanelOpen, setDevPanelOpen])

  if (!devPanelOpen) return null

  return (
    <div className="fixed top-20 right-4 w-72 bg-[var(--paper)] text-[var(--ink)] border-2 border-[var(--ink)] shadow-[6px_6px_0_var(--ink)] z-[100] p-5 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-5 pb-3 border-b-2 border-[var(--line)]">
        <h2 className="font-mono font-bold text-sm uppercase flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Dev Panel
        </h2>
        <button
          onClick={() => setDevPanelOpen(false)}
          className="p-1 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
          aria-label="Close dev panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-5">
        {/* Preset */}
        <div>
          <label className="text-label block mb-2">PRESET</label>
          <select
            value={activePreset}
            onChange={(e) => setActivePreset(e.target.value)}
            className="w-full p-2 border-2 border-[var(--ink)] bg-[var(--paper)] text-[var(--ink)] font-mono text-sm"
          >
            {Object.keys(presets).map((id) => (
              <option key={id} value={id}>
                {presets[id].meta.name}
              </option>
            ))}
          </select>
        </div>

        {/* Theme */}
        <div>
          <label className="text-label block mb-2">THEME</label>
          <button
            onClick={toggleTheme}
            className="w-full py-2 border-2 border-[var(--ink)] font-mono text-sm uppercase hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
          >
            {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Accent */}
        <div>
          <label className="text-label block mb-2">ACCENT COLOR</label>
          <div className="grid grid-cols-7 gap-1.5">
            {themeConfig.accentPresets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setAccent(preset.value, preset.ink)}
                className={cn(
                  'w-8 h-8 border-2 transition-transform hover:scale-110',
                  accent === preset.value
                    ? 'border-[var(--ink)] scale-110 ring-2 ring-[var(--ink)] ring-offset-1'
                    : 'border-transparent'
                )}
                style={{ backgroundColor: preset.value }}
                title={preset.name}
                aria-label={`Set accent to ${preset.name}`}
              />
            ))}
          </div>
        </div>

        {/* Style Mode */}
        <div>
          <label className="text-label block mb-2">STYLE MODE</label>
          <div className="flex gap-1">
            {STYLE_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => setStyleMode(mode)}
                className={cn(
                  'flex-1 py-1.5 border-2 font-mono text-xs uppercase transition-colors',
                  styleMode === mode
                    ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]'
                    : 'border-[var(--ink)] hover:bg-[var(--paper-2)]'
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Animations */}
        <div>
          <label className="text-label block mb-2">ANIMATIONS</label>
          <button
            onClick={() => setAnimationsEnabled(!animationsEnabled)}
            className={cn(
              'w-full py-2 border-2 border-[var(--ink)] font-mono text-sm uppercase transition-colors',
              animationsEnabled
                ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
                : 'hover:bg-[var(--paper-2)]'
            )}
          >
            {animationsEnabled ? '✓ Animations ON' : '✗ Animations OFF'}
          </button>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[var(--line)] text-[10px] font-mono text-[var(--muted)] uppercase">
        Press ` to toggle
      </div>
    </div>
  )
}
