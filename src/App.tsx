import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickWins from './components/QuickWins';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <QuickWins />
      <Portfolio />
      <HowItWorks />
      <WhyWorkWithMe />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;