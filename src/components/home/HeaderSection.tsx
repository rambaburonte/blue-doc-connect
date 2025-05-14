
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bell } from 'lucide-react';
import SearchBar from '@/components/home/SearchBar';

type HeaderSectionProps = {
  userName: string;
  location: string;
};

const HeaderSection = ({ userName, location }: HeaderSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-blue-500 pt-12 pb-6 px-5 rounded-b-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-white text-xl font-semibold">Hi, {userName}</h1>
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

      <SearchBar />
    </div>
  );
};

export default HeaderSection;
