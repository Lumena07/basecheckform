import { useQuery } from '@tanstack/react-query';
import { type NonNormalOperation } from '@/types/operations';
import { NON_NORMAL_OPERATIONS } from '@/lib/constants/nonNormalOperations';

const fetchNonNormalOperations = async (): Promise<NonNormalOperation[]> => {
  // TODO: Replace with actual API call
  const operations: NonNormalOperation[] = [];
  
  Object.entries(NON_NORMAL_OPERATIONS).forEach(([baseCheckNumber, ops]) => {
    ops.forEach((op) => {
      operations.push({
        id: `non-normal-${baseCheckNumber}-${op.title}`,
        category: op.title,
        title: op.title,
        description: op.description,
        baseCheckNumber: parseInt(baseCheckNumber),
      });
    });
  });

  return operations;
};

export const useNonNormalOperations = () => {
  return useQuery({
    queryKey: ['nonNormalOperations'],
    queryFn: fetchNonNormalOperations,
  });
};