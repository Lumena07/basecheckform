import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';

interface NotificationSettingsForm {
  emailNotifications: boolean;
  reminderFrequency: 'daily' | 'weekly';
  notifyTrainingCaptains: boolean;
}

export const NotificationSettings = () => {
  const { register, handleSubmit } = useForm<NotificationSettingsForm>();

  const onSubmit = (data: NotificationSettingsForm) => {
    console.log('Notification settings:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>

      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register('emailNotifications')}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <span>Enable Email Notifications</span>
        </label>

        <FormField
          label="Reminder Frequency"
          error={undefined}
        >
          <select
            {...register('reminderFrequency')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </FormField>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register('notifyTrainingCaptains')}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <span>Notify Training Captains of Upcoming Checks</span>
        </label>
      </div>

      <Button type="submit">Save Notification Settings</Button>
    </form>
  );
};