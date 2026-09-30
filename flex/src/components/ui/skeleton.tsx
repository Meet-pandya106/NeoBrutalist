import * as React from 'react';
import { cn } from '@/lib/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The visual variant of the skeleton */
  variant?: 'text' | 'circle' | 'rect' | 'card';
}

/**
 * Loading skeleton with pulse animation
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', ...props }, ref) => {
    const variants = {
      text: 'h-4 w-full rounded',
      circle: 'h-12 w-12 rounded-full',
      rect: 'w-full h-full min-h-[4rem] rounded',
      card: 'w-full h-48 rounded-[var(--radius-card)]',
    };

    return (
      <div
        ref={ref}
        className={cn('animate-pulse bg-line/50', variants[variant], className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
