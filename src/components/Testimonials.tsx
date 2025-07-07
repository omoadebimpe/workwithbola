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
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gray-400 mb-6" />
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-black">
                  {testimonial.author}
                </div>
                <div className="text-gray-600">
                  {testimonial.company}
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