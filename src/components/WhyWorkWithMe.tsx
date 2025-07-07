import React from 'react';
import { User, Zap, Target } from 'lucide-react';

const WhyWorkWithMe = () => {
  const benefits = [
    {
      icon: User,
      title: 'Direct, one-on-one help',
      description: 'Work directly with me, not an agency team.'
    },
    {
      icon: Zap,
      title: 'Simple process, no jargon',
      description: 'Clear communication and straightforward solutions.'
    },
    {
      icon: Target,
      title: 'One-off fixes or ongoing help — your choice',
      description: 'Flexible engagement based on your needs.'
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            No agency fluff. No guesswork. Just clear, fast results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
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