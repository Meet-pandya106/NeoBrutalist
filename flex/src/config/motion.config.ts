import type { MotionConfig } from './types'

export const motionConfig: MotionConfig = {
  enabled: true,
  durations: {
    fast: 0.25,
    base: 0.6,
    slow: 1.1,
    hero: 1.6,
  },
  eases: {
    snappyOut: 'out(4)',
    expoOut: 'out(6)',
    inOut: 'inOut(3)',
    spring: { stiffness: 100, damping: 15 },
  },
  stagger: {
    fast: 30,
    base: 50,
    slow: 80,
  },
  scroll: {
    threshold: 0.15,
    once: true,
  },
}
