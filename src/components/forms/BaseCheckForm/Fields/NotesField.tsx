import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface NotesFieldProps {
  register: UseFormRegister<BaseCheckFormData>;
  error?: string;
}

export const NotesField: React.FC<NotesFieldProps> = ({ register, error }) => {
  return (
    <FormField
      label="Notes"
      error={error}
    >
      <textarea
        {...register('notes')}
        rows={4}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </FormField>
  );
};