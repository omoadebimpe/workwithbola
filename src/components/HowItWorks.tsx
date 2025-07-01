import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Quick Discovery',
      description: 'We talk about your business, goals, and what you need to look professional.'
    },
    {
      number: '02',
      title: 'Packaging and Fixes',
      description: 'I create or improve your materials to make sure everything looks cohesive and credible.'
    },
    {
      number: '03',
      title: 'You look ready for business',
      description: 'You get professional materials that help you win opportunities and grow.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Simple process, clear results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12"
            >
              <div className="flex-shrink-0">
                <div className="text-6xl lg:text-8xl font-bold text-gray-200">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
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