import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { useAuth } from '@/lib/hooks/useAuth';
import { db } from '@/lib/data/mockDatabase';
import { mapOperationsForSubmit } from '@/lib/utils/formHelpers';

export const useFormSubmit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (data: BaseCheckFormData) => {
    try {
      setFormError(null);
      console.log('Starting form submission in useFormSubmit');
      
      // Save base check
      const newBaseCheck = await db.baseChecks.create({
        pilotId: data.pilotId,
        baseCheckNumber: data.baseCheckNumber,
        checkType: data.checkType,
        date: data.date,
        completedBy: user!.id,
        status: 'completed',
        departurePlace: data.departurePlace,
        registration: data.registration,
        airborneTime: data.airborneTime,
        landingTime: data.landingTime,
        previousCheckDate: data.previousCheckDate,
        nextCheckDue: data.nextCheckDue,
        normalOperations: [
          ...mapOperationsForSubmit(data.groundEvaluation, 'ground'),
          ...mapOperationsForSubmit(data.preFlightOperations, 'preflight'),
          ...mapOperationsForSubmit(data.takeoffProcedures, 'takeoff'),
          ...mapOperationsForSubmit(data.flightManeuvers, 'maneuver'),
          ...mapOperationsForSubmit(data.instrumentFlying, 'instrument'),
          ...mapOperationsForSubmit(data.approachLanding, 'approach'),
          ...mapOperationsForSubmit(data.airmanship, 'airmanship')
        ],
        nonNormalOperations: mapOperationsForSubmit(data.nonNormalOperations, 'nonnormal'),
        result: data.result,
        examinerName: data.examinerName,
        examinerLicense: data.examinerLicense,
        notes: data.notes,
        medicalExpiry: data.medicalExpiry,
        totalHours: data.totalHours,
        hoursOnType: data.hoursOnType,
        logbookChecked: data.logbookChecked,
        licenseChecked: data.licenseChecked,
        briefingTime: Number(data.briefingTime),
        flightTime: Number(data.flightTime),
        numberOfLandings: Number(data.numberOfLandings),
        debriefingTime: Number(data.debriefingTime),
        aircraftType: data.aircraftType,
      });
      console.log('Base check created:', newBaseCheck);

      // Update pilot's last base check
      await db.pilots.update(data.pilotId, {
        lastBaseCheck: data.date
      });
      console.log('Pilot updated, navigating to /pilots');

      navigate('/pilots');
    } catch (error) {
      console.error('Error saving base check:', error);
      setFormError('Failed to save base check. Please try again.');
      throw error; // Make sure errors propagate
    }
  };

  return {
    formError,
    handleSubmit
  };
};