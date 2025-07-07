import React from 'react';
import { CheckCircle, TrendingUp, Users, Shield, Star, Zap } from 'lucide-react';

const Results = () => {
  const benefits = [
    'Make people trust you faster',
    'Get taken seriously by clients, partners, and investors',
    'Look ready for business — online and on paper',
    'Remove the "small-time" feel that holds you back',
    'Help you confidently send links, profiles, and documents without second-guessing'
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            When your business looks the part,{' '}
            <span className="text-emerald-600">opportunities open up.</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            I package your business to:
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Ongoing Support */}
        <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              And when things change? You can always keep working with me.
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Want a one-off fix and be done? Cool. Want me in your corner long-term to refresh, 
              update, or add what your business needs to keep looking sharp? That works too.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-lg">One-off fixes</h4>
                  <p className="text-gray-300">Get what you need and go</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="font-semibold text-lg">Long-term partnership</h4>
                  <p className="text-gray-300">Keep your business fresh as you grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;