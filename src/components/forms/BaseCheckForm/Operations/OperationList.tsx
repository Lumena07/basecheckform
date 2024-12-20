import React from 'react';
import { Card } from '@/components/ui/Card';
import { OperationItem } from './OperationItem';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { type Operation } from '@/types/operations';

interface OperationListProps {
  title: string;
  operations: Operation[];
  isLoading: boolean;
}

export const OperationList: React.FC<OperationListProps> = ({
  title,
  operations,
  isLoading
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="space-y-3">
        {operations.map((operation) => (
          <OperationItem
            key={operation.id}
            title={operation.title}
            description={operation.description}
          />
        ))}
      </div>
    </Card>
  );
};