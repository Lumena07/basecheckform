import { type User } from '@/types/user';
import { type LoginFormData } from '@/lib/validation/auth';

// Mock users
const MOCK_USERS: Record<string, User> = {
  admin: {
    id: '1',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'admin'
  },
  trainingCaptain: {
    id: '2',
    name: 'Training Captain',
    email: 'captain@example.com',
    role: 'training_captain'
  }
};

// Mock credentials
const MOCK_CREDENTIALS: Record<string, { email: string; password: string }> = {
  admin: {
    email: 'admin@example.com',
    password: '12345678'
  },
  trainingCaptain: {
    email: 'captain@example.com',
    password: '12345678'
  }
};

export const mockAuthService = {
  login: async (credentials: LoginFormData): Promise<User> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check credentials for all users
    for (const [key, mockCred] of Object.entries(MOCK_CREDENTIALS)) {
      if (
        credentials.email === mockCred.email &&
        credentials.password === mockCred.password
      ) {
        return MOCK_USERS[key];
      }
    }

    throw new Error('Invalid credentials');
  },

  logout: async (): Promise<void> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};