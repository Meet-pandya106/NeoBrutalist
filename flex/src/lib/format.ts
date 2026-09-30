/**
 * Format utilities for the FLEX template.
 */

/** Format a number with commas */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(n)
}

/** Format currency */
export function formatCurrency(n: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n)
}

/** Format percentage */
export function formatPercent(n: number, decimals = 0): string {
  return `${n.toFixed(decimals)}%`
}

/** Format date */
export function formatDate(date: string | Date, style: 'short' | 'long' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  if (style === 'long') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/** Truncate text */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '…'
}

/** Slugify a string */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Calculate read time from word count */
export function readTime(text: string, wpm = 200): string {
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / wpm)
  return `${minutes} min read`
}

/** Generate initials from name */
export function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/** Fetch JSON with timeout and retry */
export async function fetchJson<T>(
  url: string,
  options?: RequestInit & { timeout?: number; retries?: number }
): Promise<T> {
  const { timeout = 8000, retries = 2, ...fetchOpts } = options ?? {}
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), timeout)
      const res = await fetch(url, { ...fetchOpts, signal: controller.signal })
      clearTimeout(timer)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return (await res.json()) as T
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err))
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
      }
    }
  }

  throw lastError
}
