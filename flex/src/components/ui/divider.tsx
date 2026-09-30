import * as React from 'react';
import { cn } from '@/lib/cn';
import { LabelText } from './label-text';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: 'solid' | 'dashed';
  /** Optional label text to display in the center */
  label?: string;
}

/**
 * Hairline or dashed rule with optional label
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant = 'solid', label, ...props }, ref) => {
    if (label) {
      return (
        <div ref={ref} className={cn('flex items-center w-full', className)} {...props}>
          <div
            className={cn('flex-grow h-px', variant === 'dashed' ? 'border-t border-dashed border-line' : 'bg-line')}
          />
          <LabelText className="mx-4 text-muted">{label}</LabelText>
          <div
            className={cn('flex-grow h-px', variant === 'dashed' ? 'border-t border-dashed border-line' : 'bg-line')}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-px',
          variant === 'dashed' ? 'border-t border-dashed border-line' : 'bg-line',
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';
