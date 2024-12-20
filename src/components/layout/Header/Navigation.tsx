import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { isAdmin, isTrainingCaptain } from '@/lib/utils/auth';
import { Button } from '@/components/ui/Button';

export const Navigation = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Link to="/login">
        <Button variant="secondary">Sign In</Button>
      </Link>
    );
  }

  return (
    <nav className="flex items-center space-x-6">
      <div className="hidden md:flex items-center space-x-6">
        <Link
          to="/"
          className="text-white hover:text-gray-200 transition-colors"
        >
          Dashboard
        </Link>

        <Link
          to="/pilots"
          className="text-white hover:text-gray-200 transition-colors"
        >
          Pilots
        </Link>

        {isTrainingCaptain(user.role) && (
          <Link
            to="/base-check"
            className="text-white hover:text-gray-200 transition-colors"
          >
            New Base Check
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link
            to="/admin"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Admin
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <UserCircle className="h-6 w-6 text-white" />
          <span className="text-white">{user.name}</span>
        </div>
        <Button variant="secondary" onClick={logout}>
          Sign Out
        </Button>
      </div>
    </nav>
  );
};