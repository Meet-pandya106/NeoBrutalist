import React from 'react';
import { cn } from '@/lib/cn';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

/**
 * Grid component
 * @param {GridProps} props - Component props
 */
export function Grid({
  children,
  className,
  cols = 12,
  gap = 'md',
  ...props
}: GridProps) {
  const getColClass = (cols: number | { sm?: number; md?: number; lg?: number; xl?: number }) => {
    if (typeof cols === 'number') {
      return `grid-cols-1 md:grid-cols-${cols}`; // Defaulting to 1 on mobile, full cols on md
    }
    
    return cn(
      'grid-cols-1',
      cols.sm && `sm:grid-cols-${cols.sm}`,
      cols.md && `md:grid-cols-${cols.md}`,
      cols.lg && `lg:grid-cols-${cols.lg}`,
      cols.xl && `xl:grid-cols-${cols.xl}`
    );
  };

  const getGapClass = (gap: GridProps['gap']) => {
    switch (gap) {
      case 'none': return 'gap-0';
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
        'grid',
        getColClass(cols),
        getGapClass(gap),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
