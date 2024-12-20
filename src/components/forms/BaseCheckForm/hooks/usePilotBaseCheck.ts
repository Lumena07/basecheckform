import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { addMonths, format } from 'date-fns';
import { type UseFormWatch, type UseFormSetValue } from 'react-hook-form';
import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { db } from '@/lib/data/mockDatabase';

export const usePilotBaseCheck = (
  watch: UseFormWatch<BaseCheckFormData>,
  setValue: UseFormSetValue<BaseCheckFormData>
) => {
  const pilotId = watch('pilotId');
  const checkDate = watch('date');

  const { data: pilot } = useQuery({
    queryKey: ['pilot', pilotId],
    queryFn: () => pilotId ? db.pilots.findById(pilotId) : null,
    enabled: !!pilotId
  });

  const { data: baseChecks } = useQuery({
    queryKey: ['pilotBaseChecks', pilotId],
    queryFn: () => pilotId ? db.baseChecks.findByPilotId(pilotId) : [],
    enabled: !!pilotId
  });

  useEffect(() => {
    if (pilot && baseChecks) {
      // Sort base checks by date in descending order
      const sortedChecks = [...baseChecks].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      const lastCheck = sortedChecks[0];
      
      if (lastCheck) {
        // Set previous check date
        setValue('previousCheckDate', lastCheck.date);
        
        // Set next base check number (max 6)
        const nextNumber = Math.min(lastCheck.baseCheckNumber + 1, 6);
        setValue('baseCheckNumber', nextNumber);

        // Set total hours and hours on type from pilot data
        setValue('totalHours', pilot.totalFlightHours);
        setValue('hoursOnType', pilot.totalFlightHours);
      } else {
        // If no previous checks, set base check number to 1
        setValue('baseCheckNumber', 1);
        setValue('previousCheckDate', '');
      }
    }
  }, [pilot, baseChecks, setValue]);

  // Update next check due date when check date changes
  useEffect(() => {
    if (checkDate) {
      const nextDueDate = addMonths(new Date(checkDate), 6);
      setValue('nextCheckDue', format(nextDueDate, 'yyyy-MM-dd'));
    }
  }, [checkDate, setValue]);

  return { 
    pilot,
    currentBaseCheck: baseChecks?.[0]?.baseCheckNumber 
      ? Math.min(baseChecks[0].baseCheckNumber + 1, 6) 
      : 1
  };
};