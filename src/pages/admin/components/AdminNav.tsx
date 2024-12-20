import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils/styles';

export const AdminNav = () => {
  const links = [
    { to: '/admin', label: 'Operations', end: true },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/settings', label: 'Settings' },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'py-4 px-1 border-b-2 font-medium text-sm',
                isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};