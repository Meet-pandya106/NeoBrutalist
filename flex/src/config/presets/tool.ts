import type { Preset } from '../types'

export const tool: Preset = {
  id: 'tool',
  meta: {
    name: 'Tool / Calculator',
    description: 'An interactive tool or calculator with brutalist aesthetics.',
  },
  theme: {
    accent: '#1FE0FF', // cyan
    styleMode: 'brutal',
  },
  nav: [
    { label: 'Calculator', href: '/' },
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
  ],
  footer: {
    variant: 'slim',
    contactEmail: 'support@flextools.io',
    socials: [
      { platform: 'Twitter', url: '#' },
      { platform: 'GitHub', url: '#' },
    ],
  },
  pages: {
    '/': {
      title: 'Project Estimator',
      sections: [
        {
          id: 'hero',
          props: {
            headline: 'CALCULATE YOUR PROJECT SCORE',
            text: 'Get an instant estimate for your next big idea. Adjust the parameters below and see the live results.',
            visual: 'toolCard',
            tone: 'default',
          },
        },
        {
          id: 'processSteps',
          props: {
            title: 'HOW IT WORKS',
            steps: [
              { number: '01', title: 'INPUT METRICS', description: 'Enter your project details.' },
              { number: '02', title: 'ANALYZE DATA', description: 'Our algorithm computes the optimal score.' },
              { number: '03', title: 'GET RESULTS', description: 'Receive an actionable project estimate.' },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'toolPanel',
          props: {
            title: 'PROJECT ESTIMATOR',
            subtitle: 'Configure your parameters to calculate real-time feasibility and score.',
            fields: [
              { type: 'slider', name: 'budget', label: 'Budget ($K)', min: 10, max: 100, default: 50 },
              { type: 'select', name: 'timeline', label: 'Timeline (Months)', options: [{label: '1 Month', value: '1'}, {label: '3 Months', value: '3'}, {label: '6 Months', value: '6'}, {label: '12 Months', value: '12'}], default: '3' },
              { type: 'number', name: 'teamSize', label: 'Team Size', min: 1, max: 20, default: 5 },
              { type: 'slider', name: 'complexity', label: 'Complexity Score', min: 0, max: 100, default: 75 },
            ],
            tone: 'paper-2',
          },
        },
        {
          id: 'resultsPanel',
          props: {
            tone: 'accent',
          },
        },
        {
          id: 'faq',
          props: {
            title: 'QUESTIONS?',
            faqs: [
              { question: 'How accurate is the estimator?', answer: 'It is based on historical data from over 1,000 successful projects.' },
              { question: 'Is my data saved?', answer: 'No, all calculations are performed locally in your browser.' },
            ],
            tone: 'default',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'READY TO START?',
            buttonText: 'GET IN TOUCH',
            buttonHref: '/contact',
            tone: 'dark',
          },
        },
      ],
    },
  },
}
