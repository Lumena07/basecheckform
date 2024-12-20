import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ChecklistItemProps {
  title: string;
  isCompleted: boolean;
  onToggle: () => void;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  title,
  isCompleted,
  onToggle
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    onToggle();
  };

  return (
    <button
      type="button" // Prevent form submission
      onClick={handleClick}
      className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
    >
      {isCompleted ? (
        <CheckCircle className="h-5 w-5 text-green-500" />
      ) : (
        <Circle className="h-5 w-5 text-gray-400" />
      )}
      <span className={isCompleted ? 'text-gray-600' : 'text-gray-900'}>
        {title}
      </span>
    </button>
  );
};