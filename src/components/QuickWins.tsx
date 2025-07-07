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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Quick Wins You Get
          </h2>
        </div>

        {/* Wins List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {wins.map((win, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <p className="text-lg font-medium text-gray-800">{win}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 p-6 bg-black text-white rounded-xl"
            >
              <guarantee.icon className="w-6 h-6" />
              <span className="font-semibold">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickWins;