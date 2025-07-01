import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Work with Bola Logo.svg" 
              alt="Work with Bola" 
              className="h-8 w-auto"
              style={{ width: '200px', height: '100px' }}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'How It Works', 'Testimonials'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book Free Chat
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="py-4 space-y-2">
              {['Services', 'How It Works', 'Testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="https://calendly.com/bolaolaniyanadedayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors duration-200"
                >
                  Book Free Chat
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;