import React from 'react';
import { cn } from '../../lib/utils/styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn('bg-white rounded-lg shadow-md p-6', className)}>
      {children}
    </div>
  );
};