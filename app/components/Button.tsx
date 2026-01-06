import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, className = '', children, disabled, ...props }, ref) => {
    const baseStyles = 'font-semibold transition-all rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
      secondary: 'glass border border-white/10 text-gray-200 hover:bg-white/10 focus:ring-blue-500',
      ghost: 'text-gray-300 hover:text-white focus:ring-blue-500',
      danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${!disabled && 'hover:scale-105'} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
