
import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  location?: string;
}

const SearchHeader = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  showFilters,
  setShowFilters,
  location = "Salt Lake City, Sector V"
}: SearchHeaderProps) => {
  return (
    <div>
      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input-search pl-10 pr-10"
            placeholder="Search doctors, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Filter className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
      
      {/* Current location */}
      <div className="flex items-center mb-5 text-sm text-gray-600">
        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
        <span>Showing results near {location}</span>
      </div>
    </div>
  );
};

export default SearchHeader;
