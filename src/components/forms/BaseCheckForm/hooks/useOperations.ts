import { useEffect } from 'react';
import { type UseFormWatch, type UseFormSetValue } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { NON_NORMAL_OPERATIONS } from '@/lib/constants/nonNormalOperations';

export const useOperations = (
  watch: UseFormWatch<BaseCheckFormData>,
  setValue: UseFormSetValue<BaseCheckFormData>
) => {
  const baseCheckNumber = watch('baseCheckNumber');
  const normalOperations = watch('normalOperations');
  const nonNormalOperations = watch('nonNormalOperations');

  const handleToggleNormalOp = (id: string) => {
    const updatedOps = normalOperations.map(op =>
      op.id === id ? { ...op, completed: !op.completed } : op
    );
    setValue('normalOperations', updatedOps);
  };

  const handleToggleNonNormalOp = (id: string) => {
    const updatedOps = nonNormalOperations.map(op =>
      op.id === id ? { ...op, completed: !op.completed } : op
    );
    setValue('nonNormalOperations', updatedOps);
  };

  useEffect(() => {
    const newNonNormalOps = NON_NORMAL_OPERATIONS[baseCheckNumber as keyof typeof NON_NORMAL_OPERATIONS]
      .map(op => ({
        id: `nno-${op.title.toLowerCase().replace(/\s+/g, '-')}`,
        title: op.title,
        completed: false
      }));
    setValue('nonNormalOperations', newNonNormalOps);
  }, [baseCheckNumber, setValue]);

  return {
    normalOperations,
    nonNormalOperations,
    handleToggleNormalOp,
    handleToggleNonNormalOp
  };
};