import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { DashboardStats } from './components/DashboardStats';

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <DashboardStats />
    </div>
  );
};