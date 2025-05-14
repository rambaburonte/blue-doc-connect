
import React from 'react';
import AppHeader from '@/components/AppHeader';

const PrivacyPolicy = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container">
        <AppHeader showBack title="Privacy policy" />
        
        <div className="p-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h1 className="text-xl font-bold mb-4">Doctor Hunt Apps Privacy Policy</h1>
            
            <div className="space-y-4 text-gray-700">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable. It is a long established fact that reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more 
              </p>
              
              <p>
                The standard chunk of lorem Ipsum used since 1500s is reproduced below for those interested. 
              </p>
              
              <p>
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum. The point of using.
              </p>
              
              <p>
                Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted.
              </p>
              
              <p>
                The point of using Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
