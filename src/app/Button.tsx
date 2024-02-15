import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={
        `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 ` +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
