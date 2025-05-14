
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Phone, MessageSquare, Clock, Calendar, ChevronRight, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AppHeader from '@/components/AppHeader';
import StatusBadge from '@/components/StatusBadge';

// Sample doctor data
const doctorData = {
  id: '1',
  name: 'Dr. Shruti Kedia',
  specialty: 'Dentist',
  subSpecialty: 'Tooths Dentist',
  location: 'Upasana Dental Clinic, salt lake',
  rating: 4.8,
  reviews: 69,
  experience: 7,
  price: 28,
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  isLive: true,
  about: 'Dr. Shruti Kedia is a highly skilled dentist with 7 years of experience. She specializes in treating various dental issues with a focus on preventive care. Her approach is gentle and patient-friendly, making dental visits comfortable.',
  education: [
    'MBBS - All India Institute of Medical Sciences, New Delhi',
    'MD in Dentistry - Maulana Azad Medical College'
  ],
  availability: {
    today: { date: 'Today, 23 Feb', slots: 0, status: 'No slots available' },
    tomorrow: { date: 'Tomorrow, 24 Feb', slots: 9, status: '9 slots available' },
    dayAfter: { date: 'Thu, 25 Feb', slots: 10, status: '10 slots available' }
  }
};

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: !isFavorite ? "Added to favorites" : "Removed from favorites",
      description: !isFavorite 
        ? `${doctorData.name} has been added to your favorites`
        : `${doctorData.name} has been removed from your favorites`,
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    if (!selectedDate) {
      toast({
        variant: "destructive",
        title: "Select a date",
        description: "Please select an available date to book your appointment.",
      });
      return;
    }

    navigate(`/book-appointment/${doctorId}?date=${selectedDate}`);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container pb-24">
        <AppHeader showBack />

        {/* Doctor Profile Header */}
        <div className="relative">
          <div className="bg-blue-500 h-48"></div>
          <div className="absolute top-24 left-0 right-0 px-5">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex items-start">
                <div className="relative mr-4">
                  <img
                    src={doctorData.image}
                    alt={doctorData.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  {doctorData.isLive && (
                    <StatusBadge type="live" className="absolute top-1 left-1" />
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-bold">{doctorData.name}</h1>
                  <p className="text-blue-800 font-medium">{doctorData.specialty}</p>
                  <p className="text-gray-500 text-sm mt-1">{doctorData.subSpecialty}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center bg-blue-100 px-2 py-1 rounded-md">
                      <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{doctorData.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({doctorData.reviews} reviews)</span>
                  </div>
                </div>
                <button
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full ${
                    isFavorite ? 'bg-red-100' : 'bg-gray-100'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-bold text-blue-800">{doctorData.experience} Years</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Patients</p>
                  <p className="font-bold text-blue-800">1000+</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Rate</p>
                  <p className="font-bold text-blue-800">${doctorData.price}/hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-48 px-5">
          {/* Location */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-gray-600 mt-1">{doctorData.location}</p>
              </div>
            </div>
          </div>
          
          {/* About */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">About Doctor</h2>
            <p className="text-gray-600 text-sm">{doctorData.about}</p>
          </div>

          {/* Select Appointment Date */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Select Date</h2>
              <button 
                className="text-blue-600 text-sm flex items-center"
                onClick={() => navigate('/calendar')}
              >
                View Calendar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {Object.entries(doctorData.availability).map(([key, dateInfo]) => (
                <div 
                  key={key}
                  className={`min-w-[140px] p-3 border rounded-lg text-center cursor-pointer ${
                    selectedDate === dateInfo.date 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => dateInfo.slots > 0 ? handleDateSelect(dateInfo.date) : null}
                >
                  <p className="font-medium">{dateInfo.date}</p>
                  <p className={`text-sm mt-1 ${dateInfo.slots > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {dateInfo.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating action buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
          <div className="flex gap-3">
            <button className="flex-1 py-3 border border-blue-500 rounded-xl flex items-center justify-center text-blue-500 font-medium">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button 
              className="flex-1 py-3 bg-blue-500 rounded-xl flex items-center justify-center text-white font-medium"
              onClick={handleBookAppointment}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
