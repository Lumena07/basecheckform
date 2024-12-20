import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import { type LoginFormData } from '@/lib/validation/auth';
import { mockAuthService } from '@/lib/services/mockAuth';

export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout: clearUser } = useAuthStore();
  const navigate = useNavigate();

  const login = useCallback(async (credentials: LoginFormData) => {
    try {
      const userData = await mockAuthService.login(credentials);
      setUser(userData);
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, [setUser]);

  const logout = useCallback(async () => {
    try {
      await mockAuthService.logout();
      clearUser();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }, [clearUser, navigate]);

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};