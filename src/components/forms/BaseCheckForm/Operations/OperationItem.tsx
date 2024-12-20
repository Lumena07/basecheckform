import React from 'react';


interface OperationItemProps {
  title: string;
  description: string;
  steps?: string[];
}

export const OperationItem: React.FC<OperationItemProps> = ({
  title,
  description,
  steps
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md">
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      {steps && steps.length > 0 && (
        <ul className="mt-2 space-y-1">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start text-sm">
              <span>{step}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};