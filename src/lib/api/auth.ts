import { type User } from '@types/user';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const logout = async (): Promise<void> => {
  const response = await fetch('/api/logout', {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await fetch('/api/me');

  if (!response.ok) {
    throw new Error('Failed to fetch current user');
  }

  return response.json();
};