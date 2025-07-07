import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'We chat to understand your business',
      description: 'Quick conversation about what you do and what\'s holding you back from looking professional.'
    },
    {
      number: '02',
      title: 'I build your website, tools, or business materials',
      description: 'Create everything you need to package your business properly and look credible.'
    },
    {
      number: '03',
      title: 'You walk away looking professional',
      description: 'Ready to be taken seriously by clients, partners, and investors.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Quick, simple process to fix your business presentation:
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 mb-16">
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

        {/* Bottom Note */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <p className="text-2xl font-bold text-black">
            Need help again down the line? You know where to find me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;