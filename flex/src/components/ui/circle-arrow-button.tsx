import * as React from 'react';
import { cn } from '@/lib/cn';

export interface CircleArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of the button in pixels */
  size?: 32 | 48 | 64 | 96;
  /** Style variant */
  variant?: 'filled-ink' | 'filled-accent' | 'outline';
  /** Direction of the arrow */
  direction?: 'up-right' | 'right' | 'down' | 'left';
}

/**
 * Signature circle button with a diagonal arrow
 */
export const CircleArrowButton = React.forwardRef<HTMLButtonElement, CircleArrowButtonProps>(
  ({ className, size = 48, variant = 'filled-ink', direction = 'up-right', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex-shrink-0';

    const variants = {
      'filled-ink': 'bg-ink text-paper hover:bg-accent hover:text-accent-ink',
      'filled-accent': 'bg-accent text-accent-ink hover:bg-ink hover:text-paper',
      outline: 'border-2 border-ink text-ink hover:bg-accent hover:border-accent hover:text-accent-ink',
    };

    const sizeStyles = {
      32: 'w-8 h-8',
      48: 'w-12 h-12',
      64: 'w-16 h-16',
      96: 'w-24 h-24',
    };

    const iconSizes = {
      32: 'w-4 h-4',
      48: 'w-5 h-5',
      64: 'w-6 h-6',
      96: 'w-10 h-10',
    };

    const rotations = {
      'up-right': 'group-hover:rotate-45',
      right: 'rotate-45 group-hover:rotate-90',
      down: 'rotate-[135deg] group-hover:rotate-180',
      left: '-rotate-[135deg] group-hover:-rotate-90',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizeStyles[size], className)}
        {...props}
      >
        <svg
          className={cn(iconSizes[size], 'transition-transform duration-300', rotations[direction])}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </button>
    );
  }
);
CircleArrowButton.displayName = 'CircleArrowButton';
