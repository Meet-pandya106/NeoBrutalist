import * as React from 'react';
import { cn } from '@/lib/cn';

export interface CrosshairProps extends React.SVGProps<SVGSVGElement> {
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Custom color */
  color?: string;
}

/**
 * Plus-mark SVG decoration
 */
export const Crosshair = React.forwardRef<SVGSVGElement, CrosshairProps>(
  ({ className, size = 'md', color = 'var(--line)', ...props }, ref) => {
    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-12 h-12',
    };

    return (
      <svg
        ref={ref}
        className={cn(sizes[size], className)}
        viewBox="0 0 24 24"
        fill="none"
        style={{ color }}
        {...props}
      >
        <path
          d="M12 2V22M2 12H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    );
  }
);
Crosshair.displayName = 'Crosshair';
