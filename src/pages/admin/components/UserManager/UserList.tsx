import React from 'react';
import { useUsers } from '@/lib/hooks/useUsers';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Button } from '@/components/ui/Button';

export const UserList = () => {
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-4">
      {users?.map((user) => (
        <div
          key={user.id}
          className="p-4 border rounded-lg hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <span className="inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full bg-gray-100">
                {user.role}
              </span>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};