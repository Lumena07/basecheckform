import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { type User } from '@/types/user';
import { getRedirectPath } from '@/lib/utils/auth';

export const useRedirectAfterLogin = (user: User | null) => {
  const navigate = useNavigate();
  const location = useLocation<{ from?: { pathname: string } }>();

  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname; // Ensure state is typed or handled
      const redirectPath = from || getRedirectPath(user.role);
      navigate(redirectPath, { replace: true });
    }
  }, [user, navigate, location.state]); // Ensure this closes properly
};
