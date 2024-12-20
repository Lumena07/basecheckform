import React from 'react';
import { Card } from '@/components/ui/Card';
import { SystemSettings } from './SystemSettings';
import { NotificationSettings } from './NotificationSettings';

export const Settings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-6">System Settings</h2>
        <div className="space-y-8">
          <SystemSettings />
          <NotificationSettings />
        </div>
      </Card>
    </div>
  );
};