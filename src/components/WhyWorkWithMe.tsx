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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            No agency fluff. No guesswork. Just clear, fast results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;