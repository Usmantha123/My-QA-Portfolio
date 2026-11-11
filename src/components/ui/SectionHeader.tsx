import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badge?: string | ReactNode;
  title: ReactNode;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 flex flex-col ${
        centered ? 'text-center items-center mx-auto' : 'text-left items-start'
      } ${className}`}
    >
      {badge && (
        <div className="mb-3">
          {typeof badge === 'string' ? (
            <Badge variant="primary" size="md">
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-content tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-content-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
