import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { isAdmin, isTrainingCaptain } from '@/lib/utils/auth';
import { Button } from '@/components/ui/Button';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-800 p-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/pilots"
            className="block text-white hover:text-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pilots
          </Link>

          {isTrainingCaptain(user.role) && (
            <Link
              to="/base-check"
              className="block text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              New Base Check
            </Link>
          )}

          {isAdmin(user.role) && (
            <Link
              to="/admin"
              className="block text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          )}

          <Button
            variant="secondary"
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="w-full"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};