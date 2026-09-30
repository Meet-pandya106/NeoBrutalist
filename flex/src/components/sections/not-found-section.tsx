import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface NotFoundSectionProps {
  id?: string;
  className?: string;
}

/**
 * 404 Not Found section component
 */
export function NotFoundSection({ id, className }: NotFoundSectionProps) {
  return (
    <Section id={id} tone="paper" className={cn('min-h-[70vh] flex items-center py-20', className)}>
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[12rem] leading-none font-black text-ink mb-4 drop-shadow-[8px_8px_0px_var(--accent)]">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Page Not Found
          </h2>
          <p className="text-xl font-medium max-w-lg mb-12">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 font-bold uppercase text-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--accent)] transition-all"
          >
            Go Back Home
          </a>
        </div>
      </Container>
    </Section>
  );
}
