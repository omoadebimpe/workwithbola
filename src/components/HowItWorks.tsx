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
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;