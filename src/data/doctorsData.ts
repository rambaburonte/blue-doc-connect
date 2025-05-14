// Sample data for doctors
export const specialties = [
  { id: 'dentist', name: 'Dentist', icon: '🦷' },
  { id: 'cardiology', name: 'Cardiology', icon: '❤️' },
  { id: 'pediatrics', name: 'Pediatrics', icon: '👶' },
  { id: 'dermatology', name: 'Dermatology', icon: '🧴' },
  { id: 'neurology', name: 'Neurology', icon: '🧠' },
  { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
];

export const popularDoctors = [
  {
    id: '1',
    name: 'Dr. Shruti Kedia',
    specialty: 'Dentist',
    location: 'Upasana Dental Clinic, salt lake',
    rating: 4.8,
    reviews: 69,
    experience: 7,
    price: 28,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    isLive: true,
    nextAvailable: '10:00 AM tomorrow',
  },
  {
    id: '2',
    name: 'Dr. Truluck Nik',
    specialty: 'Medicine Specialist',
    location: 'Apollo Hospital, Park Street',
    rating: 4.6,
    reviews: 78,
    experience: 9,
    price: 35,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    nextAvailable: '12:00 AM tomorrow',
  },
  {
    id: '3',
    name: 'Dr. Tranquilli',
    specialty: 'Patheology Specialist',
    location: 'City Care Hospital, Newtown',
    rating: 4.3,
    reviews: 45,
    experience: 5,
    price: 30,
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    isLive: true,
  },
];

export const featureDoctors = [
  {
    id: '4',
    name: 'Dr. Johan Smith',
    specialty: 'Specialist Cardiologist',
    location: 'Heart Care Centre, Lake Town',
    rating: 4.9,
    reviews: 87,
    experience: 12,
    price: 40,
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    nextAvailable: '11:00 AM tomorrow',
  },
  {
    id: '5',
    name: 'Dr. Mistry Brick',
    specialty: 'Specialist Dentist',
    location: 'Dental Care, Salt Lake',
    rating: 4.7,
    reviews: 62,
    experience: 6,
    price: 25,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  }
];

// Filter specialties for search page
export const searchSpecialties = [
  { id: 'all', name: 'All' },
  { id: 'dentist', name: 'Dentist' },
  { id: 'cardiology', name: 'Cardiology' },
  { id: 'medicine', name: 'Medicine' },
  { id: 'pathology', name: 'Pathology' },
  { id: 'cancer', name: 'Cancer' },
];

// All doctors for search page
export const allDoctors = [
  ...popularDoctors,
  ...featureDoctors,
  {
    id: '6',
    name: 'Dr. Ether Wall',
    specialty: 'Specialist Cancer',
    location: 'Medical College Hospital, Kolkata',
    rating: 4.5,
    reviews: 59,
    experience: 15,
    price: 45,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '7',
    name: 'Dr. Blessing',
    specialty: 'Dentist Specialist',
    location: 'City Dental Hospital, Park Street',
    rating: 4.2,
    reviews: 38,
    experience: 3,
    price: 22,
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
  }
];
