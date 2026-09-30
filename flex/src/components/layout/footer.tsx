'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { FooterDef } from '@/config/types'
import { Container } from './container'

/**
 * Footer — CTA band or slim variant.
 * Props come directly from FooterDef.
 */
export function Footer(props: FooterDef & { className?: string }) {
  const {
    variant,
    ctaHeadline,
    ctaButton,
    contactEmail,
    contactPhone,
    contactAddress,
    columns,
    socials,
    className,
  } = props

  if (variant === 'cta') {
    return (
      <footer className={cn('w-full', className)}>
        {/* CTA Band */}
        <div className="bg-[var(--accent)] text-[var(--accent-ink)]">
          <Container className="py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-start">
              <div className="flex-1">
                <h2 className="font-display text-display-m lg:text-display-l uppercase leading-none mb-8">
                  {ctaHeadline || "LET'S BUILD\nSOMETHING\nICONIC."}
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[var(--accent-ink)] text-[var(--accent)] px-8 py-4 rounded-full font-bold uppercase text-lg hover:scale-105 transition-transform"
                >
                  {ctaButton || 'Start a Project'}
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-1/3">
                {contactEmail && (
                  <div>
                    <h3 className="text-label mb-2 opacity-70">EMAIL</h3>
                    <a href={`mailto:${contactEmail}`} className="font-medium text-lg hover:underline">
                      {contactEmail}
                    </a>
                  </div>
                )}
                {contactPhone && (
                  <div>
                    <h3 className="text-label mb-2 opacity-70">PHONE</h3>
                    <a href={`tel:${contactPhone}`} className="font-medium text-lg hover:underline">
                      {contactPhone}
                    </a>
                  </div>
                )}
                {contactAddress && (
                  <div>
                    <h3 className="text-label mb-2 opacity-70">LOCATION</h3>
                    <p className="font-medium">{contactAddress}</p>
                  </div>
                )}
                {socials && socials.length > 0 && (
                  <div>
                    <h3 className="text-label mb-2 opacity-70">SOCIAL</h3>
                    <div className="flex flex-col gap-2">
                      {socials.map((s) => (
                        <a
                          key={s.platform}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline uppercase text-sm"
                        >
                          {s.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom bar */}
        <div className="bg-[var(--ink)] text-[var(--paper)] py-6">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-[var(--muted)]">© {new Date().getFullYear()} FLEX. All rights reserved.</p>
              <div className="flex gap-6 text-[var(--muted)]">
                <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy</Link>
                <Link href="/terms" className="hover:text-[var(--accent)]">Terms</Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    )
  }

  // Slim variant
  return (
    <footer className={cn('w-full bg-[var(--ink)] text-[var(--paper)] border-t-2 border-[var(--line)]', className)}>
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="font-display text-4xl font-bold uppercase tracking-tighter block mb-6">
              FLEX
            </Link>
            <p className="text-[var(--muted)] max-w-sm">
              Neo-brutalist components for the modern web. Unapologetically bold.
            </p>
          </div>

          {columns?.map((col) => (
            <div key={col.title}>
              <h3 className="text-label mb-6 pb-2 border-b border-[var(--paper)]/10">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {socials && socials.length > 0 && (
            <div>
              <h3 className="text-label mb-6 pb-2 border-b border-[var(--paper)]/10">SOCIAL</h3>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors uppercase text-sm"
                    >
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-[var(--paper)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} FLEX. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
