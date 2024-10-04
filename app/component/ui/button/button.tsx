'use client'
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ asChild, size = 'md', className = '', ...props }) => {
  const Component = asChild ? 'span' : 'button';
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <Component
      className={`bg-purple-600 text-white rounded-lg transition-all ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
};
