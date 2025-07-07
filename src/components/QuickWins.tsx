import React from 'react';
import { CheckCircle, Clock, MessageCircle, Eye } from 'lucide-react';

const QuickWins = () => {
  const wins = [
    'Look credible and professional',
    'Get trusted faster by clients, partners, investors',
    'Show up ready for real business'
  ];

  const guarantees = [
    { icon: Clock, text: '48hrs or Less Response' },
    { icon: MessageCircle, text: 'No-Pressure Consultation' },
    { icon: Eye, text: 'See What You\'re Getting First' }
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/0 to-transparent dark:via-blue-900/5 transition-all duration-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Wins You Get
          </h2>
        </div>

        {/* Wins List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {wins.map((win, index) => (
            <div
              key={index}
              className="group flex items-center space-x-4 p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 backdrop-blur-sm"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{win}</p>
            </div>
          ))}
        </div>

        {/* Guarantees - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group flex items-center justify-center space-x-3 p-6 bg-gray-50 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
            >
              <guarantee.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickWins;