export const NON_NORMAL_OPERATIONS = {
  1: [
    { 
      id: 'engine-failure',
      title: 'Engine Failure',
      description: 'Handle single engine failure scenario',
      steps: [
        'Identify failed engine',
        'Secure engine',
        'Plan diversion'
      ]
    },
    { 
      id: 'evacuation',
      title: 'Emergency Evacuation',
      description: 'Execute emergency evacuation procedure',
      steps: [
        'Assess situation',
        'Initiate evacuation',
        'Manage passenger flow'
      ]
    }
  ],
  2: [
    {
      id: 'fire',
      title: 'Fire Emergency',
      description: 'Handle onboard fire emergency',
      steps: [
        'Locate fire source',
        'Execute fire drill',
        'Plan landing'
      ]
    },
    {
      id: 'hydraulic-failure',
      title: 'Hydraulic System Failure',
      description: 'Manage hydraulic system failures',
      steps: [
        'Identify affected system',
        'Apply alternate procedures',
        'Plan approach'
      ]
    }
  ],
  3: [
    {
      id: 'electrical-failure',
      title: 'Electrical System Failure',
      description: 'Handle electrical system malfunctions',
      steps: [
        'Identify failed components',
        'Load shed',
        'Use backup systems'
      ]
    },
    {
      id: 'fuel-leak',
      title: 'Fuel System Emergency',
      description: 'Manage fuel system emergency',
      steps: [
        'Confirm fuel leak',
        'Isolate leak',
        'Plan immediate landing'
      ]
    }
  ],
  4: [
    {
      id: 'landing-gear',
      title: 'Landing Gear Malfunction',
      description: 'Handle landing gear malfunction',
      steps: [
        'Attempt normal extension',
        'Use alternate extension',
        'Prepare for landing'
      ]
    }
  ],
  5: [
    {
      id: 'depressurization',
      title: 'Cabin Depressurization',
      description: 'Handle loss of cabin pressure',
      steps: [
        'Don oxygen masks',
        'Initiate emergency descent',
        'Divert to nearest airport'
      ]
    }
  ],
  6: [
    {
      id: 'dual-engine',
      title: 'Dual Engine Failure',
      description: 'Handle complete loss of thrust',
      steps: [
        'Attempt restart',
        'Manage glide',
        'Prepare for forced landing'
      ]
    }
  ]
} as const;