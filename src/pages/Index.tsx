
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, MapPin, ChevronRight } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import DoctorCard from '@/components/DoctorCard';
import BottomNavigation from '@/components/BottomNavigation';

// Sample data
const specialties = [
  { id: 'dentist', name: 'Dentist', icon: '🦷' },
  { id: 'cardiology', name: 'Cardiology', icon: '❤️' },
  { id: 'pediatrics', name: 'Pediatrics', icon: '👶' },
  { id: 'dermatology', name: 'Dermatology', icon: '🧴' },
  { id: 'neurology', name: 'Neurology', icon: '🧠' },
  { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
];

const popularDoctors = [
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
];

const featureDoctors = [
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
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [location] = useState('Salt Lake City, Sector V');

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        {/* Header section */}
        <div className="bg-blue-500 pt-12 pb-6 px-5 rounded-b-3xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-white text-xl font-semibold">Hi, Abdullah</h1>
              <div className="flex items-center text-blue-50 text-sm mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                className="p-2 bg-white bg-opacity-20 rounded-full"
                onClick={() => navigate('/notifications')}
              >
                <Bell className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div 
            className="bg-white rounded-xl flex items-center p-3 mt-2"
            onClick={() => navigate('/search')}
          >
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <div className="text-gray-400">Search doctors, specialties...</div>
          </div>
        </div>

        <div className="px-5 py-6">
          {/* Welcome message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Find Your Doctor</h2>
            <p className="text-gray-600 mt-1">Book appointments with the best doctors</p>
          </div>

          {/* Specialty categories */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-3">
              {specialties.map((specialty) => (
                <div 
                  key={specialty.id}
                  className="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => navigate(`/search?specialty=${specialty.id}`)}
                >
                  <div className="text-2xl mb-2">{specialty.icon}</div>
                  <span className="text-sm font-medium text-gray-800">{specialty.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Doctors */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Live Doctors</h3>
              <button 
                className="text-blue-600 text-sm font-medium flex items-center"
                onClick={() => navigate('/search?status=live')}
              >
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-5 px-5 hide-scrollbar">
              {popularDoctors
                .filter(doctor => doctor.isLive)
                .map((doctor) => (
                  <div key={doctor.id} className="min-w-[270px]">
                    <DoctorCard {...doctor} />
                  </div>
                ))}
            </div>
          </div>

          {/* Popular Doctors */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Popular Doctors</h3>
              <button 
                className="text-blue-600 text-sm font-medium flex items-center"
                onClick={() => navigate('/search?sort=popular')}
              >
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {popularDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
          </div>

          {/* Feature Doctors */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Feature Doctors</h3>
              <button 
                className="text-blue-600 text-sm font-medium flex items-center"
                onClick={() => navigate('/search?featured=true')}
              >
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {featureDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
