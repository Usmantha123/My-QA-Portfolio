import React, { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export type CardGlow = 'none' | 'blue' | 'purple';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: CardGlow;
}

const glowStyles: Record<CardGlow, string> = {
  none: '',
  blue: 'glow-blue',
  purple: 'glow-purple',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      hoverEffect = false,
      glow = 'none',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'glass rounded-2xl p-6 transition-colors duration-300 relative border border-divider/70 overflow-hidden';

    const hoverClass = hoverEffect
      ? 'hover:border-accent/40 hover:shadow-lg'
      : '';

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${glowStyles[glow]} ${hoverClass} ${className}`}
        whileHover={hoverEffect ? { y: -4 } : undefined}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
