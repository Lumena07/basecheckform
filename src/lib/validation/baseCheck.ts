import { z } from 'zod';

const numericEvaluationItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  performance: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4)
  ]).optional(),
  comments: z.string().optional()
});

const competencyEvaluationItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  performance: z.union([
    z.literal('C'),
    z.literal('NC')
  ]).optional(),
  comments: z.string().optional()
});

export const baseCheckSchema = z.object({
  checkType: z.enum(['initial', 'recurrent']),
  date: z.string().min(1, 'Date is required'),
  
  // Candidate Details
  pilotId: z.string().min(1, 'Pilot selection is required'),
  baseCheckNumber: z.number().min(1).max(6),
  medicalExpiry: z.string().min(1, 'Medical expiry date is required'),
  totalHours: z.number().min(0, 'Total hours must be positive'),
  hoursOnType: z.number().min(0, 'Hours on type must be positive'),
  
  // Test Details
  previousCheckDate: z.string(),
  nextCheckDue: z.string().min(1, 'Next check due date is required'),
  departurePlace: z.string().min(1, 'Place of departure is required'),
  registration: z.string().min(1, 'Registration is required'),
  airborneTime: z.string().min(1, 'Airborne time is required'),
  landingTime: z.string().min(1, 'Landing time is required'),
  
  // Evaluation Sections
  groundEvaluation: z.array(competencyEvaluationItemSchema),
  preFlightOperations: z.array(numericEvaluationItemSchema),
  takeoffProcedures: z.array(numericEvaluationItemSchema),
  flightManeuvers: z.array(numericEvaluationItemSchema),
  instrumentFlying: z.array(numericEvaluationItemSchema),
  approachLanding: z.array(numericEvaluationItemSchema),
  nonNormalOperations: z.array(numericEvaluationItemSchema),
  airmanship: z.array(competencyEvaluationItemSchema),
  
  // Result
  result: z.enum(['competent', 'not_competent']),
  examinerName: z.string().min(1, 'Examiner name is required'),
  examinerLicense: z.string().min(1, 'Examiner license is required'),
  
  notes: z.string().optional(),
  logbookChecked: z.boolean().default(false),
  licenseChecked: z.boolean().default(false),
  briefingTime: z.string().min(1, "Briefing time is required"),
  flightTime: z.string().min(1, "Flight time is required"),
  numberOfLandings: z.number().min(0, "Number of landings is required"),
  debriefingTime: z.string().min(1, "Debriefing time is required"),
  aircraftType: z.enum(['C208B', 'Dash8-100', 'Dash8-200', 'PC12'], {
    required_error: 'Aircraft type is required'
  }),
});

export type BaseCheckFormData = z.infer<typeof baseCheckSchema>;