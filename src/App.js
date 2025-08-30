import React from "react";
import ClinicNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DoctorsSection from "./components/DoctorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <ClinicNavbar />
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <BookingForm />
      <Footer />
      
    </div>
  );
}

export default App;
