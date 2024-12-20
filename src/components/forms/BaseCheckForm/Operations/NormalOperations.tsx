import React from 'react';
import { useNormalOperations } from '@/lib/hooks/useNormalOperations';
import { OperationList } from './OperationList';

export const NormalOperations: React.FC = () => {
  const { data: operations = [], isLoading } = useNormalOperations();

  return (
    <OperationList
      title="Normal Operations"
      operations={operations}
      isLoading={isLoading}
    />
  );
};