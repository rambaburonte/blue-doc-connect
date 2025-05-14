
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import { Phone, ChevronRight, MessageSquare, Calendar, ShoppingBag, CreditCard, HelpCircle, Heart } from 'lucide-react';

const HelpCenter = () => {
  const navigate = useNavigate();
  
  const helpTopics = [
    { 
      id: 'appointment', 
      icon: <Calendar className="w-5 h-5 text-blue-500" />, 
      title: 'Booking a new Appointment',
      description: 'You can search c ourse, apply course and find scholarship for abroad studies'
    },
    { 
      id: 'medicine', 
      icon: <ShoppingBag className="w-5 h-5 text-blue-500" />, 
      title: 'Guide to medicine order',
      description: 'You can search c ourse, apply course and find scholarship for abroad studies'
    },
    { 
      id: 'prescription', 
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />, 
      title: 'Prescription related issues',
      description: 'You can search c ourse, apply course and find scholarship for abroad studies'
    },
    { 
      id: 'consultation', 
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />, 
      title: 'Online consultations',
      description: 'You can search c ourse, apply course and find scholarship for abroad studies'
    },
    { 
      id: 'payments', 
      icon: <CreditCard className="w-5 h-5 text-blue-500" />, 
      title: 'Payments',
      description: 'You can search c ourse, apply course and find scholarship for abroad studies'
    }
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container">
        <AppHeader showBack title="Help Center" />
        
        <div className="p-4">
          {/* Contact Card */}
          <div className="bg-blue-500 rounded-xl p-4 text-white mb-5 flex items-center">
            <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Have an issue with</p>
              <p className="font-semibold">01303-527300</p>
            </div>
          </div>
          
          {/* Help Topics */}
          <h3 className="font-semibold mb-3">I have an issue with</h3>
          <div className="space-y-3 mb-5">
            {helpTopics.map(topic => (
              <div key={topic.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3 self-start">
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{topic.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Help Categories */}
          <h3 className="font-semibold mb-3">More options</h3>
          <div className="bg-white rounded-xl divide-y divide-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-blue-500 mr-3" />
                <span>Feedbacks</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-3" />
                <span>Have a feature in mind</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
