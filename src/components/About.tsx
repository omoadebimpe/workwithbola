import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 p-8 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-700 to-emerald-700 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                BO
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-4 rounded-full shadow-lg">
              <Heart className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
              <Target className="w-6 h-6" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-700">Bola</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm a Digital Solutions Consultant who helps local business owners break free from 
              tech overwhelm and build professional brands that actually work.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              After years of seeing talented business owners struggle with outdated websites, 
              inconsistent branding, and manual processes that eat up their time, I decided to 
              make it simple. No more cookie-cutter solutions or confusing tech jargon—just 
              clear strategies that help you look professional, attract better clients, and 
              work smarter.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Over 5 years helping local businesses grow their digital presence',
                'Specialized in making complex tech simple and actionable',
                'Focused on practical solutions that deliver real results'
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 italic">
                "I believe every local business deserves to look as professional as they are. 
                My job is to make that happen without the stress, confusion, or massive budgets."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;