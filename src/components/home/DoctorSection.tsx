
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import DoctorCard from '@/components/DoctorCard';

type Doctor = {
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
};

type DoctorSectionProps = {
  title: string;
  doctors: Doctor[];
  viewAllLink: string;
  scrollable?: boolean;
};

const DoctorSection = ({ title, doctors, viewAllLink, scrollable = false }: DoctorSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button 
          className="text-blue-600 text-sm font-medium flex items-center"
          onClick={() => navigate(viewAllLink)}
        >
          See all <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      {scrollable ? (
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-5 px-5 hide-scrollbar">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="min-w-[270px]">
              <DoctorCard {...doctor} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorSection;
