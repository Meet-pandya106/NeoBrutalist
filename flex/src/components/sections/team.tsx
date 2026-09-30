import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  imageHover?: string;
}

export interface TeamProps {
  title?: string;
  people: TeamMember[];
  featuredImage?: string;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent' | 'default' | 'dark' | 'alt';
  className?: string;
}

/**
 * Team section component displaying a grid of people
 */
export function Team({ title, people, featuredImage, id, tone = 'paper', className }: TeamProps) {
  return (
    <Section id={id} tone={tone} className={cn('py-16 lg:py-24', className)}>
      <Container>
        {title && <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase font-display">{title}</h2>}

        {featuredImage && (
          <div className="mb-12 border-4 border-ink shadow-brutal overflow-hidden bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredImage}
              alt="Leadership & Creative Directors"
              className="w-full h-auto object-cover filter contrast-125 hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((person, i) => (
            <div key={i} className="group relative border-2 border-ink p-4 bg-paper hover:-translate-y-1 transition-transform">
              <div className="aspect-square bg-muted mb-4 border-2 border-ink overflow-hidden bg-gradient-to-br from-paper-2 to-muted relative">
                {person.image && (
                  <img src={person.image} alt={person.name} className="object-cover w-full h-full" />
                )}
                {person.imageHover && (
                  <img src={person.imageHover} alt={person.name} className="object-cover w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <h3 className="font-bold text-xl uppercase mb-1">{person.name}</h3>
              <p className="text-sm font-medium">{person.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
