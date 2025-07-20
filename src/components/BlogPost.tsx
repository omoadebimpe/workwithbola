import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPostProps {
  slug?: string;
}

// Sample blog post data - this will be replaced by Netlify CMS content
const samplePost = {
  title: 'Why Your Website is Losing You Clients (And How to Fix It)',
  content: `
    <p>Your website is often the first impression potential clients have of your business. In today's digital world, a poorly designed or outdated website can cost you valuable opportunities before you even know they existed.</p>

    <h2>The Hidden Cost of a Poor Website</h2>
    <p>Studies show that users form an opinion about your website within 50 milliseconds. That's faster than the blink of an eye. If your site doesn't immediately convey professionalism and trustworthiness, visitors will leave and likely never return.</p>

    <h2>5 Critical Mistakes That Drive Clients Away</h2>
    
    <h3>1. Slow Loading Times</h3>
    <p>If your website takes more than 3 seconds to load, you've already lost 40% of your visitors. In our fast-paced world, people expect instant gratification. A slow website signals that your business might be equally sluggish in delivering services.</p>

    <h3>2. Outdated Design</h3>
    <p>A website that looks like it was built in 2010 makes your business appear outdated and out of touch. Modern, clean design isn't just about aesthetics—it's about credibility.</p>

    <h3>3. Poor Mobile Experience</h3>
    <p>With over 60% of web traffic coming from mobile devices, a website that doesn't work well on phones and tablets is essentially turning away the majority of your potential clients.</p>

    <h3>4. Unclear Value Proposition</h3>
    <p>Visitors should understand what you do and how you can help them within seconds of landing on your site. If they have to hunt for this information, they won't.</p>

    <h3>5. Missing Contact Information</h3>
    <p>Make it easy for people to reach you. Hidden or hard-to-find contact information creates unnecessary friction in the customer journey.</p>

    <h2>The Solution: A Strategic Website Redesign</h2>
    <p>Fixing these issues doesn't require a complete overhaul or a massive budget. Often, strategic improvements to key areas can dramatically improve your website's performance and conversion rate.</p>

    <h3>Focus on Speed</h3>
    <p>Optimize images, choose reliable hosting, and minimize unnecessary plugins. Every second counts.</p>

    <h3>Modernize Your Design</h3>
    <p>Clean, professional design with plenty of white space and clear navigation helps visitors focus on what matters most.</p>

    <h3>Mobile-First Approach</h3>
    <p>Design for mobile first, then scale up to desktop. This ensures a great experience across all devices.</p>

    <h3>Clear Messaging</h3>
    <p>Lead with benefits, not features. Tell visitors exactly how you can solve their problems.</p>

    <h2>Ready to Transform Your Website?</h2>
    <p>Your website should be working for you, not against you. If you're ready to create a professional online presence that actually converts visitors into clients, let's talk about how I can help.</p>
  `,
  author: 'Bola Olaniyan',
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Web Design',
  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tags: ['Web Design', 'User Experience', 'Business Growth', 'Digital Marketing']
};

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const scrollToBlog = () => {
    window.location.href = '/blog';
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: samplePost.title,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="py-12 sm:py-16 lg:py-24 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-blue-900/0 to-purple-900/0 dark:from-gray-900/20 dark:via-blue-900/10 dark:to-purple-900/20 transition-all duration-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={scrollToBlog}
          className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm sm:text-base">Back to Blog</span>
        </button>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          {/* Category */}
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {samplePost.category}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            {samplePost.title}
          </h1>

          {/* Meta Info - Mobile First Layout */}
          <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            <div className="flex items-center whitespace-nowrap">
              <User className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{samplePost.author}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{new Date(samplePost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{samplePost.readTime}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">Business Tips</span>
            </div>
          </div>

          {/* Share Button */}
          <button
            onClick={sharePost}
            className="group inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
          >
            <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Share Article
          </button>
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12">
          <img
            src={samplePost.image}
            alt={samplePost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: samplePost.content }}
          />
        </div>

        {/* Tags */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {samplePost.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                #{tag.replace(' ', '').toLowerCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0 mx-auto sm:mx-0">
              BO
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {samplePost.author}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                Digital Solutions Consultant helping local businesses transform their online presence. 
                Specializing in websites, branding, and digital tools that actually work for real businesses.
              </p>
              <a
                href="https://calendly.com/bolaolaniyanadedayo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
              >
                Work with Bola →
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
            Let's discuss how I can help you create a professional online presence that actually converts.
          </p>
          <a
            href="https://calendly.com/bolaolaniyanadedayo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-white text-blue-600 dark:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book a Free Consultation
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;