// Input Component (Input.jsx)
import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  [key: string]: unknown;
}

export const Input: React.FC<InputProps> = ({ label, type = "text", ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 mb-1">{label}</label>
      <input
        type={type}
        className="w-full max-w-xl p-2 bg-gray-800 text-gray-300 border border-gray-600 rounded focus:outline-none focus:border-purple-600"
        {...props}
      />
    </div>
  );
};
