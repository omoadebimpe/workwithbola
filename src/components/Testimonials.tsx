import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Bola made our brand and website look the part. It changed how people took us seriously.",
      author: "Ngozi",
      company: "Bayla Sear"
    },
    {
      quote: "Professional, fast, and exactly what we needed to build trust with investors.",
      author: "Ololade",
      company: "HDI"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/0 via-blue-900/0 to-emerald-900/0 dark:from-purple-900/5 dark:via-blue-900/10 dark:to-emerald-900/5 transition-all duration-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;