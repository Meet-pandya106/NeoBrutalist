import * as React from 'react';
import { cn } from '@/lib/cn';

export interface LabelTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional component type to render as */
  as?: React.ElementType;
}

/**
 * Mono caps micro text component
 */
export const LabelText = React.forwardRef<HTMLElement, LabelTextProps>(
  ({ className, as: Component = 'span', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-mono uppercase tracking-[0.08em] text-[11px] sm:text-[12px] font-bold text-ink/90 dark:text-muted',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
LabelText.displayName = 'LabelText';
