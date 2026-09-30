import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

export interface ImageBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Source URL of the image */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Aspect ratio preset */
  aspectRatio?: 'square' | '4:3' | '16:9' | '3:4' | 'auto';
  /** Whether to apply an angled clip-path mask */
  angled?: boolean;
  /** Whether to apply a duotone effect */
  duotone?: boolean;
}

/**
 * Image wrapper with aspect-ratio presets and effects
 */
export const ImageBlock = React.forwardRef<HTMLDivElement, ImageBlockProps>(
  (
    {
      className,
      src,
      alt = '',
      aspectRatio = '16:9',
      angled = false,
      duotone = false,
      ...props
    },
    ref
  ) => {
    const ratios = {
      square: 'aspect-square',
      '4:3': 'aspect-[4/3]',
      '16:9': 'aspect-video',
      '3:4': 'aspect-[3/4]',
      auto: 'aspect-auto',
    };

    const angledStyle = angled
      ? { clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)' }
      : {};

    const fallbackGradient = 'bg-gradient-to-tr from-paper-2 to-line';

    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden',
          ratios[aspectRatio],
          duotone ? 'mix-blend-luminosity' : '',
          className
        )}
        style={angledStyle}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={cn('object-cover', duotone ? 'contrast-125 grayscale' : '')}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={cn('absolute inset-0', fallbackGradient)} />
        )}
        {duotone && src && (
          <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-50 pointer-events-none" />
        )}
      </div>
    );
  }
);
ImageBlock.displayName = 'ImageBlock';
