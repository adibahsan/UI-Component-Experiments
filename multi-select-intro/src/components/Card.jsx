import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

