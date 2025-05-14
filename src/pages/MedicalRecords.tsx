
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Plus, Calendar, FileText, Search } from 'lucide-react';

// Sample data for records
const medicalRecords = [
  {
    id: '1',
    date: '27 FEB',
    title: 'Record for Abdullah mamun',
    type: 'Prescription',
    isNew: true
  },
  {
    id: '2',
    date: '28 FEB',
    title: 'Record for Abdullah shuvo',
    type: 'Prescription',
    isNew: true
  },
  {
    id: '3',
    date: '01 MAR',
    title: 'Record for Shruti Kedia',
    type: 'Prescription',
    isNew: false
  }
];

const MedicalRecords = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const handleAddRecord = () => {
    navigate('/add-record');
  };

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        <AppHeader showBack title="Medical Records" />
        
        <div className="p-4">
          {/* Search bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input-search pl-10"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Tabs */}
          <div className="flex mb-4 bg-white rounded-lg p-1">
            <button
              className={`flex-1 py-2 rounded-md ${
                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Records
            </button>
            <button
              className={`flex-1 py-2 rounded-md ${
                activeTab === 'added' ? 'bg-blue-500 text-white' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('added')}
            >
              Records added by you
            </button>
          </div>
          
          {/* Records list */}
          <div className="space-y-3">
            {medicalRecords.map((record) => (
              <div key={record.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{record.title}</h3>
                        <div className="flex items-center mt-1">
                          <FileText className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{record.type}</span>
                          {record.isNew && (
                            <span className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
                          )}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-blue-800">{record.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add record button */}
          <div className="mt-4">
            <button 
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={handleAddRecord}
            >
              <Plus className="w-5 h-5" />
              Add a medical record
            </button>
          </div>
        </div>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MedicalRecords;
