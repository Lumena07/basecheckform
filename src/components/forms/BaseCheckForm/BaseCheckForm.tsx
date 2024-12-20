import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { baseCheckSchema, type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { Card } from '@/components/ui/Card';
import { TestDetails } from './sections/TestDetails';
import { GroundEvaluation } from './sections/GroundEvaluation';
import { PreFlightOperations } from './sections/PreFlightOperations';
import { TakeoffProcedures } from './sections/TakeoffProcedures';
import { FlightManeuvers } from './sections/FlightManeuvers';
import { InstrumentFlying } from './sections/InstrumentFlying';
import { ApproachLanding } from './sections/ApproachLanding';
import { NonNormalOperations } from './sections/NonNormalOperations';
import { Footer } from './sections/Footer';
import { useFormSubmit } from '@/lib/hooks/form/useFormSubmit';
import { getFormDefaultValues } from '@/lib/utils/formHelpers';
import { addMonths, format } from 'date-fns';

export const BaseCheckForm = () => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const nextCheckDue = format(addMonths(new Date(), 6), 'yyyy-MM-dd');
  const { handleSubmit, formError } = useFormSubmit();
  
  const methods = useForm<BaseCheckFormData>({
    resolver: zodResolver(baseCheckSchema),
    defaultValues: {
      ...getFormDefaultValues(today, nextCheckDue),
      examinerName: '',
      examinerLicense: ''
    },
    mode: 'onChange'
  });

  // Debug form state
  console.log('BaseCheckForm render:', {
    hasFormContext: !!methods,
    values: methods.getValues()
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-8">
        
        <GroundEvaluation
          items={methods.watch('groundEvaluation')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <PreFlightOperations
          items={methods.watch('preFlightOperations')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <TakeoffProcedures
          items={methods.watch('takeoffProcedures')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <FlightManeuvers
          items={methods.watch('flightManeuvers')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <InstrumentFlying
          items={methods.watch('instrumentFlying')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <ApproachLanding
          items={methods.watch('approachLanding')}
          onToggleItem={() => {}}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <NonNormalOperations
          items={methods.watch('nonNormalOperations')}
          baseCheckNumber={methods.watch('baseCheckNumber')}
          onUpdatePerformance={() => {}}
          onUpdateComments={() => {}}
        />

        <Card className="p-6">
          <Footer 
            register={methods.register}
            errors={methods.formState.errors}
            isSubmitting={methods.formState.isSubmitting}
          />
        </Card>

        {formError && (
          <div className="text-red-600 text-sm">{formError}</div>
        )}
      </form>
    </FormProvider>
  );
};