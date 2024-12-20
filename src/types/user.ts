export type UserRole = 'admin' | 'training_captain' | 'user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}