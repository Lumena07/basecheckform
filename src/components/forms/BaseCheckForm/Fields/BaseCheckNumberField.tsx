import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface BaseCheckNumberFieldProps {
  register: UseFormRegister<BaseCheckFormData>;
  error?: string;
}

export const BaseCheckNumberField: React.FC<BaseCheckNumberFieldProps> = ({ register, error }) => {
  return (
    <FormField
      label="Base Check Number"
      error={error}
    >
      <select
        {...register('baseCheckNumber', { valueAsNumber: true })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <option key={num} value={num}>Base Check {num}</option>
        ))}
      </select>
    </FormField>
  );
};