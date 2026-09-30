'use client'

import React, { createContext, useContext, useEffect, useRef } from 'react'
import { animate, createScope, stagger } from 'animejs'
import { usePathname } from 'next/navigation'
import { useFlexStore } from '@/lib/store'
import { motionConfig } from '@/config/motion.config'

interface MotionContextValue {
  enabled: boolean
}

const MotionContext = createContext<MotionContextValue>({ enabled: true })

export function useMotion() {
  return useContext(MotionContext)
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const animationsEnabled = useFlexStore((s) => s.animationsEnabled)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!motionConfig.enabled || !animationsEnabled || prefersReduced) {
      return
    }

    const container = containerRef.current || document.body
    const scope = createScope({ root: container })

    scope.add(() => {
      // 1. Initial / In-View Animations via IntersectionObserver
      const animatedElements = container.querySelectorAll<HTMLElement>('[data-anim]')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              const animType = el.getAttribute('data-anim')
              const delay = parseFloat(el.getAttribute('data-anim-delay') || '0') * 1000
              const duration = parseFloat(
                el.getAttribute('data-anim-duration') || String(motionConfig.durations.base)
              ) * 1000

              if (animType === 'reveal-up') {
                animate(el, {
                  opacity: [0, 1],
                  translateY: [36, 0],
                  duration,
                  delay,
                  ease: 'out(4)',
                })
              } else if (animType === 'fade') {
                animate(el, {
                  opacity: [0, 1],
                  duration,
                  delay,
                  ease: 'out(3)',
                })
              } else if (animType === 'scale-in') {
                animate(el, {
                  opacity: [0, 1],
                  scale: [0.88, 1],
                  duration,
                  delay,
                  ease: 'out(4)',
                })
              } else if (animType === 'slide-left') {
                animate(el, {
                  opacity: [0, 1],
                  translateX: [-40, 0],
                  duration,
                  delay,
                  ease: 'out(4)',
                })
              } else if (animType === 'slide-right') {
                animate(el, {
                  opacity: [0, 1],
                  translateX: [40, 0],
                  duration,
                  delay,
                  ease: 'out(4)',
                })
              } else if (animType === 'stagger-children') {
                const children = el.children
                const staggerDelay = parseFloat(el.getAttribute('data-anim-stagger') || '50')
                animate(Array.from(children), {
                  opacity: [0, 1],
                  translateY: [24, 0],
                  duration,
                  delay: stagger(staggerDelay, { start: delay }),
                  ease: 'out(4)',
                })
              } else if (animType === 'count') {
                const targetVal = parseFloat(el.getAttribute('data-count-to') || el.innerText || '0')
                const obj = { val: 0 }
                animate(obj, {
                  val: targetVal,
                  duration: duration * 1.5,
                  delay,
                  ease: 'out(3)',
                  onUpdate: () => {
                    el.innerText = Math.round(obj.val).toLocaleString()
                  },
                })
              }

              // By default, animate once
              const once = el.getAttribute('data-anim-once') !== 'false'
              if (once) {
                observer.unobserve(el)
              }
            }
          })
        },
        { threshold: motionConfig.scroll.threshold }
      )

      animatedElements.forEach((el) => {
        const animType = el.getAttribute('data-anim')
        // Idle loops don't need intersection observer
        if (animType === 'float') {
          animate(el, {
            translateY: [-10, 10],
            duration: 3200,
            alternate: true,
            loop: true,
            ease: 'inOut(2)',
          })
        } else if (animType === 'magnetic') {
          // Setup magnetic button
          const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            animate(el, {
              translateX: x * 0.35,
              translateY: y * 0.35,
              duration: 300,
              ease: 'out(2)',
            })
          }
          const handleMouseLeave = () => {
            animate(el, {
              translateX: 0,
              translateY: 0,
              duration: 600,
              ease: 'out(4)',
            })
          }
          el.addEventListener('mousemove', handleMouseMove)
          el.addEventListener('mouseleave', handleMouseLeave)
        } else if (animType === 'tilt') {
          // Setup 3D card tilt
          const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
          }
          const handleMouseLeave = () => {
            el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
          }
          el.addEventListener('mousemove', handleMouseMove)
          el.addEventListener('mouseleave', handleMouseLeave)
        } else {
          // Set initial visibility
          el.style.opacity = '0'
          observer.observe(el)
        }
      })
    })

    return () => {
      try {
        scope.revert()
      } catch (e) {
        // cleanup
      }
    }
  }, [pathname, animationsEnabled])

  return (
    <MotionContext.Provider value={{ enabled: animationsEnabled && motionConfig.enabled }}>
      <div ref={containerRef} className="contents">
        {children}
      </div>
    </MotionContext.Provider>
  )
}
