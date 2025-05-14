
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Calendar, Clock } from 'lucide-react';

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const doctorName = searchParams.get('doctor') || 'Dr. Pediatrician';
  const appointmentDate = searchParams.get('date') || 'February 21';
  const appointmentTime = searchParams.get('time') || '02:00 PM';
  
  const navigateToHome = () => {
    navigate('/');
  };
  
  const navigateToAppointments = () => {
    navigate('/appointments');
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <div className="app-container flex flex-col">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 mx-auto text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Thank You!
          </h1>
          <h2 className="text-xl font-semibold text-blue-800 mb-6">
            Your Appointment Successful
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm mb-8">
            <p className="text-gray-600 mb-4">
              You booked an appointment with {doctorName} on {appointmentDate}, at {appointmentTime}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-center">
              <div>
                <Calendar className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                <p className="text-sm font-medium">{appointmentDate}</p>
              </div>
              <div>
                <Clock className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                <p className="text-sm font-medium">{appointmentTime}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            <button 
              className="btn-primary"
              onClick={navigateToAppointments}
            >
              View Your Appointments
            </button>
            
            <button 
              className="btn-outline"
              onClick={navigateToHome}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
