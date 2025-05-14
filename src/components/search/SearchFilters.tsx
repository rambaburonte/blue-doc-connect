
import React from 'react';
import SpecialtyFilter from './SpecialtyFilter';

interface SearchFiltersProps {
  specialties: { id: string; name: string }[];
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
}

const SearchFilters = ({
  specialties,
  selectedSpecialty,
  onSpecialtyChange,
}: SearchFiltersProps) => {
  return (
    <div>
      <SpecialtyFilter 
        specialties={specialties}
        selectedSpecialty={selectedSpecialty}
        onChange={onSpecialtyChange}
      />
    </div>
  );
};

export default SearchFilters;
