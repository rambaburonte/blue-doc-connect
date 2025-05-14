
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-white rounded-xl flex items-center p-3 mt-2"
      onClick={() => navigate('/search')}
    >
      <Search className="w-5 h-5 text-gray-400 mr-2" />
      <div className="text-gray-400">Search doctors, specialties...</div>
    </div>
  );
};

export default SearchBar;
