import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/hooks/useAuth';
import { hasPermission } from '@/lib/utils/auth';
import { type UserRole } from '@/types/user';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: UserRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole
}) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user) {
    return <LoadingSpinner />;
  }

  if (!hasPermission(user.role, requiredRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};