import React from 'react';
import { Users, Building, Heart, Wheat } from 'lucide-react';

const Clients = () => {
  const clientTypes = [
    {
      icon: Users,
      title: 'Small business owners',
      description: 'Ready to scale but need professional presentation'
    },
    {
      icon: Building,
      title: 'Startup founders',
      description: 'Building something new and need to look the part'
    },
    {
      icon: Heart,
      title: 'NGOs and charity leaders',
      description: 'Making impact but need better storytelling'
    },
    {
      icon: Wheat,
      title: 'Agricultural, export, and textile businesses',
      description: 'Traditional industries needing modern presentation'
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Who I work with
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I help ambitious people who know they're good at what they do, but need their business to look as professional as they are.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <client.icon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;