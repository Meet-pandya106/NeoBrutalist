import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface RichTextProps {
  title?: string;
  content: string;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Rich Text section component
 */
export function RichText({ title, content, id, tone = 'paper', className }: RichTextProps) {
  return (
    <Section id={id} tone={tone} className={cn('py-16 lg:py-24', className)}>
      <Container>
        <div className="max-w-3xl mx-auto">
          {title && <h2 className="text-4xl md:text-5xl font-bold uppercase mb-10 text-center">{title}</h2>}
          <div 
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:uppercase prose-a:font-bold prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:text-accent prose-p:font-medium text-ink prose-headings:text-ink prose-strong:text-ink"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Container>
    </Section>
  );
}
