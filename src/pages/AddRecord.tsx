
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import { Calendar, Camera, FileText, Upload } from 'lucide-react';

const AddRecord = () => {
  const navigate = useNavigate();
  const [recordType, setRecordType] = useState('');
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleContinue = () => {
    navigate('/upload-record', { state: { recordType } });
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container">
        <AppHeader showBack title="Add a record" />
        
        <div className="p-4">
          <div className="bg-white rounded-xl p-4 mb-4">
            <h2 className="text-lg font-medium mb-1">Step 1/4</h2>
            <p className="text-gray-500 text-sm mb-5">
              A detailed health history helps a doctor diagnose you better.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of record
              </label>
              <div className="space-y-3">
                <RecordTypeButton 
                  icon={<FileText className="w-5 h-5" />}
                  label="Report"
                  isSelected={recordType === 'report'}
                  onSelect={() => setRecordType('report')}
                />
                <RecordTypeButton 
                  icon={<FileText className="w-5 h-5" />}
                  label="Prescription"
                  isSelected={recordType === 'prescription'}
                  onSelect={() => setRecordType('prescription')}
                />
                <RecordTypeButton 
                  icon={<FileText className="w-5 h-5" />}
                  label="Invoice"
                  isSelected={recordType === 'invoice'}
                  onSelect={() => setRecordType('invoice')}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Record created on
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-search pl-10"
                  placeholder="27 Feb, 2021"
                  readOnly
                />
              </div>
            </div>
          </div>
          
          <button
            className="btn-primary w-full"
            disabled={!recordType}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// Record Type Button Component
const RecordTypeButton = ({ icon, label, isSelected, onSelect }) => (
  <button
    className={`flex items-center w-full p-3 rounded-lg border ${
      isSelected 
        ? 'border-blue-500 bg-blue-50' 
        : 'border-gray-200 hover:bg-gray-50'
    }`}
    onClick={onSelect}
  >
    <div className={`p-2 rounded-full mr-3 ${
      isSelected ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-500'
    }`}>
      {icon}
    </div>
    <span className={isSelected ? 'font-medium text-blue-800' : 'text-gray-700'}>
      {label}
    </span>
  </button>
);

export default AddRecord;
