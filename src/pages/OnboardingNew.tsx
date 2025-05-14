
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OnboardingNew = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const onboardingSteps = [
    {
      title: "Find Trusted Doctors",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Choose Best Doctors",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Easy Appointments",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
  ];

  const currentStep = onboardingSteps[step];

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center">
        {/* Onboarding Image */}
        <div className="bg-blue-500 w-full h-1/2 rounded-b-[40%] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-white">
              <img 
                src={currentStep.image} 
                alt={currentStep.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-8 py-10 flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            {currentStep.title}
          </h1>
          <p className="text-center text-gray-600 mb-8">
            {currentStep.description}
          </p>
          
          {/* Pagination Dots */}
          <div className="flex space-x-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 rounded-full ${
                  index === step ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              onClick={handleNext}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              className="text-gray-500 py-2"
              onClick={handleSkip}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingNew;
