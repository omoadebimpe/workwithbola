import React from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/Work with Bola Logo.svg" 
              alt="Work with Bola" 
              className="w-[120px] h-[100px]"
            />
            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              Your shortcut to looking the best at what you love to do.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-6">Quick Links</h4>
            <div className="space-y-4">
              <a
                href="https://calendly.com/bolaolaniyanadedayo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors duration-200"
              >
                Book a Call
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-black transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-black transition-colors duration-200 text-left"
              >
                Testimonials
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:bolaolaniyanadedayo@gmail.com"
                className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3" />
                Email
              </a>
              <a
                href="https://wa.me/+2349071953226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/thestudiozero_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Instagram className="w-4 h-4 mr-3" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Work with Bola. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;