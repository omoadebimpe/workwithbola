import React from 'react';
import { User, Zap, Target } from 'lucide-react';

const WhyWorkWithMe = () => {
  const benefits = [
    {
      icon: User,
      title: 'No agency layers',
      description: 'You work directly with me. No account managers, no miscommunication, no runaround.'
    },
    {
      icon: Zap,
      title: 'Fast and practical',
      description: 'I focus on what actually moves the needle for your business, not fancy extras you don\'t need.'
    },
    {
      icon: Target,
      title: 'Ready for real opportunities',
      description: 'Everything I create is designed to help you win clients, raise funding, or close deals.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why work with me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I keep things simple, fast, and focused on results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <benefit.icon className="w-12 h-12 text-black mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;