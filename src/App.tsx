import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickWins from './components/QuickWins';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-inter transition-colors duration-500">
        <ThreeBackground />
        <div className="relative z-10">
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
        
        {/* Noise overlay for dark mode */}
        <div className="fixed inset-0 pointer-events-none opacity-0 dark:opacity-20 transition-opacity duration-1000 z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '128px 128px'
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;