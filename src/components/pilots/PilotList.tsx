import React from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { PilotCard } from './PilotCard';
import { PilotListHeader } from './PilotListHeader';
import { PilotListPagination } from './PilotListPagination';
import { usePilotList } from './hooks/usePilotList';

export const PilotList = () => {
  const {
    pilots,
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
  } = usePilotList({ pageSize: 5 });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <PilotListHeader
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />

      <div className="space-y-4">
        {pilots?.map((pilot) => (
          <PilotCard key={pilot.id} pilot={pilot} />
        ))}

        {pilots?.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No pilots found matching your search criteria
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <PilotListPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};