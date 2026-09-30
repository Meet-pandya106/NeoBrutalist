import * as React from 'react';
import { cn } from '@/lib/cn';

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The current index */
  current: number;
  /** The total number of items */
  total: number;
  /** Whether the counter is active (emphasized) */
  isActive?: boolean;
}

/**
 * Vertical counter indicator
 */
export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, current, total, isActive = true, ...props }, ref) => {
    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center font-mono text-[12px] font-bold tracking-widest tabular-nums select-none',
          isActive ? 'text-ink' : 'text-ink/80',
          className
        )}
        {...props}
      >
        <span className="font-bold">{formatNumber(current)}</span>
        <div className={cn('w-[2px] h-8 my-2', isActive ? 'bg-ink' : 'bg-ink/40')} />
        <span className="font-medium text-ink/70">{formatNumber(total)}</span>
      </div>
    );
  }
);
Counter.displayName = 'Counter';
