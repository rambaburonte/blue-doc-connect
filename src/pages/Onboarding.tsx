
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };
  
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-between">
        <div className="bg-blue-500 h-72 rounded-b-3xl flex items-end">
          <div className="w-full transform translate-y-20">
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1783.jpg"
                alt="Doctor Consultation"
                className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="px-8 pt-24 pb-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
            Doctor Hunt
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Find trusted doctors, book appointments easily, and get the care you deserve.
          </p>
          
          <div className="flex flex-col gap-3 w-full mt-4">
            <button 
              className="btn-primary flex items-center justify-center gap-2"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              className="btn-outline"
              onClick={() => navigate('/register')}
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
