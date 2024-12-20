import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@store/useAuthStore';
import { hasPermission } from '@lib/utils/auth';
import { type UserRole } from '@types/user';