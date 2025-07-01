import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <WhyWorkWithMe />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;