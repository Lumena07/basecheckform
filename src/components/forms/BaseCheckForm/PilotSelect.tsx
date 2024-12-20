import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { UseFormRegister } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { db } from '@/lib/data/mockDatabase';
import { FormField } from '@/components/ui/FormField';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface PilotSelectProps {
  register: UseFormRegister<BaseCheckFormData>;
  error?: string;
}

export const PilotSelect: React.FC<PilotSelectProps> = ({
  register,
  error
}) => {
  const { data: pilots, isLoading } = useQuery({
    queryKey: ['pilots'],
    queryFn: () => db.pilots.findAll()
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormField
      label="Select Pilot"
      error={error}
    >
      <select
        {...register('pilotId')}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Select a pilot...</option>
        {pilots?.map((pilot) => (
          <option key={pilot.id} value={pilot.id}>
            {pilot.name} - {pilot.licenseNumber}
          </option>
        ))}
      </select>
    </FormField>
  );
};