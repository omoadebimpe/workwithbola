import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 animate-fade-in">
            A Messy Online Presence is Quietly{' '}
            <span className="text-red-600 relative">
              Costing You Opportunities.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-200 rounded-full animate-pulse"></div>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl font-medium animate-slide-up">
            Let's fix how your business looks — fast. Websites and digital solutions that earn trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delayed">
            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Talk With Bola</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <button
              onClick={scrollToPortfolio}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
            >
              <span className="group-hover:mr-2 transition-all duration-300">See How I Can Help</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;