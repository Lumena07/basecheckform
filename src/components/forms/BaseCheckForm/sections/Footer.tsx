import React from 'react';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { Button } from '@/components/ui/Button';
import { useExaminers } from '@/lib/hooks/useExaminers';

interface FooterProps {
  register: UseFormRegister<BaseCheckFormData>;
  errors: Record<string, any>;
  isSubmitting: boolean;
}

export const Footer: React.FC<FooterProps> = ({ register, errors, isSubmitting }) => {
  const { examiners} = useExaminers();
  const methods = useFormContext<BaseCheckFormData>();
  const [selectedExaminerName, setSelectedExaminerName] = React.useState('');
  const [selectedLicense, setSelectedLicense] = React.useState('');

  const handleExaminerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedExaminer = examiners.find(ex => ex.name === selectedName);
    
    if (selectedExaminer) {
      setSelectedExaminerName(selectedName);
      setSelectedLicense(selectedExaminer.licenseNumber);
      
      // Update form values with validation
      methods?.setValue('examinerName', selectedName, { shouldValidate: true });
      methods?.setValue('examinerLicense', selectedExaminer.licenseNumber, { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-6">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register('result')}
            value="competent"
            className="text-blue-600"
          />
          <span>Competent</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register('result')}
            value="not_competent"
            className="text-blue-600"
          />
          <span>Not Competent</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Examiner Name"
          error={errors.examinerName?.message}
        >
          <select
            {...register('examinerName')}
            onChange={handleExaminerChange}
            value={selectedExaminerName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select examiner</option>
            {examiners?.map(examiner => (
              <option key={examiner.id} value={examiner.name}>
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
            {...register('examinerLicense')}
            value={selectedLicense}
            onChange={(e) => setSelectedLicense(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </FormField>
      </div>

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

      <div className="flex justify-end space-x-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit Base Check
        </Button>
      </div>
    </div>
  );
};

