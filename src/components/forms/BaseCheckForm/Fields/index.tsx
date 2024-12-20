import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { PilotNameField } from './PilotNameField';
import { BaseCheckNumberField } from './BaseCheckNumberField';
import { DateField } from './DateField';
import { NotesField } from './NotesField';

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
      <PilotNameField
        register={register}
        error={errors.pilotName?.message}
      />
      <BaseCheckNumberField
        register={register}
        error={errors.baseCheckNumber?.message}
      />
      <DateField
        register={register}
        error={errors.date?.message}
      />
      <NotesField
        register={register}
        error={errors.notes?.message}
      />
    </div>
  );
};