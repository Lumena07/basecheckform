import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@/pages/auth/LoginPage';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage';
import { BaseCheckFormPage } from '@/pages/baseCheck/BaseCheckFormPage';
import { PilotsPage } from '@/pages/pilots/PilotsPage';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute/index';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

export const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={
          <ProtectedRoute requiredRole="user">
            <DashboardPage />
          </ProtectedRoute>
        } />
        
        <Route path="/pilots" element={
          <ProtectedRoute requiredRole="user">
            <PilotsPage />
          </ProtectedRoute>
        } />
        
        <Route path="/base-check" element={
          <ProtectedRoute requiredRole="training_captain">
            <BaseCheckFormPage />
          </ProtectedRoute>
        } />
        
        <Route path="/admin/*" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboardPage />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};