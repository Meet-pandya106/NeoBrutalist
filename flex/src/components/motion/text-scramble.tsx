'use client'

import React, { useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

interface TextScrambleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string
}

/**
 * TextScramble
 * Mono hover utility that scrambles characters and resolves to original text.
 */
export function TextScramble({ children, className, ...props }: TextScrambleProps) {
  const [display, setDisplay] = useState(children)
  const original = children

  const handleMouseEnter = () => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        original
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return original[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= original.length) {
        clearInterval(interval)
      }
      iteration += 1 / 2
    }, 25)
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`font-mono cursor-default inline-block select-none ${className || ''}`}
      {...props}
    >
      {display}
    </span>
  )
}
