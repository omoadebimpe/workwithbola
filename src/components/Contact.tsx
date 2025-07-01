import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Fix Your Online Presence
            <span className="text-blue-700 block">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Drop me a message and let's discuss 
            how I can help you grow smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-700 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:bola@example.com" className="text-blue-700 hover:text-blue-800 transition-colors">
                      bola@digitalsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-700 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-700 hover:text-blue-800 transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-700 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Serving businesses nationwide</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center text-blue-800">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Quick Response Guaranteed</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">
                  I typically respond within 2-4 hours during business days
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-gray-900 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your business and what challenges you're facing with your online presence..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;