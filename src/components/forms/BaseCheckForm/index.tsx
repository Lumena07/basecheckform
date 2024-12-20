import React from 'react';
import { Card } from '@/components/ui/Card';
import { useBaseCheckForm } from './hooks/useBaseCheckForm';
import { usePilotBaseCheck } from './hooks/usePilotBaseCheck';
import { Header } from './sections/Header';
import { CandidateDetails } from './sections/CandidateDetails';
import { TestDetails } from './sections/TestDetails';
import { CollapsibleSection } from './sections/CollapsibleSection';
import { GroundEvaluation } from './sections/GroundEvaluation';
import { PreFlightOperations } from './sections/PreFlightOperations';
import { TakeoffProcedures } from './sections/TakeoffProcedures';
import { FlightManeuvers } from './sections/FlightManeuvers';
import { InstrumentFlying } from './sections/InstrumentFlying';
import { ApproachLanding } from './sections/ApproachLanding';
import { NonNormalOperations } from './sections/NonNormalOperations';
import { Airmanship } from './sections/Airmanship';
import { Footer } from './sections/Footer';

export const BaseCheckForm: React.FC = () => {
  const {
    form,
    formError,
    onSubmit,
    handleToggleItem,
    handleUpdatePerformance,
    handleUpdateComments
  } = useBaseCheckForm();

  const { register, watch, setValue, formState: { errors, isSubmitting } } = form;

  // Get pilot's base check info
  const { currentBaseCheck } = usePilotBaseCheck(watch, setValue);

  // Get all section values from form
  const sections = watch([
    'groundEvaluation',
    'preFlightOperations',
    'takeoffProcedures',
    'flightManeuvers',
    'instrumentFlying',
    'approachLanding',
    'nonNormalOperations',
    'airmanship'
  ]);

  const baseCheckNumber = watch('baseCheckNumber');

  // Add near the top of the component
  const formValues = form.getValues();
  console.log('Current form values:', formValues);
  console.log('Form state:', {
    isDirty: form.formState.isDirty,
    isValid: form.formState.isValid,
    errors: form.formState.errors
  });

  // Add this debug logging
  console.log('Form validation errors:', {
    errors: form.formState.errors,
    values: form.getValues(),
    requiredFields: {
      pilotId: form.getValues('pilotId'),
      examinerName: form.getValues('examinerName'),
      examinerLicense: form.getValues('examinerLicense'),
      result: form.getValues('result'),
      date: form.getValues('date'),
      checkType: form.getValues('checkType')
    }
  });

  return (
    <Card className="p-6">
      <form 
        onSubmit={async (e) => {
          e.preventDefault();
          console.log('Form submission started');
          try {
            await form.handleSubmit(onSubmit)(e);
            console.log('Form handleSubmit completed');
          } catch (err) {
            console.error('Error in form submission:', err);
          }
        }} 
        className="space-y-8"
      >
        {formError && (
          <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md">
            {formError}
          </div>
        )}

        <CollapsibleSection title="Header Information" defaultOpen={true}>
          <Header register={register} errors={errors} />
        </CollapsibleSection>
        
        <CollapsibleSection title="Candidate Details" defaultOpen={true}>
          <CandidateDetails 
            register={register} 
            watch={watch} 
            errors={errors}
            currentBaseCheck={currentBaseCheck}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Test Details">
          <TestDetails register={register} errors={errors} />
        </CollapsibleSection>

        <CollapsibleSection title="Ground Evaluation">
          <GroundEvaluation
            items={sections[0]}
            onToggleItem={(id) => handleToggleItem('groundEvaluation', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('groundEvaluation', id, value as 'C' | 'NC')}
            onUpdateComments={(id, value) => handleUpdateComments('groundEvaluation', id, value)}
            error={errors.groundEvaluation?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Pre-Flight Operations">
          <PreFlightOperations
            items={sections[1]}
            onToggleItem={(id) => handleToggleItem('preFlightOperations', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('preFlightOperations', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('preFlightOperations', id, value)}
            error={errors.preFlightOperations?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Take-off Procedures">
          <TakeoffProcedures
            items={sections[2]}
            onToggleItem={(id) => handleToggleItem('takeoffProcedures', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('takeoffProcedures', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('takeoffProcedures', id, value)}
            error={errors.takeoffProcedures?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Flight Maneuvers">
          <FlightManeuvers
            items={sections[3]}
            onToggleItem={(id) => handleToggleItem('flightManeuvers', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('flightManeuvers', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('flightManeuvers', id, value)}
            error={errors.flightManeuvers?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Instrument Flying">
          <InstrumentFlying
            items={sections[4]}
            onToggleItem={(id) => handleToggleItem('instrumentFlying', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('instrumentFlying', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('instrumentFlying', id, value)}
            error={errors.instrumentFlying?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Approach and Landing">
          <ApproachLanding
            items={sections[5]}
            onToggleItem={(id) => handleToggleItem('approachLanding', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('approachLanding', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('approachLanding', id, value)}
            error={errors.approachLanding?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Non-Normal Operations">
          <NonNormalOperations
            baseCheckNumber={baseCheckNumber}
            items={sections[6]}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('nonNormalOperations', id, value as 1 | 2 | 3 | 4)}
            onUpdateComments={(id, value) => handleUpdateComments('nonNormalOperations', id, value)}
            error={errors.nonNormalOperations?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Airmanship">
          <Airmanship
            items={sections[7]}
            onToggleItem={(id) => handleToggleItem('airmanship', id)}
            onUpdatePerformance={(id, value) => handleUpdatePerformance('airmanship', id, value as 'C' | 'NC')}
            onUpdateComments={(id, value) => handleUpdateComments('airmanship', id, value)}
            error={errors.airmanship?.message}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Final Assessment" defaultOpen={true}>
          <Footer
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        </CollapsibleSection>
      </form>
    </Card>
  );
};