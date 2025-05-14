
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import { Camera, Upload } from 'lucide-react';

const UploadRecord = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recordType } = location.state || { recordType: '' };
  
  const handleUpload = () => {
    navigate('/medical-records');
  };
  
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container">
        <AppHeader showBack title="Add a record" />
        
        <div className="p-4">
          <div className="bg-white rounded-xl p-4 mb-4">
            <h2 className="text-lg font-medium mb-1">Step 2/4</h2>
            <p className="text-gray-500 text-sm mb-5">
              Upload your {recordType.toLowerCase()} record
            </p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 p-4 border border-dashed border-blue-300 rounded-lg bg-blue-50 text-blue-500">
                <Camera className="w-5 h-5" />
                <span>Take a photo</span>
              </button>
              
              <button className="w-full flex items-center justify-center gap-3 p-4 border border-dashed border-blue-300 rounded-lg bg-blue-50 text-blue-500">
                <Upload className="w-5 h-5" />
                <span>Upload from gallery</span>
              </button>
              
              <button className="w-full flex items-center justify-center gap-3 p-4 border border-dashed border-blue-300 rounded-lg bg-blue-50 text-blue-500">
                <Upload className="w-5 h-5" />
                <span>Upload files</span>
              </button>
            </div>
          </div>
          
          <button
            className="btn-primary w-full"
            onClick={handleUpload}
          >
            Upload record
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadRecord;
