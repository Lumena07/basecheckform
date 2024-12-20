interface EvaluationItem {
  id: string;
  title: string;
  completed: boolean;
  performance?: 1 | 2 | 3 | 4 | 'C' | 'NC';
  comments?: string;
}

const GROUND_EVALUATION_ITEMS = [
  'CARs Knowledge',
  'AIP and Supplements',
  'NOTAMs',
  'Flight Planning',
  'Performance Calculations',
  'Weight and Balance',
  'MEL/CDL Knowledge'
];

const PRE_FLIGHT_OPERATIONS = [
  'External Inspection',
  'Cockpit Preparation',
  'Engine Start Procedures',
  'Taxi Procedures',
  'Pre-Take-off Checks'
];

const TAKEOFF_PROCEDURES = [
  'Normal Take-off',
  'Crosswind Take-off',
  'Short Field Take-off',
  'Rejected Take-off',
  'Engine Failure During Take-off'
];

const FLIGHT_MANEUVERS = [
  'Steep Turns',
  'Slow Flight',
  'Stall Recovery',
  'Unusual Attitude Recovery',
  'Navigation Procedures'
];

const INSTRUMENT_FLYING = [
  'RNAV Approach',
  'ILS Approach',
  'VOR/DME Approach',
  'Holding Procedures',
  'Missed Approach Procedures'
];

const APPROACH_LANDING = [
  'Normal Landing',
  'Crosswind Landing',
  'Short Field Landing',
  'Go-around',
  'Flapless Landing'
];

const AIRMANSHIP = [
  'Situational Awareness',
  'Decision Making',
  'Crew Resource Management',
  'Communication',
  'Flight Management'
];

const sections = {
  groundEvaluation: GROUND_EVALUATION_ITEMS,
  preFlightOperations: PRE_FLIGHT_OPERATIONS,
  takeoffProcedures: TAKEOFF_PROCEDURES,
  flightManeuvers: FLIGHT_MANEUVERS,
  instrumentFlying: INSTRUMENT_FLYING,
  approachLanding: APPROACH_LANDING,
  airmanship: AIRMANSHIP
} as const;

export const getDefaultSectionItems = (section: keyof typeof sections): EvaluationItem[] => {
  const items = sections[section];
  if (!items) return [];

  return items.map(title => ({
    id: `${section}-${title.toLowerCase().replace(/\s+/g, '-')}`,
    title,
    completed: false
  }));
};