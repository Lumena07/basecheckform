import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminNav } from './components/AdminNav';
import { OperationsManager } from './components/OperationsManager';
import { UserManager } from './components/UserManager';
import { Settings } from './components/Settings';

export const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <AdminNav />
      
      <Routes>
        <Route path="/" element={<OperationsManager />} />
        <Route path="/users" element={<UserManager />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};