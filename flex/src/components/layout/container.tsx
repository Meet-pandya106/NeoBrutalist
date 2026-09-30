import React from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Container component
 * @param {ContainerProps} props - Component props
 */
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[var(--container-max)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
