import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface PilotNameFieldProps {
  register: UseFormRegister<BaseCheckFormData>;
  error?: string;
}

export const PilotNameField: React.FC<PilotNameFieldProps> = ({ register, error }) => {
  return (
    <FormField
      label="Pilot Name"
      error={error}
    >
      <input
        type="text"
        {...register('pilotName')}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </FormField>
  );
};