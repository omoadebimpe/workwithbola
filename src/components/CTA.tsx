import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-black rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to fix your business presentation?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's have a quick chat about what you need and how I can help you look as professional as you are.
          </p>

          <a
            href="https://calendly.com/bolaolaniyanadedayo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-12 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-colors duration-200"
          >
            Talk With Bola
          </a>

          <div className="mt-8 text-gray-400">
            Free 15-minute consultation • No obligations • Quick response
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;