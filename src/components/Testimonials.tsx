import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Bola simplified everything. Our brand, documents, and website now reflect the level of professionalism we wanted to show the market — it made all the difference when speaking to partners.",
      author: "Ngozi Oputa",
      company: "Co-founder, Bayla Sear"
    },
    {
      quote: "Bola helped us package HDI professionally across every touchpoint — from branding to our website to investor materials. It gave us the credibility we needed to approach stakeholders and raise significant funding.",
      author: "Ololade Adeneye",
      company: "Managing Director, HDI"
    },
    {
      quote: "Bola understood exactly how we wanted Casa Chanan to be seen. The brand identity he created gave our business the professional, clean look we needed to stand out and build trust with clients.",
      author: "Chioma O",
      company: "Founder, Casa Chanan"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What clients say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real results from real businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl"
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