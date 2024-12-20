import React from 'react';
import { Card } from '@/components/ui/Card';
import { useStats } from '@/lib/hooks/useStats';

export const DashboardStats = () => {
  const { data: stats, isLoading } = useStats();

  if (isLoading) {
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="h-24 animate-pulse bg-gray-100" />
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Total Base Checks</h3>
          <p className="mt-2 text-3xl font-semibold">{stats?.totalChecks ?? 0}</p>
        </div>
      </Card>
      
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Completed This Month</h3>
          <p className="mt-2 text-3xl font-semibold">{stats?.monthlyChecks ?? 0}</p>
        </div>
      </Card>
      
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Pending Reviews</h3>
          <p className="mt-2 text-3xl font-semibold">{stats?.pendingReviews ?? 0}</p>
        </div>
      </Card>
    </div>
  );
};