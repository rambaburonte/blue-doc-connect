
import React from 'react';

interface SpecialtyFilterProps {
  specialties: { id: string; name: string }[];
  selectedSpecialty: string;
  onChange: (specialty: string) => void;
}

const SpecialtyFilter = ({ specialties, selectedSpecialty, onChange }: SpecialtyFilterProps) => {
  return (
    <div className="mb-5 overflow-x-auto">
      <div className="flex space-x-2">
        {specialties.map((specialty) => (
          <button
            key={specialty.id}
            className={`py-2 px-4 rounded-full whitespace-nowrap ${
              selectedSpecialty === specialty.id
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
            onClick={() => onChange(specialty.id)}
          >
            {specialty.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyFilter;
