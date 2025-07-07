import React from 'react';
import { Globe, Palette, FileText, Presentation, TrendingUp, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Clean, simple websites that make you look professional',
      description: 'Modern, responsive websites that convert visitors into customers and build trust instantly.'
    },
    {
      icon: Settings,
      title: 'Digital solutions that help your business run better',
      description: 'Forms, booking systems, profiles, and automation tools that streamline your operations.'
    },
    {
      icon: FileText,
      title: 'Business profiles & one-pagers that tell your story clearly',
      description: 'Compelling documents that communicate your value proposition and build credibility.'
    },
    {
      icon: Palette,
      title: 'Basic branding — logo, colors, style that show consistency',
      description: 'Cohesive visual identity that makes your business look established and trustworthy.'
    },
    {
      icon: TrendingUp,
      title: 'Pitch materials and documents that help you look investor-ready',
      description: 'Professional presentations and materials that open doors to funding and partnerships.'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            What's Included{' '}
            <span className="text-blue-600">(Your Business Package)</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            You don't just need a logo or a website — you need to <em>look complete</em>. I give you that:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-200"
            >
              <service.icon className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            The result?
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            You walk away looking prepared and credible — with the option to keep your business 
            fresh as you grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;