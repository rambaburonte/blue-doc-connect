
import React from 'react';

type StatusBadgeProps = {
  type: 'live' | 'available' | 'full' | 'waiting';
  className?: string;
};

const StatusBadge = ({ type, className = '' }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (type) {
      case 'live':
        return 'status-live';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getContent = () => {
    switch (type) {
      case 'live':
        return 'LIVE';
      case 'available':
        return 'Available';
      case 'full':
        return 'Fully Booked';
      case 'waiting':
        return 'Waiting List';
      default:
        return '';
    }
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusStyles()} ${className}`}>
      {getContent()}
    </span>
  );
};

export default StatusBadge;
