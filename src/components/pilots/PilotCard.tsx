import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { type Pilot } from '@/types/pilot';
import { db } from '@/lib/data/mockDatabase';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DownloadButton } from '@/components/forms/BaseCheckForm/DownloadButton';

interface PilotCardProps {
  pilot: Pilot;
}

export const PilotCard: React.FC<PilotCardProps> = ({ pilot }) => {
  const { data: baseChecks } = useQuery({
    queryKey: ['pilotBaseChecks', pilot.id],
    queryFn: () => db.baseChecks.findByPilotId(pilot.id)
  });

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{pilot.name}</h3>
          <p className="text-sm text-gray-600">License: {pilot.licenseNumber}</p>
          <p className="text-sm text-gray-600">
            Total Flight Hours: {pilot.totalFlightHours}
          </p>
          <p className="text-sm text-gray-600">
            Last Base Check: {format(new Date(pilot.lastBaseCheck), 'PP')}
          </p>
        </div>
        <Button variant="secondary">View Details</Button>
      </div>

      {baseChecks && baseChecks.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Recent Base Checks</h4>
          <div className="space-y-2">
            {baseChecks.map((check) => (
              <div
                key={check.id}
                className="text-sm p-2 bg-gray-50 rounded-md flex justify-between items-center"
              >
                <span>Base Check #{check.baseCheckNumber}</span>
                <span>{format(new Date(check.date), 'PP')}</span>
                <span className={`capitalize ${
                  check.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {check.status}
                </span>
                <DownloadButton baseCheck={check} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};