import React from 'react';
import { cn } from '@/lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent' | 'default' | 'dark' | 'alt';
  align?: 'left' | 'center' | 'right';
  bleed?: boolean;
  dividerTop?: boolean;
  dividerBottom?: boolean;
}

/**
 * Section component
 * @param {SectionProps} props - Component props
 */
export function Section({
  children,
  className,
  tone = 'paper',
  align,
  bleed = false,
  dividerTop = false,
  dividerBottom = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'w-full',
        bleed ? '' : 'px-[var(--container-pad)]',
        'py-[var(--section-pad)]',
        tone === 'paper' && 'bg-paper text-ink',
        (tone === 'default' || tone === undefined) && 'bg-paper text-ink',
        (tone === 'paper-2' || tone === 'alt') && 'bg-paper-2 text-ink',
        (tone === 'ink' || tone === 'dark') && 'bg-ink text-paper',
        tone === 'accent' && 'bg-accent text-accent-ink',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        dividerTop && 'border-t-2 border-line',
        dividerBottom && 'border-b-2 border-line',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
