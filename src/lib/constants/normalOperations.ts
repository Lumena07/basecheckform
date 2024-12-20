export const DEFAULT_NORMAL_OPERATIONS = [
  { 
    title: 'Pre-Flight Checks',
    description: 'Complete all pre-flight safety checks',
    steps: [
      'Aircraft documentation check',
      'External inspection',
      'Cockpit preparation',
      'Safety equipment check'
    ]
  },
  { 
    title: 'Engine Start',
    description: 'Follow standard engine start procedure',
    steps: [
      'Pre-start checklist',
      'Engine start sequence',
      'Post-start checks',
      'Systems verification'
    ]
  },
  { 
    title: 'Taxi Procedure',
    description: 'Standard taxi and ground operations',
    steps: [
      'Brake check',
      'Ground maneuvering',
      'Speed control',
      'Taxi clearance compliance'
    ]
  }
];

export const NORMAL_OPERATIONS = {
  groundEvaluation: [
    {
      id: 'cars-knowledge',
      title: 'CARs Knowledge',
      description: 'Knowledge of Civil Aviation Regulations'
    },
    {
      id: 'aip-supplements',
      title: 'AIP and Supplements',
      description: 'Understanding of Aeronautical Information Publication'
    },
    {
      id: 'notams',
      title: 'NOTAMs',
      description: 'Knowledge of Notice to Airmen'
    },
    {
      id: 'flight-planning',
      title: 'Flight Planning',
      description: 'Ability to plan flights effectively'
    },
    {
      id: 'performance-calc',
      title: 'Performance Calculations',
      description: 'Accurate performance calculations'
    }
  ],
  preFlightOperations: [
    {
      id: 'external-inspection',
      title: 'External Inspection',
      description: 'Complete aircraft external inspection'
    },
    {
      id: 'cockpit-prep',
      title: 'Cockpit Preparation',
      description: 'Proper cockpit setup and checks'
    },
    {
      id: 'engine-start',
      title: 'Engine Start Procedures',
      description: 'Correct engine start sequence'
    },
    {
      id: 'taxi-procedures',
      title: 'Taxi Procedures',
      description: 'Safe and efficient taxi operations'
    }
  ],
  takeoffProcedures: [
    {
      id: 'normal-takeoff',
      title: 'Normal Take-off',
      description: 'Standard take-off procedure'
    },
    {
      id: 'crosswind-takeoff',
      title: 'Crosswind Take-off',
      description: 'Take-off in crosswind conditions'
    },
    {
      id: 'short-field-takeoff',
      title: 'Short Field Take-off',
      description: 'Take-off from short runway'
    },
    {
      id: 'rejected-takeoff',
      title: 'Rejected Take-off',
      description: 'Proper abort procedures'
    }
  ],
  flightManeuvers: [
    {
      id: 'steep-turns',
      title: 'Steep Turns',
      description: 'Accurate steep turn execution'
    },
    {
      id: 'slow-flight',
      title: 'Slow Flight',
      description: 'Control at minimum speeds'
    },
    {
      id: 'stall-recovery',
      title: 'Stall Recovery',
      description: 'Proper stall recovery technique'
    },
    {
      id: 'unusual-attitudes',
      title: 'Unusual Attitude Recovery',
      description: 'Recovery from unusual attitudes'
    }
  ],
  instrumentFlying: [
    {
      id: 'rnav-approach',
      title: 'RNAV Approach',
      description: 'Area navigation approach'
    },
    {
      id: 'ils-approach',
      title: 'ILS Approach',
      description: 'Instrument landing system approach'
    },
    {
      id: 'vor-approach',
      title: 'VOR/DME Approach',
      description: 'VOR approach procedures'
    },
    {
      id: 'holding',
      title: 'Holding Procedures',
      description: 'Standard holding patterns'
    }
  ],
  approachLanding: [
    {
      id: 'normal-landing',
      title: 'Normal Landing',
      description: 'Standard landing procedure'
    },
    {
      id: 'crosswind-landing',
      title: 'Crosswind Landing',
      description: 'Landing in crosswind conditions'
    },
    {
      id: 'short-field-landing',
      title: 'Short Field Landing',
      description: 'Landing on short runway'
    },
    {
      id: 'go-around',
      title: 'Go-around',
      description: 'Proper go-around procedure'
    }
  ],
  airmanship: [
    {
      id: 'situational-awareness',
      title: 'Situational Awareness',
      description: 'Maintaining awareness of all factors'
    },
    {
      id: 'decision-making',
      title: 'Decision Making',
      description: 'Sound aeronautical decision making'
    },
    {
      id: 'crew-resource-mgmt',
      title: 'Crew Resource Management',
      description: 'Effective use of all resources'
    },
    {
      id: 'communication',
      title: 'Communication',
      description: 'Clear and effective communication'
    }
  ]
} as const;