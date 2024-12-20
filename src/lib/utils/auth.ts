import { type UserRole } from '@/types/user';

const ROLE_HIERARCHY: Record<UserRole, number> = {
  admin: 3,
  training_captain: 2,
  user: 1,
} as const;

export const hasPermission = (userRole: UserRole | undefined, requiredRole: UserRole): boolean => {
  if (!userRole) return false;
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
};

export const getRoleLevel = (role: UserRole): number => {
  return ROLE_HIERARCHY[role];
};

export const isAdmin = (role?: UserRole): boolean => {
  return role === 'admin';
};

export const isTrainingCaptain = (role?: UserRole): boolean => {
  return role === 'training_captain' || isAdmin(role);
};

export const getRedirectPath = (role: UserRole): string => {
  switch (role) {
    case 'admin':
      return '/admin';
    case 'training_captain':
      return '/base-check';
    default:
      return '/';
  }
};