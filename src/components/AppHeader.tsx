
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Bell, Search } from 'lucide-react';

type AppHeaderProps = {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showNotification?: boolean;
  transparent?: boolean;
  onSearchClick?: () => void;
};

const AppHeader = ({
  title,
  showBack = false,
  showSearch = false,
  showNotification = false,
  transparent = false,
  onSearchClick,
}: AppHeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={`px-4 py-3 flex items-center justify-between sticky top-0 z-10 ${transparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="flex items-center">
        {showBack && (
          <button
            onClick={handleBackClick}
            className="p-1 rounded-full hover:bg-gray-100 mr-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {title && <h1 className="font-semibold text-lg">{title}</h1>}
      </div>
      <div className="flex items-center space-x-3">
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Search className="w-5 h-5" />
          </button>
        )}
        {showNotification && (
          <button
            onClick={() => navigate('/notifications')}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
