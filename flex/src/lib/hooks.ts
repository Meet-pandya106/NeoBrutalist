'use client'

import { useState, useCallback, useEffect } from 'react'
import { runTool, type ToolInput, type ToolOutput } from './tool'

type ToolState = 'idle' | 'loading' | 'success' | 'error'

interface UseToolReturn {
  state: ToolState
  input: ToolInput | null
  output: ToolOutput | null
  error: string | null
  history: { input: ToolInput; output: ToolOutput; timestamp: number }[]
  run: (input: ToolInput) => Promise<void>
  reset: () => void
}

const STORAGE_KEY = 'flex-tool-history'

function loadHistory(): { input: ToolInput; output: ToolOutput; timestamp: number }[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveHistory(history: { input: ToolInput; output: ToolOutput; timestamp: number }[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-20)))
  } catch {
    // Storage full, silently fail
  }
}

/**
 * Hook to manage the tool pipeline state.
 * Handles idle → loading → success/error flow with localStorage persistence.
 */
export function useTool(): UseToolReturn {
  const [state, setState] = useState<ToolState>('idle')
  const [input, setInput] = useState<ToolInput | null>(null)
  const [output, setOutput] = useState<ToolOutput | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<{ input: ToolInput; output: ToolOutput; timestamp: number }[]>([])

  useEffect(() => {
    const h = loadHistory()
    setHistory(h)
    // Restore last run
    if (h.length > 0) {
      const last = h[h.length - 1]
      setInput(last.input)
      setOutput(last.output)
      setState('success')
    }
  }, [])

  const run = useCallback(async (newInput: ToolInput) => {
    setInput(newInput)
    setState('loading')
    setError(null)
    setOutput(null)

    try {
      const result = await runTool(newInput)
      setOutput(result)
      setState('success')
      const entry = { input: newInput, output: result, timestamp: Date.now() }
      setHistory((prev) => {
        const next = [...prev, entry]
        saveHistory(next)
        return next
      })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(msg)
      setState('error')
    }
  }, [])

  const reset = useCallback(() => {
    setState('idle')
    setInput(null)
    setOutput(null)
    setError(null)
  }, [])

  return { state, input, output, error, history, run, reset }
}

/**
 * Hook for live-updating data (dashboards).
 * Calls the fetcher at the given interval and returns the latest data.
 */
export function useLiveData<T>(
  fetcher: () => Promise<T>,
  interval: number = 5000
): { data: T | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const fetchData = async () => {
      try {
        const result = await fetcher()
        if (active) {
          setData(result)
          setLoading(false)
          setError(null)
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : 'Error')
          setLoading(false)
        }
      }
    }

    fetchData()
    const timer = setInterval(fetchData, interval)
    return () => {
      active = false
      clearInterval(timer)
    }
  }, [fetcher, interval])

  return { data, loading, error }
}
