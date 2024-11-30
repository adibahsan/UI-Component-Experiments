import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-emerald-500 rounded-lg shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

