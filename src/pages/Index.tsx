
import React, { useState } from 'react';
import HeaderSection from '@/components/home/HeaderSection';
import SpecialtiesGrid from '@/components/home/SpecialtiesGrid';
import DoctorSection from '@/components/home/DoctorSection';
import BottomNavigation from '@/components/BottomNavigation';
import { specialties, popularDoctors, featureDoctors } from '@/data/doctorsData';

const Index = () => {
  const [location] = useState('Salt Lake City, Sector V');

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        {/* Header section */}
        <HeaderSection userName="Abdullah" location={location} />

        <div className="px-5 py-6">
          {/* Welcome message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Find Your Doctor</h2>
            <p className="text-gray-600 mt-1">Book appointments with the best doctors</p>
          </div>

          {/* Specialty categories */}
          <SpecialtiesGrid specialties={specialties} />

          {/* Live Doctors */}
          <DoctorSection 
            title="Live Doctors"
            doctors={popularDoctors.filter(doctor => doctor.isLive)}
            viewAllLink="/search?status=live"
            scrollable={true}
          />

          {/* Popular Doctors */}
          <DoctorSection 
            title="Popular Doctors"
            doctors={popularDoctors}
            viewAllLink="/search?sort=popular"
          />

          {/* Feature Doctors */}
          <DoctorSection 
            title="Feature Doctors"
            doctors={featureDoctors}
            viewAllLink="/search?featured=true"
          />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
