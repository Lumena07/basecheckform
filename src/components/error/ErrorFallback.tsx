import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

interface ErrorFallbackProps {
  error: Error | null;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};