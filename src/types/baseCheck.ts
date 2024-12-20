export interface BaseCheck {
  id: string;
  pilotId: string;
  baseCheckNumber: number;
  date: string;
  checkType: 'initial' | 'recurrent';
  completedBy: string;
  status: string;
  
  // Test Details
  departurePlace: string;
  registration: string;
  airborneTime: string;
  landingTime: string;
  previousCheckDate: string;
  nextCheckDue: string;

  // Evaluation Sections with Performance
  normalOperations: Array<{
    id: string;
    title: string;
    performance?: 1 | 2 | 3 | 4 | 'C' | 'NC';
    comments?: string;
    completed: boolean;
  }>;
  
  nonNormalOperations: Array<{
    id: string;
    title: string;
    performance?: 1 | 2 | 3 | 4;
    comments?: string;
    completed: boolean;
  }>;

  // Result Details
  result: 'competent' | 'not_competent';
  examinerName: string;
  examinerLicense: string;
  notes?: string;

  medicalExpiry: string;
  totalHours: number;
  hoursOnType: number;

  logbookChecked: boolean;
  licenseChecked: boolean;
  briefingTime: number;
  flightTime: number;
  numberOfLandings: number;
  debriefingTime: number;

  aircraftType: 'C208B' | 'Dash8-100' | 'Dash8-200' | 'PC12';
}