import * as React from 'react';
import { cn } from '@/lib/cn';

export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The color of the highlight brush */
  color?: string;
  /** The shape variant */
  variant?: 1 | 2 | 3;
}

/**
 * Text highlight component with a brush-stroke SVG background
 */
export const Highlight = React.forwardRef<HTMLSpanElement, HighlightProps>(
  ({ className, children, color = 'var(--accent)', variant = 1, ...props }, ref) => {
    return (
      <span ref={ref} className={cn('relative inline-block whitespace-nowrap z-0', className)} {...props}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute inset-0 w-full h-full -z-10 -rotate-1 pointer-events-none scale-105"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          style={{ color }}
        >
          {variant === 1 && (
            <path
              d="M2,50 Q25,30 50,45 T98,50 Q80,80 50,60 T2,50 Z"
              fill="currentColor"
              opacity="0.8"
            />
          )}
          {variant === 2 && (
            <path
              d="M5,40 C30,30 70,30 95,40 L98,60 C70,70 30,70 5,60 Z"
              fill="currentColor"
              opacity="0.8"
            />
          )}
          {variant === 3 && (
            <path
              d="M0,50 Q30,20 60,40 T100,50 Q70,80 40,60 T0,50 Z"
              fill="currentColor"
              opacity="0.8"
            />
          )}
        </svg>
      </span>
    );
  }
);
Highlight.displayName = 'Highlight';
