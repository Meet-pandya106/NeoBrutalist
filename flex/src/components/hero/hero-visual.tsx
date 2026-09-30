'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/cn'

interface HeroVisualProps {
  variant: string
  className?: string
  content?: Record<string, unknown>
}

/** SVG Iridescent Blob — default hero visual with HQ asset support */
function BlobVisual({ className }: { className?: string }) {
  const [useFallback, setUseFallback] = useState(false)

  return (
    <div className={cn('relative w-full aspect-square max-w-[540px] flex items-center justify-center', className)}>
      {!useFallback ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/hero/blob-hq.png"
          alt="Iridescent Liquid Metal Hero"
          onError={() => setUseFallback(true)}
          className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(91,27,255,0.35)] transition-transform duration-700 hover:scale-105 select-none"
        />
      ) : (
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          aria-hidden="true"
        >
        <defs>
          <radialGradient id="blob-core" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="var(--iri-core)" />
            <stop offset="100%" stopColor="var(--iri-core)" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="blob-iri-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--iri-1)" />
            <stop offset="50%" stopColor="var(--iri-2)" />
            <stop offset="100%" stopColor="var(--iri-3)" />
          </linearGradient>
          <linearGradient id="blob-iri-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--iri-4)" />
            <stop offset="50%" stopColor="var(--iri-1)" />
            <stop offset="100%" stopColor="var(--iri-2)" />
          </linearGradient>
          <linearGradient id="blob-accent" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="blob-highlight" cx="35%" cy="30%" r="25%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <filter id="blob-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main iridescent body */}
        <path
          className="blob-shape-1"
          d="M250,80 C340,60 420,130 430,220 C440,310 400,380 340,420 C280,460 180,450 120,390 C60,330 50,260 70,190 C90,120 160,100 250,80Z"
          fill="url(#blob-iri-1)"
          opacity="0.9"
          filter="url(#blob-glow)"
        />

        {/* Secondary iridescent layer */}
        <path
          className="blob-shape-2"
          d="M260,100 C350,90 410,160 420,240 C430,320 380,390 310,420 C240,450 160,430 110,370 C60,310 70,230 100,170 C130,110 170,110 260,100Z"
          fill="url(#blob-iri-2)"
          opacity="0.7"
        />

        {/* Dark glossy core */}
        <path
          d="M250,140 C310,130 360,170 370,230 C380,290 350,340 300,360 C250,380 190,370 160,330 C130,290 140,230 170,190 C200,150 190,150 250,140Z"
          fill="url(#blob-core)"
          opacity="0.85"
        />

        {/* Accent streak */}
        <path
          className="blob-accent-streak"
          d="M180,200 C220,180 320,190 360,250 C340,240 240,230 180,200Z"
          fill="url(#blob-accent)"
          opacity="0.9"
        />

        {/* Specular highlight */}
        <ellipse
          cx="210"
          cy="190"
          rx="60"
          ry="40"
          fill="url(#blob-highlight)"
        />

        {/* Small satellite sphere 1 */}
        <circle className="blob-satellite-1" cx="380" cy="140" r="18" fill="var(--iri-2)" opacity="0.7" />
        <circle cx="380" cy="140" r="8" fill="var(--iri-core)" opacity="0.5" />

        {/* Small satellite sphere 2 */}
        <circle className="blob-satellite-2" cx="120" cy="360" r="12" fill="var(--iri-3)" opacity="0.6" />
        <circle cx="120" cy="360" r="5" fill="var(--iri-core)" opacity="0.5" />
      </svg>
      )}
    </div>
  )
}

