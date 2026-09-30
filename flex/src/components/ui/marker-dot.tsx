import * as React from 'react';
import { cn } from '@/lib/cn';

export interface MarkerDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'accent' | 'red';
}

/**
 * Small accent dot used after headings
 */
export const MarkerDot = React.forwardRef<HTMLSpanElement, MarkerDotProps>(
  ({ className, size = 'md', color = 'red', ...props }, ref) => {
    const sizes = {
      sm: 'w-2 h-2',
      md: 'w-3 h-3',
      lg: 'w-4 h-4',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-block rounded-full flex-shrink-0 border border-ink',
          color === 'red' ? 'bg-accent-2' : 'bg-accent',
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
MarkerDot.displayName = 'MarkerDot';
