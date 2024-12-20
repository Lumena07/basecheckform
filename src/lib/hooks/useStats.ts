import { useQuery } from '@tanstack/react-query';

interface DashboardStats {
  totalChecks: number;
  monthlyChecks: number;
  pendingReviews: number;
}

const fetchStats = async (): Promise<DashboardStats> => {
  const response = await fetch('/api/stats');
  if (!response.ok) {
    throw new Error('Failed to fetch stats');
  }
  return response.json();
};

export const useStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchStats,
  });
};