import React from 'react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight mb-8">
            A Messy Online Presence is Quietly{' '}
            <span className="text-red-600">Costing You Opportunities.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl font-medium">
            Let's fix how your business looks — fast. Websites and digital solutions that earn trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              Talk With Bola
            </a>
            <button
              onClick={scrollToServices}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all duration-200 text-center"
            >
              See How I Can Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;