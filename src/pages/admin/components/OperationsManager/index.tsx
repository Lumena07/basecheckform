import React from 'react';
import { Card } from '@/components/ui/Card';
import { NormalOperationsList } from './NormalOperationsList';
import { NonNormalOperationsList } from './NonNormalOperationsList';

export const OperationsManager = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Operations Management</h2>
        <div className="space-y-8">
          <NormalOperationsList />
          <NonNormalOperationsList />
        </div>
      </Card>
    </div>
  );
};