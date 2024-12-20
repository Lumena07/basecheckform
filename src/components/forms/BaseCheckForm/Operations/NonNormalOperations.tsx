import React from 'react';
import { useNonNormalOperations } from '@/lib/hooks/useNonNormalOperations';
import { OperationList } from './OperationList';

interface NonNormalOperationsProps {
  baseCheckNumber: number;
}

export const NonNormalOperations: React.FC<NonNormalOperationsProps> = ({
  baseCheckNumber
}) => {
  const { data: operations = [], isLoading } = useNonNormalOperations();

  const filteredOperations = operations.filter(
    (op) => op.baseCheckNumber === baseCheckNumber
  );

  return (
    <OperationList
      title="Non-Normal Operations"
      operations={filteredOperations}
      isLoading={isLoading}
    />
  );
};