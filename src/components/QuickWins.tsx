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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Quick Wins You Get
          </h2>
        </div>

        {/* Wins List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {wins.map((win, index) => (
            <div
              key={index}
              className="group flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-medium text-gray-800">{win}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group flex items-center justify-center space-x-3 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <guarantee.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickWins;