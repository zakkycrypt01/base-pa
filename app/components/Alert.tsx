import React from 'react';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children, onClose }) => {
  const variants = {
    info: {
      bg: 'bg-blue-600/20',
      border: 'border-blue-500/50',
      text: 'text-blue-300',
      icon: '🔵',
    },
    success: {
      bg: 'bg-green-600/20',
      border: 'border-green-500/50',
      text: 'text-green-300',
      icon: '✓',
    },
    warning: {
      bg: 'bg-yellow-600/20',
      border: 'border-yellow-500/50',
      text: 'text-yellow-300',
      icon: '⚠',
    },
    error: {
      bg: 'bg-red-600/20',
      border: 'border-red-500/50',
      text: 'text-red-300',
      icon: '✕',
    },
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4 flex gap-4 items-start`}>
      <span className="text-xl flex-shrink-0">{style.icon}</span>
      <div className="flex-grow">
        {title && <h4 className={`font-semibold ${style.text} mb-1`}>{title}</h4>}
        <div className={`${style.text} text-sm`}>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};
