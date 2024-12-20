
import { BaseCheckForm } from '@/components/forms/BaseCheckForm';

export const BaseCheckFormPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">New Base Check</h1>
      <BaseCheckForm />
    </div>
  );
};