import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNormalOperations } from '@/lib/hooks/useNormalOperations';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const NormalOperationsList = () => {
  const { data: operations, isLoading } = useNormalOperations();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Normal Operations</h3>
        <Button size="sm">Add Operation</Button>
      </div>
      
      <div className="space-y-4">
        {operations?.map((operation) => (
          <div
            key={operation.id}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{operation.title}</h4>
                <p className="text-sm text-gray-600">{operation.description}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};