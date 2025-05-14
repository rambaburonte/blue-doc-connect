
import React from 'react';
import DoctorCard from '@/components/DoctorCard';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  experience: number;
  price: number;
  image: string;
  isLive?: boolean;
  nextAvailable?: string;
}

interface SearchResultsProps {
  doctors: Doctor[];
}

const SearchResults = ({ doctors }: SearchResultsProps) => {
  return (
    <div>
      {/* Results count */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm">Found {doctors.length} doctors</p>
      </div>
      
      {/* Doctor list */}
      <div className="space-y-4">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No doctors found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
