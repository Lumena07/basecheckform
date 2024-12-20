import { useQuery } from '@tanstack/react-query';
import { type NormalOperation } from '@/types/operations';
import { DEFAULT_NORMAL_OPERATIONS } from '@/lib/constants/normalOperations';

const fetchNormalOperations = async (): Promise<NormalOperation[]> => {
  // TODO: Replace with actual API call
  return DEFAULT_NORMAL_OPERATIONS.map((op, index) => ({
    id: `normal-${index + 1}`,
    ...op,
    order: index + 1,
  }));
};

export const useNormalOperations = () => {
  return useQuery({
    queryKey: ['normalOperations'],
    queryFn: fetchNormalOperations,
  });
};