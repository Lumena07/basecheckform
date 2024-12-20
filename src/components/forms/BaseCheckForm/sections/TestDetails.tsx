import React from 'react';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';

interface TestDetailsProps {
  register: UseFormRegister<BaseCheckFormData>;
  errors: Record<string, any>;
}

export const TestDetails: React.FC<TestDetailsProps> = ({ register, errors }) => {
  const form = useFormContext<BaseCheckFormData>();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Test/Check Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Document Checks */}
        <div className="space-y-2 col-span-2">
          <h4 className="font-medium">Document Checks</h4>
          <div className="flex space-x-4">
            <FormField label="Logbook">
              <input
                type="checkbox"
                {...register('logbookChecked')}
                id="logbook"
                className="rounded border-gray-300"
              />
            </FormField>
            <FormField label="License">
              <input
                type="checkbox"
                {...register('licenseChecked')}
                id="license"
                className="rounded border-gray-300"
              />
            </FormField>
          </div>
        </div>

        {/* Test Times */}
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <FormField
            label="Briefing Time (mins)"
            error={errors.briefingTime?.message}
          >
            <input
              type="number"
              {...register('briefingTime')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              placeholder="Minutes"
            />
          </FormField>

          <FormField
            label="Flight Time (mins)"
            error={errors.flightTime?.message}
          >
            <input
              type="number"
              {...register('flightTime')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              placeholder="Minutes"
            />
          </FormField>

          <FormField
            label="No. of Landings"
            error={errors.numberOfLandings?.message}
          >
            <input
              type="number"
              {...register('numberOfLandings', { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </FormField>

          <FormField
            label="Debriefing Time (mins)"
            error={errors.debriefingTime?.message}
          >
            <input
              type="number"
              {...register('debriefingTime')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              placeholder="Minutes"
            />
          </FormField>
        </div>

        {/* Existing Fields */}
        <FormField
          label="Place of Departure"
          error={errors.placeOfDeparture?.message}
        >
          <input
            type="text"
            {...register('departurePlace')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="ICAO code"
          />
        </FormField>

        <FormField
          label="Aircraft Registration"
          error={errors.registration?.message}
        >
          <input
            type="text"
            {...register('registration')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Registration number"
          />
        </FormField>

        <FormField
          label="Airborne Time"
          error={errors.airborneTime?.message}
        >
          <input
            type="time"
            {...register('airborneTime')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </FormField>

        <FormField
          label="Landing Time"
          error={errors.landingTime?.message}
        >
          <input
            type="time"
            {...register('landingTime')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </FormField>

        <FormField
          label="Previous Check Date"
          error={errors.previousCheckDate?.message}
        >
          <input
            type="date"
            {...register('previousCheckDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled
          />
        </FormField>

        <FormField
          label="Next Check Due"
          error={errors.nextCheckDue?.message}
        >
          <input
            type="date"
            {...register('nextCheckDue')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled
          />
        </FormField>

        <FormField
          label="Aircraft Type"
          error={errors.aircraftType?.message}
        >
          <select
            {...register('aircraftType')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select aircraft type</option>
            <option value="C208B">C208B</option>
            <option value="Dash8-100">Dash8-100</option>
            <option value="Dash8-200">Dash8-200</option>
            <option value="PC12">PC12</option>
          </select>
        </FormField>
      </div>
    </div>
  );
};