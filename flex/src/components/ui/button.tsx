'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';
import { CircleArrowButton } from './circle-arrow-button';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The variant style of the button */
  variant?: 'solid' | 'accent' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
  /** The size of the button */
  size?: 's' | 'm' | 'l' | 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Whether to show a trailing circle arrow */
  withArrow?: boolean;
  /** If provided, renders as an anchor tag */
  href?: string;
}

/**
 * Neo-brutalist Button component
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'solid',
      size = 'm',
      isLoading,
      withArrow,
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

    const normalizedVariant = variant === 'primary' ? 'accent' : variant === 'secondary' ? 'outline' : variant;
    const normalizedSize = size === 'sm' ? 's' : size === 'md' ? 'm' : size === 'lg' ? 'l' : size;

    const variants = {
      solid: 'bg-ink text-paper hover:bg-ink/90',
      accent: 'bg-accent text-accent-ink hover:brightness-110',
      outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
      ghost: 'text-ink hover:bg-paper-2',
      link: 'text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent',
    };

    const sizes = {
      s: 'h-8 px-4 text-xs',
      m: 'h-12 px-6 text-sm',
      l: 'h-16 px-8 text-base',
    };

    const classes = cn(
      baseStyles,
      variants[normalizedVariant],
      sizes[normalizedSize],
      href ? '' : '',
      className
    );

    const inner = (
      <>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
        {withArrow && (
          <CircleArrowButton
            className="ml-3 -mr-2"
            size={size === 's' ? 32 : size === 'm' ? 48 : 64}
            variant={variant === 'accent' ? 'filled-ink' : 'filled-accent'}
          />
        )}
      </>
    );

    if (href) {
      return (
        <a href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
          {inner}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {inner}
      </button>
    );
  }
);
Button.displayName = 'Button';
