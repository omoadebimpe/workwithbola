import React from 'react';
import { User, Zap, Target, DollarSign } from 'lucide-react';

const WhyWorkWithMe = () => {
  const benefits = [
    {
      icon: User,
      title: 'You work directly with me, Bola',
      description: 'No account managers, no miscommunication, no runaround. Just straight talk and results.'
    },
    {
      icon: Zap,
      title: 'Simple, fast process — no jargon',
      description: 'I focus on what actually moves the needle for your business, not fancy extras you don\'t need.'
    },
    {
      icon: Target,
      title: 'I focus on results — making your business look ready',
      description: 'Everything I create is designed to help you win clients, raise funding, or close deals.'
    },
    {
      icon: DollarSign,
      title: 'Clear pricing, no guesswork',
      description: 'Transparent costs upfront. No hidden fees or surprise charges.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            No agency drama. Just straight-up fixes for your business presentation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <benefit.icon className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flexibility Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Keep it one-off, or keep me around
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Update and maintain your business presence as you grow. Your choice, your timeline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;