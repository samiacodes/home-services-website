import React from 'react';
import Services from '../components/sections/Services';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';
import Process from '../components/sections/Process';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Hero />

      {/* Services Section */}
      <Services />
      <Process />
      <FAQ />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default HomePage;