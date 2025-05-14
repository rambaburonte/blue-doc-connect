
import React from 'react';
import { useNavigate } from 'react-router-dom';

type SpecialtyCardProps = {
  id: string;
  name: string;
  icon: string;
};

const SpecialtyCard = ({ id, name, icon }: SpecialtyCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/search?specialty=${id}`)}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default SpecialtyCard;
