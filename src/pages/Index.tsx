import React from 'react';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Community />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;