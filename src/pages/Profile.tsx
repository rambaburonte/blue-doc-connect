
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Settings, LogOut, Camera, User, Phone, Mail, Calendar, Globe, MessageSquare } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleLogout = () => {
    // Here would be logout logic
    navigate('/login');
  };

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        <AppHeader title="Profile" showBack />
        
        <div className="p-4">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-3">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full shadow-md">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-semibold">Abdullah Mamun</h2>
            <p className="text-gray-500 text-sm">Set up your profile to connect your doctor with better impression.</p>
          </div>
          
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">Personal Information</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <User className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">Abdullah Mamun</p>
                </div>
              </div>
              
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Date of birth</p>
                  <p className="font-medium">DD/MM/YYYY</p>
                </div>
              </div>
              
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+8801000000000</p>
                </div>
              </div>
              
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">itsmemamun1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Salt Lake City, Sector V</p>
                </div>
              </div>
              
              <div className="flex items-center p-4">
                <div className="w-10 flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Languages</p>
                  <p className="font-medium">English</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Settings */}
          <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">Settings</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              <button 
                className="flex items-center w-full p-4 text-left hover:bg-gray-50"
                onClick={() => navigate('/account-settings')}
              >
                <Settings className="w-5 h-5 text-blue-500 mr-3" />
                <span>Account settings</span>
              </button>
              
              <button 
                className="flex items-center w-full p-4 text-left hover:bg-gray-50"
                onClick={() => navigate('/change-password')}
              >
                <Settings className="w-5 h-5 text-blue-500 mr-3" />
                <span>Change Password</span>
              </button>
              
              <button 
                className="flex items-center w-full p-4 text-left text-red-500 hover:bg-red-50"
                onClick={() => setShowLogoutModal(true)}
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Logout Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-5 w-full max-w-xs">
              <h3 className="text-lg font-semibold mb-3">Are you sure you want to logout?</h3>
              
              <div className="flex space-x-3 mt-5">
                <button 
                  className="flex-1 py-2 border border-gray-300 rounded-lg"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-2 bg-red-500 text-white rounded-lg"
                  onClick={handleLogout}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Profile;
