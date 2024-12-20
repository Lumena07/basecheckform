import React from 'react';
import { Card } from '../../ui/Card';

interface NormalOperationsProps {
  operations: Array<{ title: string; description: string }>;
}

export const NormalOperations: React.FC<NormalOperationsProps> = ({ operations }) => {
  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-medium">Normal Operations</h3>
      <div className="space-y-3">
        {operations.map((op, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-md">
            <h4 className="font-medium">{op.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{op.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};