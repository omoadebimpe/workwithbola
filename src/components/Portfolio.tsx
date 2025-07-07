import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const websites = [
    {
      name: 'HDI Website',
      url: 'https://www.hdigrouphq.org',
      image: '/HDI Website.webp',
      description: 'Professional corporate website for sustainable agriculture company'
    },
    {
      name: 'Bayla Sear Website',
      url: 'https://www.baylasear.com',
      image: '/Bayla sear website.webp',
      description: 'Clean, modern website for agricultural procurement business'
    },
    {
      name: 'Inspired',
      url: '#',
      image: '/Inspired charity logo.webp',
      description: 'Coming Soon',
      isComingSoon: true
    }
  ];

  const digitalSolutions = [
    {
      name: 'Professional ID Cards',
      image: '/id card.webp',
      description: 'Custom employee identification and branding materials'
    },
    {
      name: 'Company Profile Presentations',
      image: '/HDi Company Profile Presentation.webp',
      description: 'Investor-ready business presentations and pitch decks'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            See My Work
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            I've helped small businesses and startups look more professional, get trusted faster, 
            and show up ready for real opportunities.
          </p>
        </div>

        {/* Websites Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black mb-8">Websites I've Built</h3>
          <p className="text-lg text-gray-600 mb-12">Click to see the live websites:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websites.map((website, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={website.image}
                    alt={website.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-black mb-2">{website.name}</h4>
                  <p className="text-gray-600 mb-4">{website.description}</p>
                  {website.isComingSoon ? (
                    <span className="inline-flex items-center text-gray-500 font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-black font-medium hover:text-blue-600 transition-colors"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Solutions Section */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-8">Digital Solutions I've Built</h3>
          <p className="text-lg text-gray-600 mb-12">
            See the tools I've created that help businesses operate and present better.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {digitalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-black mb-2">{solution.name}</h4>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-black rounded-3xl p-8 lg:p-12">
            <p className="text-2xl text-white mb-6">Want something like this?</p>
            <a
              href="https://calendly.com/bolaolaniyanadedayo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a meeting
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;