import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';

interface SystemSettingsForm {
  baseCheckValidityDays: number;
  reminderDays: number;
  autoArchiveDays: number;
}

export const SystemSettings = () => {
  const { register, handleSubmit } = useForm<SystemSettingsForm>();

  const onSubmit = (data: SystemSettingsForm) => {
    console.log('System settings:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="Base Check Validity (days)"
        error={undefined}
      >
        <input
          type="number"
          {...register('baseCheckValidityDays')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField
        label="Reminder Days Before Expiry"
        error={undefined}
      >
        <input
          type="number"
          {...register('reminderDays')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField
        label="Auto-Archive After (days)"
        error={undefined}
      >
        <input
          type="number"
          {...register('autoArchiveDays')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <Button type="submit">Save Settings</Button>
    </form>
  );
};