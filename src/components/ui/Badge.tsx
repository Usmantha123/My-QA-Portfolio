import React, { type ReactNode } from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-surface-secondary text-content-secondary border-divider/80',
  primary:
    'bg-accent/10 text-accent border-accent/25',
  secondary:
    'bg-purple-500/10 text-purple-400 border-purple-500/25',
  success:
    'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  warning:
    'bg-amber-500/10 text-amber-400 border-amber-500/25',
  danger:
    'bg-rose-500/10 text-rose-400 border-rose-500/25',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-xs px-2.5 py-0.5 gap-1 font-medium',
  md: 'text-xs md:text-sm px-3 py-1 gap-1.5 font-medium',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  icon,
  children,
  className = '',
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
