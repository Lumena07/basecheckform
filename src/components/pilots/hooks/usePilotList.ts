import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { db } from '@/lib/data/mockDatabase';

interface UsePilotListParams {
  pageSize?: number;
}

export const usePilotList = ({ pageSize = 10 }: UsePilotListParams = {}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'lastBaseCheck'>('lastBaseCheck');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const { data: pilots, isLoading } = useQuery({
    queryKey: ['pilots', search, sortBy, sortOrder],
    queryFn: async () => {
      const allPilots = await db.pilots.findAll();
      
      // Filter
      let filtered = allPilots;
      if (search) {
        const searchLower = search.toLowerCase();
        filtered = allPilots.filter(pilot => 
          pilot.name.toLowerCase().includes(searchLower) ||
          pilot.licenseNumber.toLowerCase().includes(searchLower)
        );
      }

      // Sort
      filtered.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        const modifier = sortOrder === 'asc' ? 1 : -1;
        return aValue > bValue ? modifier : -modifier;
      });

      return filtered;
    }
  });

  const totalPages = pilots ? Math.ceil(pilots.length / pageSize) : 0;
  const paginatedPilots = pilots?.slice((page - 1) * pageSize, page * pageSize);

  return {
    pilots: paginatedPilots,
    isLoading,
    page,
    totalPages,
    setPage,
    search,
    setSearch,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder
  };
};