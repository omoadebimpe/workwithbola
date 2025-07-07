import React from 'react';
import { Users, Rocket, Briefcase, TrendingUp } from 'lucide-react';

const Clients = () => {
  const clientTypes = [
    {
      icon: Users,
      title: 'Small business owners',
      description: 'Ready to scale but need professional presentation'
    },
    {
      icon: Rocket,
      title: 'Startup founders',
      description: 'Building something new and need to look the part'
    },
    {
      icon: Briefcase,
      title: 'Side-hustlers turning pro',
      description: 'Making the transition from hobby to serious business'
    },
    {
      icon: TrendingUp,
      title: 'Service businesses that need to look credible',
      description: 'Consultants, agencies, and professionals who need trust'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Who I Work With
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            I work with people ready to get serious about how their business looks:
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-8 bg-white rounded-2xl hover:shadow-md transition-shadow duration-300"
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

        {/* Bottom Statement */}
        <div className="text-center bg-black rounded-3xl p-8 lg:p-12">
          <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
            If your business is growing but still <span className="text-red-400">looks unready</span>, I fix that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;