import React from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { PilotSelect } from '../PilotSelect';
import { BaseCheckSelect } from '../BaseCheckSelect';

interface CandidateDetailsProps {
  register: UseFormRegister<BaseCheckFormData>;
  watch: UseFormWatch<BaseCheckFormData>;
  errors: Record<string, any>;
  currentBaseCheck: number;
}

export const CandidateDetails: React.FC<CandidateDetailsProps> = ({ 
  register, 
  //watch,
  errors,
  currentBaseCheck
}) => {
  //const totalHours = watch('totalHours');
  //const hoursOnType = watch('hoursOnType');

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <PilotSelect register={register} error={errors.pilotId?.message} />
          
          <BaseCheckSelect
            register={register}
            currentBaseCheck={currentBaseCheck}
            error={errors.baseCheckNumber?.message}
          />
        </div>

        <div className="space-y-4">
          <FormField
            label="Medical Expiry"
            error={errors.medicalExpiry?.message}
          >
            <input
              type="date"
              {...register('medicalExpiry')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </FormField>

          <FormField
            label="Total Hours"
            error={errors.totalHours?.message}
          >
            <input
              type="number"
              min="0"
              {...register('totalHours', { 
                valueAsNumber: true,
                min: { value: 0, message: 'Total hours cannot be negative' }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </FormField>

          <FormField
            label="Hours on Type"
            error={errors.hoursOnType?.message}
          >
            <input
              type="number"
              min="0"
              {...register('hoursOnType', { 
                valueAsNumber: true,
                min: { value: 0, message: 'Hours on type cannot be negative' }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};