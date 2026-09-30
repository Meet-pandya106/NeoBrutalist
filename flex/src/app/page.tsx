'use client'

import { useFlexStore } from '@/lib/store'
import { getPreset } from '@/config/presets'
import { PageRenderer } from '@/components/layout/page-renderer'

export default function HomePage() {
  const activePreset = useFlexStore((s) => s.activePreset)
  const preset = getPreset(activePreset)
  const page = preset.pages['/']

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-h3 font-display">No home page defined for preset &ldquo;{activePreset}&rdquo;</p>
      </div>
    )
  }

  return <PageRenderer preset={preset} page={page} />
}
