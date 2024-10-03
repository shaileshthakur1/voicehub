import React from 'react';

export const Card: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={`bg-gray-800 shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="pb-2 mb-4">{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <h3 className={`font-bold ${className}`}>{children}</h3>;
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={`pt-2 mt-2 border-t ${className}`}>{children}</div>;
};
