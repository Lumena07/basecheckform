import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addMonths } from 'date-fns';
import { baseCheckSchema, type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { getFormDefaultValues } from '@/lib/utils/formHelpers';
import { useFormSubmit } from '@/lib/hooks/form/useFormSubmit';
import { useFormHandlers } from '@/lib/hooks/form/useFormHandlers';
import { useNonNormalOperations } from './useNonNormalOperations';

export const useBaseCheckForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const form = useForm<BaseCheckFormData>({
    resolver: zodResolver(baseCheckSchema),
    defaultValues: getFormDefaultValues(
      new Date().toISOString().split('T')[0],
      addMonths(new Date(), 6).toISOString().split('T')[0]
    ),
    mode: 'onSubmit'
  });

  const { formError, handleSubmit: submitForm } = useFormSubmit();
  const handlers = useFormHandlers(form.setValue, form.getValues);

  // Initialize non-normal operations based on base check number
  useNonNormalOperations(form.watch, form.setValue);

  const onSubmit: SubmitHandler<BaseCheckFormData> = async (data) => {
    try {
      setSubmitError(null);
      
      if (!data.pilotId) {
        setSubmitError('Please select a pilot');
        return;
      }

      if (!data.examinerName || !data.examinerLicense) {
        setSubmitError('Examiner details are required');
        return;
      }

      console.log('Form data to submit:', {
        pilotId: data.pilotId,
        baseCheckNumber: data.baseCheckNumber,
        examiner: {
          name: data.examinerName,
          license: data.examinerLicense
        },
        result: data.result,
        sections: {
          groundEval: data.groundEvaluation?.length,
          nonNormal: data.nonNormalOperations?.length,
          // ... other sections
        }
      });

      await submitForm(data);
      console.log('Submit function completed - should navigate now');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
    }
  };

  return {
    form,
    formError: submitError || formError,
    onSubmit,
    ...handlers
  };
};