import React from 'react';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { useExaminers } from '@/lib/hooks/useExaminers';

interface ExaminerDetailsProps {
  register: UseFormRegister<BaseCheckFormData>;
  errors: Record<string, any>;
}

export const ExaminerDetails: React.FC<ExaminerDetailsProps> = ({ register, errors }) => {
  const { examiners } = useExaminers();
  const methods = useFormContext<BaseCheckFormData>();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Examiner Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Examiner"
          error={errors.examinerName?.message}
        >
          <select
            {...register('examinerName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select examiner</option>
            {examiners?.map(examiner => (
              <option key={examiner.id} value={examiner.name} data-license={examiner.licenseNumber}>
                {examiner.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Examiner License"
          error={errors.examinerLicense?.message}
        >
          <input
            type="text"
            {...register('examinerLicense', {
              // This ensures the field is always in sync with the form's state
              value: methods.watch('examinerLicense')
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </FormField>

        <div className="col-span-2">
          <FormField
            label="Notes"
            error={errors.notes?.message}
          >
            <textarea
              {...register('notes')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Add any additional notes here..."
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}; 