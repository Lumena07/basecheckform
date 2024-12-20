import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface DateFieldProps {
  register: UseFormRegister<BaseCheckFormData>;
  error?: string;
}

export const DateField: React.FC<DateFieldProps> = ({ register, error }) => {
  return (
    <FormField
      label="Date"
      error={error}
    >
      <input
        type="date"
        {...register('date')}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </FormField>
  );
};