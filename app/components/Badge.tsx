import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className = '', children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-700 text-gray-200',
      primary: 'bg-blue-600/30 text-blue-300 border border-blue-500/50',
      success: 'bg-green-600/30 text-green-300 border border-green-500/50',
      warning: 'bg-yellow-600/30 text-yellow-300 border border-yellow-500/50',
      danger: 'bg-red-600/30 text-red-300 border border-red-500/50',
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
    };

    return (
      <div
        ref={ref}
        className={`rounded-full font-medium inline-block ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
