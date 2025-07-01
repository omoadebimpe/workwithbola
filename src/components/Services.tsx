import React from 'react';
import { FileText, Globe, Palette, Presentation as PresentationChart, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Business profiles and pitch decks',
      description: 'Professional documents that tell your story and impress stakeholders.'
    },
    {
      icon: Globe,
      title: 'Simple, professional websites',
      description: 'Clean, modern websites that convert visitors into customers.'
    },
    {
      icon: Palette,
      title: 'Branding and digital cleanup',
      description: 'Cohesive visual identity that makes your business look credible.'
    },
    {
      icon: PresentationChart,
      title: 'Document design',
      description: 'Proposals, reports, and presentations that get results.'
    },
    {
      icon: TrendingUp,
      title: 'Investor readiness materials',
      description: 'Everything you need to raise funding and attract partners.'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What I do
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I help businesses look professional and get taken seriously. Here's how:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => window.open('https://calendly.com/bolaolaniyanadedayo', '_blank')}
                className="mt-6 text-black font-medium hover:underline"
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;