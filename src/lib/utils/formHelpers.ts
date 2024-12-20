import { type BaseCheckFormData } from '@/lib/validation/baseCheck';
import { NORMAL_OPERATIONS } from '@/lib/constants/normalOperations';

export const updateFormItems = <T extends { id: string }>(
  items: T[],
  id: string,
  updates: Partial<T>
): T[] => {
  return items.map(item =>
    item.id === id ? { ...item, ...updates } : item
  );
};

export const mapOperationsForSubmit = (items: Array<any> = [], sectionPrefix?: string) => {
  return items.map(item => ({
    ...item,
    id: sectionPrefix ? `${sectionPrefix}_${item.id}` : item.id,
    completed: item.performance !== undefined && item.performance !== null,
  }));
};

export const initializeEvaluationItems = (items: ReadonlyArray<{ id: string; title: string }>) => {
  return items.map(item => ({
    id: item.id,
    title: item.title,
    completed: false,
    performance: undefined,
    comments: ''
  }));
};

export const getFormDefaultValues = (today: string, nextCheckDue: string): Partial<BaseCheckFormData> => ({
  checkType: 'recurrent' as const,
  date: today,
  nextCheckDue,
  baseCheckNumber: 1,
  groundEvaluation: initializeEvaluationItems(NORMAL_OPERATIONS.groundEvaluation),
  preFlightOperations: initializeEvaluationItems(NORMAL_OPERATIONS.preFlightOperations),
  takeoffProcedures: initializeEvaluationItems(NORMAL_OPERATIONS.takeoffProcedures),
  flightManeuvers: initializeEvaluationItems(NORMAL_OPERATIONS.flightManeuvers),
  instrumentFlying: initializeEvaluationItems(NORMAL_OPERATIONS.instrumentFlying),
  approachLanding: initializeEvaluationItems(NORMAL_OPERATIONS.approachLanding),
  airmanship: initializeEvaluationItems(NORMAL_OPERATIONS.airmanship),
  nonNormalOperations: [],
  logbookChecked: false,
  licenseChecked: false,
  briefingTime: '',
  flightTime: '',
  numberOfLandings: 0,
  debriefingTime: '',
});