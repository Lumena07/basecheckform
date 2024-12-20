import { type BaseCheck } from '@/types/baseCheck';
import { type Pilot } from '@/types/pilot';

// Mock pilots data
let pilots = [
  {
    id: 'p1',
    name: 'John Smith',
    email: 'john.smith@airline.com',
    licenseNumber: 'PL123456',
    joinDate: '2020-01-01',
    lastBaseCheck: '2024-01-15',
    //totalFlightHours: 5000
  },
  {
    id: 'p2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@airline.com',
    licenseNumber: 'PL789012',
    joinDate: '2021-03-15',
    lastBaseCheck: '2024-02-01',
    //totalFlightHours: 3500
  }
];

// Mock base checks data
let baseChecks = [
  {
    id: 'bc1',
    pilotId: 'p1',
    baseCheckNumber: 1,
    date: '2024-01-15',
    completedBy: 'tc1',
    status: 'completed',
    normalOperations: [
      { id: 'no1', completed: true, title: 'Pre-Flight Checks' },
      { id: 'no2', completed: true, title: 'Engine Start' },
      { id: 'no3', completed: true, title: 'Taxi Procedure' }
    ],
    nonNormalOperations: [
      { id: 'nno1', completed: true, title: 'Engine Failure' },
      { id: 'nno2', completed: true, title: 'Evacuation' }
    ],
    notes: 'Excellent performance on all tasks'
  },
  {
    id: 'bc2',
    pilotId: 'p2',
    baseCheckNumber: 2,
    date: '2024-02-01',
    completedBy: 'tc1',
    status: 'completed',
    normalOperations: [
      { id: 'no1', completed: true, title: 'Pre-Flight Checks' },
      { id: 'no2', completed: true, title: 'Engine Start' },
      { id: 'no3', completed: false, title: 'Taxi Procedure' }
    ],
    nonNormalOperations: [
      { id: 'nno1', completed: true, title: 'Fire' },
      { id: 'nno2', completed: false, title: 'Hydraulic Issues' }
    ],
    notes: 'Needs improvement on hydraulic failure procedures'
  }
];

// Mock users data
const users = [
  {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@airline.com',
    password: '123',
    role: 'admin'
  },
  {
    id: 'tc1',
    name: 'Training Captain',
    email: 'captain@airline.com',
    password: '123',
    role: 'training_captain'
  }
];

// Add examiners data
let examiners = [
  {
    id: 'e1',
    name: 'John Smith',
    licenseNumber: 'EX123456',
    active: true
  },
  {
    id: 'e2',
    name: 'Emma Wilson',
    licenseNumber: 'EX789012',
    active: true
  },
  {
    id: 'e3',
    name: 'Michael Brown',
    licenseNumber: 'EX345678',
    active: true
  }
];

// Mock database operations
export const db = {
  // Base Check operations
  baseChecks: {
    findAll: async () => [...baseChecks],
    findByPilotId: async (pilotId: string) => 
      baseChecks.filter(check => check.pilotId === pilotId),
    findById: async (id: string) =>
      baseChecks.find(check => check.id === id),
    create: async (check: Omit<BaseCheck, 'id'>) => {
      const newCheck = { 
        ...check, 
        id: `bc${baseChecks.length + 1}`,
        notes: check.notes || ''  // Provide default empty string for notes
      };
      baseChecks = [...baseChecks, newCheck];
      return newCheck;
    },
    update: async (id: string, check: Partial<BaseCheck>) => {
      baseChecks = baseChecks.map(bc => 
        bc.id === id ? { ...bc, ...check } : bc
      );
      return baseChecks.find(bc => bc.id === id);
    }
  },

  // Pilot operations
  pilots: {
    findAll: async () => [...pilots],
    findById: async (id: string) =>
      pilots.find(pilot => pilot.id === id),
    findByEmail: async (email: string) =>
      pilots.find(pilot => pilot.email === email),
    update: async (id: string, data: Partial<Pilot>) => {
      pilots = pilots.map(pilot =>
        pilot.id === id ? { ...pilot, ...data } : pilot
      );
      return pilots.find(pilot => pilot.id === id);
    }
  },

  // User operations
  users: {
    findByCredentials: async (email: string, password: string) => {
      return users.find(user => user.email === email && user.password === password) || null;
    }
  },

  // Add examiner operations
  examiners: {
    findAll: async () => examiners.filter(e => e.active),
    findById: async (id: string) => examiners.find(e => e.id === id),
    findByName: async (name: string) => examiners.find(e => e.name === name)
  }
};