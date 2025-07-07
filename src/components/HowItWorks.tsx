import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Quick Chat',
      description: 'We talk about your business and what\'s holding it back.'
    },
    {
      number: '2',
      title: 'I Build It',
      description: 'Your website, business materials, or tools.'
    },
    {
      number: '3',
      title: 'You Look Ready',
      description: 'Walk away with a business that looks professional and credible.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/0 via-blue-900/0 to-purple-900/0 dark:from-emerald-900/5 dark:via-blue-900/10 dark:to-purple-900/5 transition-all duration-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
        </div>

        {/* Steps - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800/50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle background on hover */}
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;