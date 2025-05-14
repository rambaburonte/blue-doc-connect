
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { allDoctors, searchSpecialties } from '@/data/doctorsData';
import SearchHeader from '@/components/search/SearchHeader';
import SearchFilters from '@/components/search/SearchFilters';
import SearchResults from '@/components/search/SearchResults';

const SearchDoctors = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [doctors, setDoctors] = useState(allDoctors);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Check URL parameters for initial filters
    const specialty = searchParams.get('specialty');
    const status = searchParams.get('status');
    const sort = searchParams.get('sort');
    
    if (specialty) {
      setSelectedSpecialty(specialty);
    }
    
    // Apply filters based on URL parameters
    let filteredDoctors = [...allDoctors];
    
    if (specialty && specialty !== 'all') {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
      );
    }
    
    if (status === 'live') {
      filteredDoctors = filteredDoctors.filter(doctor => 
        'isLive' in doctor && doctor.isLive === true
      );
    }
    
    if (sort === 'popular') {
      filteredDoctors.sort((a, b) => b.rating - a.rating);
    }
    
    setDoctors(filteredDoctors);
  }, [searchParams]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setDoctors(allDoctors);
      return;
    }
    
    const filteredResults = allDoctors.filter(doctor => {
      return (
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    
    setDoctors(filteredResults);
  };
  
  const filterBySpecialty = (specialty: string) => {
    setSelectedSpecialty(specialty);
    
    if (specialty === 'all') {
      setDoctors(allDoctors);
    } else {
      const filtered = allDoctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
      );
      setDoctors(filtered);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        <AppHeader showBack title="Find Doctors" />
        
        <div className="p-4">
          <SearchHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          
          <SearchFilters 
            specialties={searchSpecialties}
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={filterBySpecialty}
          />
          
          <SearchResults doctors={doctors} />
        </div>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default SearchDoctors;
