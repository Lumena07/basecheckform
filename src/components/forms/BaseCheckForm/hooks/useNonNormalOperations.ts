import { useEffect } from 'react';
import { UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { NON_NORMAL_OPERATIONS } from '@/lib/constants/nonNormalOperations';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';

export const useNonNormalOperations = (
  watch: UseFormWatch<BaseCheckFormData>,
  setValue: UseFormSetValue<BaseCheckFormData>
) => {
  const baseCheckNumber = watch('baseCheckNumber');

  useEffect(() => {
    if (!baseCheckNumber) return;

    const operations = NON_NORMAL_OPERATIONS[baseCheckNumber as keyof typeof NON_NORMAL_OPERATIONS] || [];
    
    // Initialize non-normal operations for this base check
    const nonNormalOps = operations.map(op => ({
      id: op.id,
      title: op.title,
      completed: false,
      performance: undefined,
      comments: ''
    }));

    setValue('nonNormalOperations', nonNormalOps);
  }, [baseCheckNumber, setValue]);
};