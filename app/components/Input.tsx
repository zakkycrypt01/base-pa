import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</div>}
          <input
            ref={ref}
            className={`w-full glass border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              icon ? 'pl-10' : ''
            } ${error ? 'ring-2 ring-red-500' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full glass border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
            error ? 'ring-2 ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
