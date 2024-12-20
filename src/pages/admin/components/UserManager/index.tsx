import React from 'react';
import { Card } from '@/components/ui/Card';
import { UserList } from './UserList';
import { Button } from '@/components/ui/Button';

export const UserManager = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Management</h2>
          <Button>Add User</Button>
        </div>
        <UserList />
      </Card>
    </div>
  );
};