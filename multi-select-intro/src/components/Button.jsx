import React from 'react';

export function Button({ children, className, disabled, ...props }) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 transition-all duration-200 ${
        disabled 
          ? 'bg-gray-400 cursor-not-allowed opacity-50' 
          : 'bg-emerald-500 hover:bg-emerald-600'
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
