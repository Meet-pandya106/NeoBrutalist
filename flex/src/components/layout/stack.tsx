import React from 'react';
import { cn } from '@/lib/cn';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

/**
 * Stack component
 * @param {StackProps} props - Component props
 */
export function Stack({
  children,
  className,
  direction = 'col',
  gap = 'md',
  align,
  justify,
  ...props
}: StackProps) {
  const getGapClass = (gap: StackProps['gap']) => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'xs': return 'gap-2';
      case 'sm': return 'gap-4';
      case 'md': return 'gap-[var(--grid-gutter)]';
      case 'lg': return 'gap-12';
      case 'xl': return 'gap-16';
      default: return 'gap-[var(--grid-gutter)]';
    }
  };

  return (
    <div
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        getGapClass(gap),
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
        align === 'end' && 'items-end',
        align === 'stretch' && 'items-stretch',
        justify === 'start' && 'justify-start',
        justify === 'center' && 'justify-center',
        justify === 'end' && 'justify-end',
        justify === 'between' && 'justify-between',
        justify === 'around' && 'justify-around',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
