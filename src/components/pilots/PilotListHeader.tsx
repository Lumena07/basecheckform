import React from 'react';
import { Search } from 'lucide-react';

interface PilotListHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortBy: 'name' | 'lastBaseCheck';
  onSortByChange: (value: 'name' | 'lastBaseCheck') => void;
  sortOrder: 'asc' | 'desc';
  onSortOrderChange: (value: 'asc' | 'desc') => void;
}

export const PilotListHeader: React.FC<PilotListHeaderProps> = ({
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange
}) => {
  return (
    <div className="mb-4 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search pilots..."
          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex space-x-4">
        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as 'name' | 'lastBaseCheck')}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="lastBaseCheck">Sort by Last Base Check</option>
        </select>

        <button
          onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="px-3 py-2 border rounded-md hover:bg-gray-50"
        >
          {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
    </div>
  );
};