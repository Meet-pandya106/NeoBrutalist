import * as React from 'react';
import { cn } from '@/lib/cn';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The style variant */
  variant?: 'solid' | 'tag' | 'badge' | 'red';
  /** Optional status dot color (only applicable to badge variant) */
  statusColor?: string;
}

/**
 * Small label pill for tags and status badges
 */
export const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant = 'solid', statusColor, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-mono uppercase tracking-[0.08em] text-[11px] h-6 px-3 rounded-full whitespace-nowrap font-bold shadow-[2px_2px_0px_var(--ink)] select-none';

    const variants = {
      solid: 'bg-accent text-accent-ink border-2 border-ink',
      red: 'bg-accent-2 text-paper border-2 border-ink',
      tag: 'border-2 border-ink text-ink bg-transparent',
      badge: 'border-2 border-ink text-ink bg-paper',
    };

    return (
      <span ref={ref} className={cn(baseStyles, variants[variant], className)} {...props}>
        {variant === 'badge' && (
          <span
            className="w-2 h-2 rounded-full mr-2 shrink-0 bg-accent-2 animate-pulse"
            style={statusColor ? { backgroundColor: statusColor } : undefined}
          />
        )}
        {children}
      </span>
    );
  }
);
Pill.displayName = 'Pill';
