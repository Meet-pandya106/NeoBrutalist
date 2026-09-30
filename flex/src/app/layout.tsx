import type { Metadata } from 'next'
import './globals.css'
import { ThemeInitializer } from '@/components/layout/theme-initializer'

export const metadata: Metadata = {
  title: {
    default: 'FLEX — Neo-Brutalist Template',
    template: '%s | FLEX',
  },
  description: 'A bold, editorial, neo-brutalist website template that adapts to any purpose through configuration.',
  metadataBase: new URL('https://flex-template.vercel.app'),
  openGraph: {
    title: 'FLEX — Neo-Brutalist Template',
    description: 'A bold, editorial, neo-brutalist website template.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  )
}
