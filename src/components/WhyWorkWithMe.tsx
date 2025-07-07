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
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-purple-900/0 to-emerald-900/0 dark:from-blue-900/5 dark:via-purple-900/10 dark:to-emerald-900/5 transition-all duration-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            No agency fluff. No guesswork. Just clear, fast results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800/50 p-8 rounded-2xl text-center border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <benefit.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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