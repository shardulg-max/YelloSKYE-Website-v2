import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'black' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-[0.98]";
  
  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-brand-yellow/90",
    secondary: "bg-brand-gray text-brand-black hover:bg-gray-200",
    outline: "bg-transparent border border-gray-200 text-brand-black hover:bg-gray-50",
    black: "bg-brand-black text-white hover:bg-gray-800",
    ghost: "bg-transparent text-brand-black hover:bg-gray-100 shadow-none"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};