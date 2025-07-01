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
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight mb-8">
            Need your business to look the part?{' '}
            <span className="text-gray-600">Let's fix it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
            Websites, branding, documents — I help you package your business so it's taken seriously.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              Book a free 15 min chat
            </a>
            <button
              onClick={scrollToServices}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all duration-200 text-center"
            >
              See how I can help
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            {[
              { number: '50+', label: 'Businesses helped' },
              { number: '3x', label: 'Average growth' },
              { number: '48hrs', label: 'Response time' }
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;