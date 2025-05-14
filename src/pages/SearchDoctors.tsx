
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import DoctorCard from '@/components/DoctorCard';
import BottomNavigation from '@/components/BottomNavigation';

// Sample data for doctors
const allDoctors = [
  {
    id: '1',
    name: 'Dr. Shruti Kedia',
    specialty: 'Dentist',
    location: 'Upasana Dental Clinic, salt lake',
    rating: 4.8,
    reviews: 69,
    experience: 7,
    price: 28,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    isLive: true,
    nextAvailable: '10:00 AM tomorrow',
  },
  {
    id: '2',
    name: 'Dr. Truluck Nik',
    specialty: 'Medicine Specialist',
    location: 'Apollo Hospital, Park Street',
    rating: 4.6,
    reviews: 78,
    experience: 9,
    price: 35,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    nextAvailable: '12:00 AM tomorrow',
  },
  {
    id: '3',
    name: 'Dr. Tranquilli',
    specialty: 'Patheology Specialist',
    location: 'City Care Hospital, Newtown',
    rating: 4.3,
    reviews: 45,
    experience: 5,
    price: 30,
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    isLive: true,
  },
  {
    id: '4',
    name: 'Dr. Johan Smith',
    specialty: 'Specialist Cardiologist',
    location: 'Heart Care Centre, Lake Town',
    rating: 4.9,
    reviews: 87,
    experience: 12,
    price: 40,
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    nextAvailable: '11:00 AM tomorrow',
  },
  {
    id: '5',
    name: 'Dr. Mistry Brick',
    specialty: 'Specialist Dentist',
    location: 'Dental Care, Salt Lake',
    rating: 4.7,
    reviews: 62,
    experience: 6,
    price: 25,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '6',
    name: 'Dr. Ether Wall',
    specialty: 'Specialist Cancer',
    location: 'Medical College Hospital, Kolkata',
    rating: 4.5,
    reviews: 59,
    experience: 15,
    price: 45,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '7',
    name: 'Dr. Blessing',
    specialty: 'Dentist Specialist',
    location: 'City Dental Hospital, Park Street',
    rating: 4.2,
    reviews: 38,
    experience: 3,
    price: 22,
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
  }
];

// Filter specialties
const specialties = [
  { id: 'all', name: 'All' },
  { id: 'dentist', name: 'Dentist' },
  { id: 'cardiology', name: 'Cardiology' },
  { id: 'medicine', name: 'Medicine' },
  { id: 'pathology', name: 'Pathology' },
  { id: 'cancer', name: 'Cancer' },
];

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
    const featured = searchParams.get('featured');
    
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
      filteredDoctors = filteredDoctors.filter(doctor => doctor.isLive);
    }
    
    if (sort === 'popular') {
      filteredDoctors.sort((a, b) => b.rating - a.rating);
    }
    
    // For demo purposes, consider all doctors as featured if the featured param exists
    
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
          
          {/* Specialty filters */}
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
                  onClick={() => filterBySpecialty(specialty.id)}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Current location */}
          <div className="flex items-center mb-5 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            <span>Showing results near Salt Lake City, Sector V</span>
          </div>
          
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
        
        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default SearchDoctors;
