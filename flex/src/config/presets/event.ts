import type { Preset } from '../types'

export const event: Preset = {
  id: 'event',
  meta: {
    name: 'Tech Conference Event',
    description: 'A loud, brutalist template for an upcoming event or conference.',
  },
  theme: {
    accent: '#FF5B1F', // electric orange
    styleMode: 'brutal',
  },
  nav: [
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Location', href: '#location' },
    { label: 'Tickets', href: '#tickets' },
  ],
  footer: {
    variant: 'cta',
    ctaHeadline: 'SECURE YOUR SPOT',
    ctaButton: 'BUY TICKETS',
    contactEmail: 'info@designtechconf.com',
    socials: [
      { platform: 'Twitter', url: '#' },
      { platform: 'Instagram', url: '#' },
    ],
  },
  pages: {
    '/': {
      title: 'DesignTech 2024 Conference',
      sections: [
        {
          id: 'hero',
          props: {
            pill: 'OCTOBER 12-14, 2024 | BERLIN',
            headline: 'THE FUTURE OF\\nDIGITAL DESIGN',
            text: 'Join 2,000+ creators, developers, and product leaders for three days of talks, workshops, and networking.',
            visual: 'dateVenue',
            tone: 'default',
          },
        },
        {
          id: 'statsRow',
          props: {
            stats: [
              { value: '40+', label: 'Global Speakers' },
              { value: '15', label: 'Hands-on Workshops' },
              { value: '2,000', label: 'Attendees' },
              { value: '3', label: 'Days of Content' },
            ],
            tone: 'accent',
          },
        },
        {
          id: 'processSteps',
          props: {
            title: 'CONFERENCE SCHEDULE',
            steps: [
              { number: 'DAY 1', title: 'FUNDAMENTALS & KEYNOTES', description: 'Opening remarks followed by deep dives into design systems and UI engineering.' },
              { number: 'DAY 2', title: 'WORKSHOPS & MASTERCLASSES', description: 'Breakout sessions covering accessibility, motion design, and frontend architecture.' },
              { number: 'DAY 3', title: 'THE FUTURE WEBS', description: 'Exploring WebGL, AI in design tools, and closing party at Kraftwerk.' },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'team',
          props: {
            title: 'HEADLINE SPEAKERS',
            members: [
              { name: 'Elena Rostova', role: 'VP of Design, Vercel', image: '/speakers/elena.jpg' },
              { name: 'David Kim', role: 'Creator of Framer Motion', image: '/speakers/david.jpg' },
              { name: 'Sarah Drasner', role: 'Director of Engineering, Google', image: '/speakers/sarah.jpg' },
              { name: 'Julio Cesar', role: 'Creative Director, Stripe', image: '/speakers/julio.jpg' },
            ],
            tone: 'default',
          },
        },
        {
          id: 'faq',
          props: {
            title: 'ATTENDEE FAQ',
            faqs: [
              { question: 'Are meals included in the ticket?', answer: 'Yes, full catering is provided for lunch, along with coffee breaks throughout the day.' },
              { question: 'Will the talks be recorded?', answer: 'All main stage talks will be recorded and shared with attendees after the event.' },
            ],
            tone: 'alt',
          },
        },
        {
          id: 'ctaBand',
          props: {
            headline: 'TICKETS SELLING FAST',
            buttonText: 'GRAB YOUR PASS',
            buttonHref: '/tickets',
            tone: 'accent',
          },
        },
      ],
    },
  },
}
