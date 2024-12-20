import React from 'react';
import { Card } from '@/components/ui/Card';
import { PilotList } from '@/components/pilots/PilotList';

export const PilotsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Pilots</h1>
      <Card>
        <PilotList />
      </Card>
    </div>
  );
};