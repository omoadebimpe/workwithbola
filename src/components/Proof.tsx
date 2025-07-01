import React from 'react';
import { Quote, Star, TrendingUp, Users } from 'lucide-react';

const Proof = () => {
  const clients = [
    {
      name: 'HDI',
      industry: 'Healthcare Solutions',
      result: '300% increase in qualified leads',
      description: 'Complete brand redesign and website overhaul resulted in dramatically improved client acquisition.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Bayla Sear',
      industry: 'Professional Services',
      result: '150% growth in online bookings',
      description: 'Streamlined booking system and professional website design transformed their client experience.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      quote: "Bola transformed our entire online presence. We went from looking like amateurs to industry leaders overnight.",
      author: "Sarah Johnson",
      company: "Local Marketing Agency",
      rating: 5
    },
    {
      quote: "The automation systems Bola set up save me 10 hours a week. I can finally focus on growing my business.",
      author: "Marcus Chen",
      company: "Consulting Firm",
      rating: 5
    },
    {
      quote: "Professional, reliable, and gets results. Bola understands what local businesses actually need.",
      author: "Lisa Rodriguez",
      company: "Retail Store Owner",
      rating: 5
    }
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results for
            <span className="text-blue-700 block">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how other local businesses have transformed their digital presence 
            and achieved measurable growth.
          </p>
        </div>

        {/* Client Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {clients.map((client, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{client.name}</h3>
                  <p className="text-gray-600">{client.industry}</p>
                </div>
              </div>
              
              <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full inline-block mb-4 font-semibold">
                <TrendingUp className="w-4 h-4 inline mr-2" />
                {client.result}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Users, number: '50+', label: 'Happy Clients' },
            { icon: TrendingUp, number: '3x', label: 'Average Growth' },
            { icon: Star, number: '5.0', label: 'Client Rating' },
            { icon: Quote, number: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-blue-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;