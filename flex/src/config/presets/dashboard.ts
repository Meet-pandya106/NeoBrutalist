import type { Preset } from '../types'

export const dashboard: Preset = {
  id: 'dashboard',
  meta: {
    name: 'Dashboard',
    description: 'A clean, data-heavy dashboard presentation preset.',
  },
  theme: {
    accent: '#1FFF7A', // signal green
    styleMode: 'clean',
  },
  nav: [
    { label: 'Overview', href: '/' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Reports', href: '/reports' },
    { label: 'Settings', href: '/settings' },
  ],
  footer: {
    variant: 'slim',
    contactEmail: 'support@flexdash.co',
    socials: [
      { platform: 'Twitter', url: '#' },
      { platform: 'LinkedIn', url: '#' },
    ],
  },
  pages: {
    '/': {
      title: 'Performance Overview',
      sections: [
        {
          id: 'hero',
          props: {
            headline: 'Q3 PERFORMANCE METRICS',
            text: 'Live operational overview and key performance indicators.',
            visual: 'none',
            tone: 'default',
          },
        },
        {
          id: 'dashboardGrid',
          props: {
            metrics: [
              { label: 'Total Revenue', value: '$284,500', change: '+12.4%', trend: 'up' },
              { label: 'Active Users', value: '14,832', change: '+5.2%', trend: 'up' },
              { label: 'Conversion', value: '3.42%', change: '-0.8%', trend: 'down' },
              { label: 'Avg Session', value: '4.7m', change: '+1.1%', trend: 'up' },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'statsRow',
          props: {
            stats: [
              { value: '99.9%', label: 'Uptime' },
              { value: '1.2s', label: 'Avg Response' },
              { value: '0', label: 'Critical Incidents' },
            ],
            tone: 'default',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'GENERATE FULL REPORT',
            buttonText: 'DOWNLOAD PDF',
            buttonHref: '/reports/download',
            tone: 'accent',
          },
        },
      ],
    },
  },
}
