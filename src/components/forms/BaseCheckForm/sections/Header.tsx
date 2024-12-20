import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';

interface HeaderProps {
  register: UseFormRegister<BaseCheckFormData>;
  errors: Record<string, any>;
}

export const Header: React.FC<HeaderProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">
        Operator Proficiency Check (OPC) Form
      </h2>
      
      <div className="flex space-x-6">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register('checkType')}
            value="initial"
            className="text-blue-600"
          />
          <span>Initial Check</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register('checkType')}
            value="recurrent"
            className="text-blue-600"
          />
          <span>Recurrent Check</span>
        </label>
      </div>

      <FormField
        label="Date of Check"
        error={errors.date?.message}
      >
        <input
          type="date"
          {...register('date')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </div>
  );
};