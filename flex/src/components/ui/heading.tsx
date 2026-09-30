import * as React from 'react';
import { cn } from '@/lib/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Alias for as (numeric) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual size preset */
  size?: 'display-xl' | 'display-l' | 'display-m' | 'h2' | 'h3';
}

/**
 * Display font heading component
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as, level, size = 'h2', children, ...props }, ref) => {
    const levelMap: Record<number, 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'> = { 1:'h1', 2:'h2', 3:'h3', 4:'h4', 5:'h5', 6:'h6' }
    const Component = as ?? (level ? levelMap[level] : 'h2')
    const sizes = {
      'display-xl': 'text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]',
      'display-l': 'text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em]',
      'display-m': 'text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.02em]',
      h2: 'text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.01em]',
      h3: 'text-[clamp(1.5rem,2vw,1.75rem)] leading-[1.2] tracking-normal',
    };

    return (
      <Component
        ref={ref}
        className={cn('font-display uppercase text-ink', sizes[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Heading.displayName = 'Heading';
