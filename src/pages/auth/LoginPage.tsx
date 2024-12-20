import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/validation/auth';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRedirectAfterLogin } from '@/lib/hooks/useRedirectAfterLogin';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';

export const LoginPage = () => {
  const { login, user } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  useRedirectAfterLogin(user);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      setError('root', {
        message: 'Invalid email or password'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold">Sign in</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {errors.root && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md">
              {errors.root.message}
            </div>
          )}

          <FormField
            label="Email"
            error={errors.email?.message}
          >
            <input
              type="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </FormField>

          <FormField
            label="Password"
            error={errors.password?.message}
          >
            <input
              type="password"
              {...register('password')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </FormField>

          <Button
            type="submit"
            isLoading={isSubmitting}
            className="w-full"
          >
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
};