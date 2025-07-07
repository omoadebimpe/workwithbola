import React from 'react';
import { Eye, DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

const WhyItMatters = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Why It Matters
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Problem */}
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
              <div className="flex items-center mb-4">
                <TrendingDown className="w-8 h-8 text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-red-700">The Problem</h3>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                If your business presentation looks messy, people doubt you.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-500 mr-4" />
                <h3 className="text-2xl font-bold text-emerald-700">The Solution</h3>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                If it looks sharp, clean, and professional, they believe in what you do.
              </p>
            </div>
          </div>

          {/* Right Side - Impact */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
            <Eye className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6">First impressions either open doors or close them.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I help you flip that switch — so you get trusted faster.
            </p>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Because the truth is, people <strong>judge your business by how it looks</strong>. 
                And that's costing you — even if they never say it out loud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;