import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface CtaBandProps {
  headline?: string;
  buttonLabel?: string;
  buttonText?: string;
  buttonHref?: string;
  email?: string;
  phone?: string;
  address?: string;
  socials?: SocialLink[];
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent' | 'default' | 'dark' | 'alt';
  className?: string;
}

/**
 * CTA Band section component with contact details
 */
export function CtaBand({
  headline = "LET'S BUILD SOMETHING ICONIC.",
  buttonLabel,
  buttonText,
  buttonHref = '/contact',
  email,
  phone,
  address,
  socials,
  id,
  tone = 'accent',
  className,
}: CtaBandProps) {
  const activeLabel = buttonLabel || buttonText || 'START A PROJECT';
  return (
    <Section id={id} tone={tone} className={cn('py-20 lg:py-32', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] mb-8 whitespace-pre-line text-accent-ink">
              {headline}
            </h2>
            <div>
              <a
                href={buttonHref}
                data-anim="magnetic"
                className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-ink text-paper rounded-full hover:scale-105 transition-transform duration-300 group shadow-brutal"
              >
                <svg width="28" height="28" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform text-accent">
                  <path d="M4 12L12 4M12 4H6M12 4V10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle: Liquid Chrome Waves Texture */}
          <div className="lg:col-span-4 h-48 lg:h-72 relative overflow-hidden border-4 border-ink shadow-brutal bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/textures/chrome.png"
              alt="Liquid Chrome Waves Texture"
              className="w-full h-full object-cover filter contrast-125 hover:scale-110 transition-transform duration-700 select-none"
            />
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-6 text-accent-ink border-t-2 lg:border-t-0 lg:border-l-2 border-ink pt-8 lg:pt-0 lg:pl-8">
            {email && (
              <div>
                <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Email</h4>
                <a href={`mailto:${email}`} className="text-lg font-medium hover:underline">{email}</a>
              </div>
            )}
            {phone && (
              <div>
                <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Phone</h4>
                <a href={`tel:${phone}`} className="text-lg font-medium hover:underline">{phone}</a>
              </div>
            )}
            {address && (
              <div>
                <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Address</h4>
                <p className="text-lg font-medium whitespace-pre-line">{address}</p>
              </div>
            )}
            {socials && socials.length > 0 && (
              <div>
                <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Socials</h4>
                <ul className="flex flex-wrap gap-4">
                  {socials.map((s, i) => (
                    <li key={i}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline capitalize">{s.platform}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
