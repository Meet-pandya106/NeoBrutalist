import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface QuoteBandProps {
  quote: string;
  author: string;
  role?: string;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Quote Band section component for giant quotes
 */
export function QuoteBand({ quote, author, role, id, tone = 'ink', className }: QuoteBandProps) {
  return (
    <Section id={id} tone={tone} className={cn('py-24 lg:py-40', className)}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-12">
            "{quote}"
          </blockquote>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl uppercase tracking-wider">{author}</span>
            {role && <span className="mt-2 text-sm font-medium opacity-80 uppercase tracking-widest">{role}</span>}
          </div>
        </div>
      </Container>
    </Section>
  );
}
