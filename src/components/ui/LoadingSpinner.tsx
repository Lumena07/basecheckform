import React from 'react';
import { cn } from '@/lib/utils/styles';

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className="flex justify-center items-center">
      <div className={cn(
        'animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 h-12 w-12',
        className
      )} />
    </div>
  );
};