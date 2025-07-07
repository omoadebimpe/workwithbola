import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Look the Part?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop losing opportunities because your business looks unready. Let's fix how you show up.
            </p>

            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-white text-gray-900 px-12 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Talk With Bola — Free 15-min Chat</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>

            <div className="mt-8 text-gray-400">
              Free consultation • No obligations • Quick response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;