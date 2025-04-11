import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScanSetup from './components/ScanSetup';
import HowItWorks from './components/HowItWorks';
import OwaspInfo from './components/OwaspInfo';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
      <Navbar />,
      <Hero/>,
       <ScanSetup/>,
       <HowItWorks/>,
       <OwaspInfo/>,
       <Testimonials/>,
       <CTA/>,
       <Footer/>
      
    </div>
  );
};

export default App;