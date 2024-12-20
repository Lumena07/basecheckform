import { useQuery } from '@tanstack/react-query';
import { type BaseCheck } from '@/types/baseCheck';

const fetchBaseChecks = async (): Promise<BaseCheck[]> => {
  const response = await fetch('/api/base-checks');
  if (!response.ok) {
    throw new Error('Failed to fetch base checks');
  }
  return response.json();
};

export const useBaseChecks = () => {
  return useQuery({
    queryKey: ['baseChecks'],
    queryFn: fetchBaseChecks,
  });
};