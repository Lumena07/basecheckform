import { type UseFormSetValue, type UseFormGetValues } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { updateFormItems } from '@/lib/utils/formHelpers';

export const useFormHandlers = (
  setValue: UseFormSetValue<BaseCheckFormData>,
  getValues: UseFormGetValues<BaseCheckFormData>
) => {
  const handleToggleItem = (section: keyof BaseCheckFormData, id: string) => {
    const items = getValues(section) as any[];
    const updatedItems = updateFormItems(items, id, {
      completed: !items.find(item => item.id === id)?.completed
    });
    setValue(section, updatedItems);
  };

  const handleUpdatePerformance = (
    section: keyof BaseCheckFormData,
    id: string,
    value: 1 | 2 | 3 | 4 | 'C' | 'NC'
  ) => {
    const items = getValues(section) as any[];
    const updatedItems = updateFormItems(items, id, { performance: value });
    setValue(section, updatedItems);
  };

  const handleUpdateComments = (
    section: keyof BaseCheckFormData,
    id: string,
    value: string
  ) => {
    const items = getValues(section) as any[];
    const updatedItems = updateFormItems(items, id, { comments: value });
    setValue(section, updatedItems);
  };

  return {
    handleToggleItem,
    handleUpdatePerformance,
    handleUpdateComments
  };
};