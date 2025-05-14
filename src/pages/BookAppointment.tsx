
import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AppHeader from '@/components/AppHeader';

// Sample time slots
const morningSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
const afternoonSlots = ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'];
const eveningSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'];

// Sample doctor data
const doctorData = {
  id: '1',
  name: 'Dr. Shruti Kedia',
  specialty: 'Dentist',
  subSpecialty: 'Tooths Dentist',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  price: 28,
};

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const selectedDate = searchParams.get('date') || 'Tomorrow, 24 Feb';
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [patientType, setPatientType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handlePatientSelect = (type: string) => {
    setPatientType(type);
  };

  const handleBookAppointment = () => {
    if (!selectedTime) {
      toast({
        variant: "destructive",
        title: "Select a time",
        description: "Please select an available time slot for your appointment.",
      });
      return;
    }

    if (!patientType) {
      toast({
        variant: "destructive",
        title: "Select patient type",
        description: "Please select who this appointment is for.",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/appointment-success?doctor=${doctorData.name}&date=${selectedDate}&time=${selectedTime}`);
    }, 1000);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="app-container pb-24">
        <AppHeader showBack title="Book Appointment" />

        {/* Doctor info */}
        <div className="p-5">
          <div className="bg-white rounded-xl p-4 flex items-center space-x-4 shadow-sm mb-6">
            <img
              src={doctorData.image}
              alt={doctorData.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="font-semibold">{doctorData.name}</h2>
              <p className="text-blue-800 text-sm">{doctorData.specialty}</p>
              <p className="text-gray-500 text-xs">{doctorData.subSpecialty}</p>
            </div>
          </div>

          {/* Date section */}
          <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold">Date</h2>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="font-medium">{selectedDate}</p>
            </div>
          </div>

          {/* Time slots */}
          <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold">Available Time</h2>
            </div>

            {/* Morning */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Morning</h3>
              <div className="grid grid-cols-4 gap-2">
                {morningSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 text-center text-sm rounded-lg border ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Afternoon</h3>
              <div className="grid grid-cols-4 gap-2">
                {afternoonSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 text-center text-sm rounded-lg border ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Evening</h3>
              <div className="grid grid-cols-4 gap-2">
                {eveningSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 text-center text-sm rounded-lg border ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Patient selection */}
          <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold">Appointment For</h2>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {['My Self', 'My child', 'My wife', 'Others'].map((type) => (
                <button
                  key={type}
                  className={`py-2 px-1 text-center text-sm rounded-lg border ${
                    patientType === type
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handlePatientSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Reminder time */}
          <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold">Reminder Me Before</h2>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {['10', '25', '30', '35', '40'].map((mins) => (
                <div 
                  key={mins}
                  className="p-2 text-center border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300"
                >
                  <p className="font-medium">{mins}</p>
                  <p className="text-xs text-gray-500">Minit</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and booking button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-500">Total</p>
              <p className="text-xl font-bold">${doctorData.price}.00</p>
            </div>
            <button 
              className={`py-3 px-6 bg-blue-500 rounded-xl flex items-center justify-center text-white font-medium ${
                isLoading ? 'opacity-70' : ''
              }`}
              onClick={handleBookAppointment}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
