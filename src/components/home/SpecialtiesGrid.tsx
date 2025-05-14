
import React from 'react';
import SpecialtyCard from '@/components/home/SpecialtyCard';

type Specialty = {
  id: string;
  name: string;
  icon: string;
};

type SpecialtiesGridProps = {
  specialties: Specialty[];
};

const SpecialtiesGrid = ({ specialties }: SpecialtiesGridProps) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 gap-3">
        {specialties.map((specialty) => (
          <SpecialtyCard 
            key={specialty.id}
            id={specialty.id}
            name={specialty.name}
            icon={specialty.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesGrid;
