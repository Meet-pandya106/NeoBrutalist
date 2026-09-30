'use client'

import { useFlexStore } from '@/lib/store'
import { getPreset } from '@/config/presets'
import { PageRenderer } from '@/components/layout/page-renderer'
import { useParams } from 'next/navigation'

export default function DynamicPage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const activePreset = useFlexStore((s) => s.activePreset)
  const preset = getPreset(activePreset)
  const page = preset.pages[`/${slug}`]

  if (!page) {
    const notFoundPage = {
      title: 'Page Not Found',
      sections: [{ id: 'notFound' as const, props: {} }],
    }
    return <PageRenderer preset={preset} page={notFoundPage} />
  }

  return <PageRenderer preset={preset} page={page} />
}