/** CSS-only blob fallback */
function BlobCssVisual({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full aspect-square max-w-[500px] flex items-center justify-center', className)}>
      <div
        className="css-blob w-[80%] aspect-square"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, var(--iri-1), transparent 50%),
            radial-gradient(circle at 70% 60%, var(--iri-2), transparent 50%),
            radial-gradient(circle at 50% 80%, var(--iri-3), transparent 50%),
            radial-gradient(circle at 50% 50%, var(--iri-core), transparent 40%)
          `,
        }}
        aria-hidden="true"
      />
    </div>
  )
}

/** Wireframe globe SVG */
function GlobeVisual({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full aspect-square max-w-[240px]', className)}>
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        {/* Outer circle */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
        {/* Horizontal parallels */}
        {[-60, -30, 0, 30, 60].map((y) => (
          <ellipse
            key={y}
            cx="100"
            cy={100 + y * 0.8}
            rx={90 * Math.cos((y * Math.PI) / 180)}
            ry={12}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="0.8"
            opacity="0.5"
          />
        ))}
        {/* Vertical meridians */}
        {[-45, 0, 45].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="100"
            rx={Math.abs(Math.cos((angle * Math.PI) / 180)) * 40 + 10}
            ry="90"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="0.8"
            opacity="0.5"
            transform={`rotate(${angle * 0.3} 100 100)`}
          />
        ))}
      </svg>
    </div>
  )
}

/** Circular text badge with circle-arrow center */
function CircularTextBadge({ text = 'TECHNOLOGY · DESIGN · CREATIVE · ', className }: { text?: string; className?: string }) {
  const chars = text.split('')
  const radius = 48

  return (
    <div className={cn('relative w-[120px] h-[120px]', className)}>
      <svg viewBox="0 0 120 120" className="w-full h-full animate-spin" style={{ animationDuration: '18s' }} aria-hidden="true">
        <defs>
          <path id="circlePath" d="M60,60 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
        </defs>
        <text fill="var(--ink)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em" style={{ textTransform: 'uppercase' }}>
          <textPath href="#circlePath">
            {chars.map((char, i) => (
              <tspan key={i}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </svg>
      {/* Center circle-arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-[var(--ink)] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/** Chart placeholder for hero */
function ChartVisual({ className }: { className?: string }) {
  const bars = [65, 45, 80, 55, 90, 70, 85]
  return (
    <div className={cn('w-full max-w-[400px] p-6 border-brutal rounded-[var(--radius-active)]', className)}>
      <div className="flex items-end gap-3 h-[200px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all duration-500"
            style={{
              height: `${h}%`,
              backgroundColor: i === 4 ? 'var(--accent)' : 'var(--ink)',
              opacity: i === 4 ? 1 : 0.2,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <span key={d} className="text-label text-[var(--muted)]">{d}</span>
        ))}
      </div>
    </div>
  )
}

/** Chat preview bubbles */
function ChatPreviewVisual({ className }: { className?: string }) {
  return (
    <div className={cn('w-full max-w-[380px] space-y-3 p-6 border-brutal rounded-[var(--radius-active)]', className)}>
      <div className="flex gap-2 items-start">
        <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex-shrink-0" />
        <div className="bg-[var(--paper-2)] rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
          <p className="text-sm">How can we help transform your brand today?</p>
        </div>
      </div>
      <div className="flex gap-2 items-start justify-end">
        <div className="bg-[var(--ink)] text-[var(--paper)] rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
          <p className="text-sm">We need a complete rebrand for our product launch.</p>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex-shrink-0" />
        <div className="bg-[var(--paper-2)] rounded-2xl rounded-tl-none px-4 py-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/** Map pins visual */
function MapPinsVisual({ className }: { className?: string }) {
  const pins = [
    { x: 25, y: 35, label: 'NYC' },
    { x: 48, y: 28, label: 'LON' },
    { x: 55, y: 42, label: 'DXB' },
    { x: 72, y: 38, label: 'TKY' },
    { x: 15, y: 55, label: 'SAO' },
  ]

  return (
    <div className={cn('w-full max-w-[400px] aspect-[4/3] relative border-brutal rounded-[var(--radius-active)] overflow-hidden bg-[var(--paper-2)]', className)}>
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        {[20, 40, 60, 80].map((p) => (
          <line key={`h${p}`} x1="0" y1={`${p}%`} x2="100%" y2={`${p}%`} stroke="var(--line)" strokeWidth="0.5" opacity="0.1" />
        ))}
        {[20, 40, 60, 80].map((p) => (
          <line key={`v${p}`} x1={`${p}%`} y1="0" x2={`${p}%`} y2="100%" stroke="var(--line)" strokeWidth="0.5" opacity="0.1" />
        ))}
      </svg>
      {/* Pins */}
      {pins.map((pin) => (
        <div
          key={pin.label}
          className="absolute flex flex-col items-center"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: 'translate(-50%, -100%)' }}
        >
          <span className="text-label text-[var(--accent)] font-bold">{pin.label}</span>
          <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--ink)]" />
        </div>
      ))}
    </div>
  )
}

/**
 * HeroVisual — switches between visual variants for the hero section.
 * Each variant is a self-contained visual component.
 */
export function HeroVisual({ variant, className, content }: HeroVisualProps) {
  switch (variant) {
    case 'blob':
      return <BlobVisual className={className} />
    case 'blobCss':
      return <BlobCssVisual className={className} />
    case 'globe':
      return <GlobeVisual className={className} />
    case 'chart':
      return <ChartVisual className={className} />
    case 'chatPreview':
      return <ChatPreviewVisual className={className} />
    case 'mapPins':
      return <MapPinsVisual className={className} />
    case 'image':
      return (
        <div className={cn('w-full max-w-[500px] aspect-square bg-gradient-to-br from-[var(--iri-1)] to-[var(--iri-3)] rounded-[var(--radius-active)] overflow-hidden', className)}>
          {content?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={String(content.src)} alt={String(content.alt ?? '')} className="w-full h-full object-cover" />
          ) : null}
        </div>
      )
    case 'video':
      return (
        <div className={cn('w-full max-w-[500px] aspect-video bg-[var(--ink)] rounded-[var(--radius-active)] overflow-hidden', className)}>
          {content?.src ? (
            <video
              src={String(content.src)}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--paper)] text-label">VIDEO</div>
          )}
        </div>
      )
    case 'collage':
      return (
        <div className={cn('relative w-full max-w-[500px] aspect-square', className)}>
          {[
            { x: '10%', y: '5%', w: '55%', rot: '-3deg', bg: 'var(--iri-1)' },
            { x: '35%', y: '15%', w: '50%', rot: '2deg', bg: 'var(--iri-2)' },
            { x: '20%', y: '40%', w: '45%', rot: '-1deg', bg: 'var(--iri-3)' },
          ].map((img, i) => (
            <div
              key={i}
              className="absolute rounded-lg shadow-brutal overflow-hidden border-2 border-[var(--ink)]"
              style={{
                left: img.x,
                top: img.y,
                width: img.w,
                aspectRatio: '4/3',
                transform: `rotate(${img.rot})`,
                backgroundColor: img.bg,
                zIndex: i,
              }}
            />
          ))}
        </div>
      )
    case 'toolCard':
      return (
        <div className={cn('w-full max-w-[420px] p-6 border-brutal rounded-[var(--radius-active)] bg-[var(--paper)]', className)}>
          <div className="text-label text-[var(--muted)] mb-4">QUICK CALCULATOR</div>
          <div className="space-y-4">
            {['Budget Range', 'Timeline', 'Team Size'].map((label) => (
              <div key={label}>
                <label className="text-sm font-medium text-[var(--ink)] block mb-1">{label}</label>
                <div className="h-10 bg-[var(--paper-2)] border-brutal rounded-sm" />
              </div>
            ))}
          </div>
          <div className="mt-6 h-12 bg-[var(--accent)] rounded-[var(--radius-pill)] flex items-center justify-center font-bold text-[var(--accent-ink)]">
            Calculate Score
          </div>
        </div>
      )
    default:
      return <BlobVisual className={className} />
  }
}

export { CircularTextBadge, GlobeVisual, BlobVisual }
