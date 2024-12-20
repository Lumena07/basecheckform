import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { FormField } from '@/components/ui/FormField';

interface BaseCheckFieldsProps {
  register: UseFormRegister<BaseCheckFormData>;
  errors: Record<string, any>;
}

export const BaseCheckFields: React.FC<BaseCheckFieldsProps> = ({
  register,
  errors
}) => {
  return (
    <div className="space-y-4">
      <FormField
        label="Pilot Name"
        error={errors.pilotName?.message}
      >
        <input
          type="text"
          {...register('pilotName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField
        label="Base Check Number"
        error={errors.baseCheckNumber?.message}
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

      <FormField
        label="Date"
        error={errors.date?.message}
      >
        <input
          type="date"
          {...register('date')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField
        label="Notes"
        error={errors.notes?.message}
      >
        <textarea
          {...register('notes')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </div>
  );
};