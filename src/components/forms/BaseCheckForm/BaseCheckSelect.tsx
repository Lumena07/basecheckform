import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface BaseCheckSelectProps {
  register: UseFormRegister<BaseCheckFormData>;
  currentBaseCheck: number;
  error?: string;
}

export const BaseCheckSelect: React.FC<BaseCheckSelectProps> = ({
  register,
  currentBaseCheck,
  error
}) => {
  return (
    <FormField
      label="Base Check Number"
      error={error}
    >
      <select
        {...register('baseCheckNumber', { valueAsNumber: true })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <option 
            key={num} 
            value={num}
            disabled={num !== currentBaseCheck}
          >
            Base Check {num}
          </option>
        ))}
      </select>
    </FormField>
  );
};