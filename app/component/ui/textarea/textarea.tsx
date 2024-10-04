// Textarea Component (Textarea.jsx)
import React from 'react';

interface TextareaProps {
  label: string;
  [key: string]: unknown;
}

export const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 mb-1">{label}</label>
      <textarea
        className="w-full max-w-xl p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-purple-600"
        {...props}
      />
    </div>
  );
};
