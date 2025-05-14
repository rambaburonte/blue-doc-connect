
import React from 'react';
import AppHeader from '@/components/AppHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { ArrowRight, HeartPulse, Clock, Award, Check } from 'lucide-react';

// Health checkups data
const healthCheckups = [
  {
    id: '1',
    title: 'Advanced Young Indian Health Checkup',
    description: 'Ideal for individuals aged 21-40 years',
    tests: 69,
    originalPrice: 358,
    discountedPrice: 330,
    discount: '35% off',
    cashback: '+ 10% Health cashback T&C'
  },
  {
    id: '2',
    title: 'Working Women\'s Health Checkup',
    description: 'Ideal for individuals aged 21-40 years',
    tests: 119,
    originalPrice: 387,
    discountedPrice: 345,
    discount: '35% off',
    cashback: '+ 10% Health cashback T&C'
  },
  {
    id: '3',
    title: 'Active Professional Health Checkup',
    description: 'Ideal for individuals aged 21-40 years',
    tests: 100,
    originalPrice: 457,
    discountedPrice: 411,
    discount: '35% off',
    cashback: '+ 10% Health cashback T&C'
  }
];

const DiagnosticTests = () => {
  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div className="app-container pb-16">
        <AppHeader showBack title="Diagnostic Tests" />
        
        <div className="p-4">
          {/* Banner */}
          <div className="bg-blue-500 rounded-xl p-4 text-white mb-5">
            <h2 className="text-lg font-semibold mb-1">Get Full body health checkups from the comfort of your home.</h2>
            <p className="text-sm text-blue-100 mb-3">Upto 45% off + get 10% healthcash back</p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-blue-200" />
                <span className="text-sm">Free home Sample pickup</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-blue-200" />
                <span className="text-sm">Practo associate labs</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-blue-200" />
                <span className="text-sm">E-Reports in 24-72 hours</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1.5 text-blue-200" />
                <span className="text-sm">Free follow-up with a doctor</span>
              </div>
            </div>
          </div>
          
          {/* Status if no tests booked */}
          <div className="bg-white rounded-xl p-5 mb-5 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <HeartPulse className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-1">You haven't booked any tests yet</h3>
            <p className="text-gray-500 text-sm mb-4">Get started with your first health checkup</p>
          </div>
          
          {/* Recommended Checkups */}
          <div className="mb-4">
            <h3 className="font-semibold mb-3">Recommend for you</h3>
            <div className="space-y-4">
              {healthCheckups.map(checkup => (
                <div key={checkup.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-blue-800">{checkup.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{checkup.description}</p>
                  <div className="flex items-center text-sm mb-3">
                    <span className="font-medium">{checkup.tests} tests included</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center">
                        <span className="text-gray-400 line-through text-sm">$ {checkup.originalPrice}</span>
                        <span className="ml-2 font-semibold">$ {checkup.discountedPrice}</span>
                        <span className="ml-2 text-green-500 text-sm">{checkup.discount}</span>
                      </div>
                      <p className="text-xs text-gray-500">{checkup.cashback}</p>
                    </div>
                    <button className="btn-primary text-sm py-2">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default DiagnosticTests;
