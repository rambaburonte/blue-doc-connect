
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import OnboardingNew from "./pages/OnboardingNew";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchDoctors from "./pages/SearchDoctors";
import DoctorDetails from "./pages/DoctorDetails";
import BookAppointment from "./pages/BookAppointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import MedicalRecords from "./pages/MedicalRecords";
import DiagnosticTests from "./pages/DiagnosticTests";
import AddRecord from "./pages/AddRecord";
import UploadRecord from "./pages/UploadRecord";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpCenter from "./pages/HelpCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding-new" element={<OnboardingNew />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchDoctors />} />
          <Route path="/doctor/:doctorId" element={<DoctorDetails />} />
          <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
          <Route path="/appointment-success" element={<AppointmentSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
          <Route path="/add-record" element={<AddRecord />} />
          <Route path="/upload-record" element={<UploadRecord />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
