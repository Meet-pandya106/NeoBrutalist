import type { Preset } from '../types'

export const saas: Preset = {
  id: 'saas',
  meta: {
    name: 'SaaS Landing Page',
    description: 'A soft, approachable template for software products.',
  },
  theme: {
    accent: '#B79BFF', // lilac
    styleMode: 'soft',
  },
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Login', href: '/login' },
  ],
  footer: {
    variant: 'cta',
    ctaHeadline: 'START YOUR FREE TRIAL',
    ctaButton: 'SIGN UP NOW',
    contactEmail: 'hello@syncspace.app',
    columns: [
      { title: 'Product', links: [{ label: 'Features', href: '#' }, { label: 'Integrations', href: '#' }] },
      { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Careers', href: '#' }] },
    ],
  },
  pages: {
    '/': {
      title: 'SyncSpace - Project Management',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'NEW: AI ASSISTANT',
            headline: 'WORK IN PERFECT\\nSYNC',
            text: 'The project management platform that brings your team, tools, and ideas together in one collaborative space.',
            visual: 'screenshot',
            tone: 'default',
          },
        },
        {
          id: 'logoCloud',
          props: {
            title: 'TRUSTED BY INNOVATIVE TEAMS',
            logos: ['/logos/acme.svg', '/logos/globex.svg', '/logos/soylent.svg', '/logos/initech.svg'],
            tone: 'alt',
          },
        },
        {
          id: 'featureGrid',
          props: {
            title: 'EVERYTHING YOU NEED',
            features: [
              { title: 'Real-time Collaboration', description: 'Work together on documents and tasks without missing a beat.' },
              { title: 'Automated Workflows', description: 'Set up rules to automate repetitive tasks and save hours every week.' },
              { title: 'Advanced Analytics', description: 'Get insights into team velocity and project health instantly.' },
              { title: 'Enterprise Security', description: 'Bank-grade encryption and granular access controls keep your data safe.' },
            ],
            tone: 'default',
          },
        },
        {
          id: 'pricing',
          props: {
            title: 'SIMPLE PRICING',
            plans: [
              { name: 'Starter', price: '$29', period: '/mo', description: 'For small teams getting started.', features: ['Up to 5 users', 'Basic analytics', 'Community support'] },
              { name: 'Pro', price: '$79', period: '/mo', description: 'For growing businesses.', features: ['Up to 20 users', 'Advanced workflows', 'Priority support'], highlighted: true },
              { name: 'Enterprise', price: '$199', period: '/mo', description: 'For large organizations.', features: ['Unlimited users', 'Custom integrations', 'Dedicated success manager'] },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'testimonials',
          props: {
            title: 'WALL OF LOVE',
            items: [
              { quote: 'SyncSpace completely transformed how our engineering team operates. We ship 30% faster now.', name: 'Sarah Jenkins', role: 'CTO, TechFlow' },
              { quote: 'The cleanest interface of any project tool we have tried. Adoption across the company was instant.', name: 'Marcus Chen', role: 'Operations Director, ScaleUp' },
            ],
            tone: 'default',
          },
        },
        {
          id: 'faq',
          props: {
            title: 'COMMON QUESTIONS',
            faqs: [
              { question: 'Can I import data from other tools?', answer: 'Yes, we offer one-click imports from Jira, Asana, and Trello.' },
              { question: 'Is there a free trial?', answer: 'We offer a 14-day free trial on all plans, no credit card required.' },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'READY TO UPGRADE YOUR WORKFLOW?',
            buttonText: 'GET STARTED FOR FREE',
            buttonHref: '/signup',
            tone: 'accent',
          },
        },
      ],
    },
  },
}
