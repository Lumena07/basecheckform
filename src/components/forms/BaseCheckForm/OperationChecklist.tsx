import React from 'react';
import { Card } from '@/components/ui/Card';
import { ChecklistItem } from './ChecklistItem';

interface Operation {
  id: string;
  title: string;
  completed: boolean;
}

interface OperationChecklistProps {
  title: string;
  operations: Operation[];
  onToggleOperation: (id: string) => void;
  error?: string;
}

export const OperationChecklist: React.FC<OperationChecklistProps> = ({
  title,
  operations,
  onToggleOperation,
  error
}) => {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="space-y-2">
        {operations.map((operation) => (
          <ChecklistItem
            key={operation.id}
            title={operation.title}
            isCompleted={operation.completed}
            onToggle={() => onToggleOperation(operation.id)}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </Card>
  );
};