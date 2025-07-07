import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyItMatters from './components/WhyItMatters';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Results />
      <Services />
      <Clients />
      <WhyItMatters />
      <WhyWorkWithMe />
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;