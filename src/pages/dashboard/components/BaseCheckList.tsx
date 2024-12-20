import React from 'react';
import { Card } from '@/components/ui/Card';
import { useBaseChecks } from '@/lib/hooks/useBaseChecks';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const BaseCheckList = () => {
  const { data: baseChecks, isLoading } = useBaseChecks();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Recent Base Checks</h2>
      <div className="space-y-4">
        {baseChecks?.map((check) => (
          <div
            key={check.id}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{check.pilotId}</h3>
                <p className="text-sm text-gray-600">
                  Base Check #{check.baseCheckNumber}
                </p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(check.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};