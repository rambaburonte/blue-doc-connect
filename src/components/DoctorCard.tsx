
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';
import StatusBadge from './StatusBadge';

type DoctorCardProps = {
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

const DoctorCard = ({
  id,
  name,
  specialty,
  location,
  rating,
  reviews,
  experience,
  price,
  image,
  isLive = false,
  nextAvailable,
}: DoctorCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="doctor-card p-4 cursor-pointer" onClick={handleCardClick}>
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 rounded-xl object-cover" 
          />
          {isLive && (
            <StatusBadge type="live" className="absolute top-1 left-1" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-blue-800 font-medium text-sm">{specialty}</p>
          <div className="flex items-center text-gray-500 text-xs mt-1">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {experience} Years experience
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center space-x-1 text-sm">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>
                {nextAvailable ? `Next available: ${nextAvailable}` : 'Check availability'}
              </span>
            </div>
            <p className="font-semibold text-blue-600">${price}/hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
