import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPostProps {
  slug?: string;
}

interface BlogPostData {
  title: string;
  content: string;
  author: string;
  date: string;
  description?: string;
  image?: string;
  tags: string[];
  category: string;
  published: boolean;
  slug: string;
}

// Sample post as fallback
const samplePost: BlogPostData = {
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
  category: 'Web Design',
  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tags: ['Web Design', 'User Experience', 'Business Growth', 'Digital Marketing'],
  published: true,
  slug: 'why-your-website-is-losing-you-clients',
  description: 'Learn the 5 critical mistakes that drive clients away and how to fix them'
};

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        // If no slug provided, show sample post
        setPost(samplePost);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Try Netlify function first
        const response = await fetch(`/.netlify/functions/get-post?slug=${slug}`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }

        const post = await response.json();
        
        // Convert markdown content to HTML
        const htmlContent = convertMarkdownToHtml(post.content);
        post.content = htmlContent;
        
        setPost(post);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Post not found');
        // Fallback to sample post
        setPost(samplePost);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Function to parse markdown frontmatter and content
  const parseMarkdownPost = (markdown: string, slug: string): BlogPostData => {
    const parts = markdown.split('---');
    if (parts.length < 3) {
      throw new Error('Invalid markdown format');
    }

    // Parse frontmatter (YAML)
    const frontmatterText = parts[1];
    const content = parts.slice(2).join('---').trim();

    // Simple frontmatter parser (you might want to use a proper YAML parser)
    const frontmatter: any = {};
    frontmatterText.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        if (key.trim() === 'tags') {
          // Parse tags array
          frontmatter[key.trim()] = value.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim().replace(/["']/g, ''));
        } else {
          frontmatter[key.trim()] = value;
        }
      }
    });

    // Convert markdown to HTML (basic conversion - you might want to use a proper markdown parser)
    const htmlContent = convertMarkdownToHtml(content);

    return {
      title: frontmatter.title || 'Untitled',
      content: htmlContent,
      author: frontmatter.author || 'Bola Olaniyan',
      date: frontmatter.date || new Date().toISOString(),
      description: frontmatter.description || '',
      image: frontmatter.image || '',
      tags: frontmatter.tags || [],
      category: frontmatter.category || 'Uncategorized',
      published: frontmatter.published !== false,
      slug: frontmatter.slug || slug
    };
  };

  // Basic markdown to HTML converter (consider using a proper library like marked or remark)
  const convertMarkdownToHtml = (markdown: string): string => {
    return markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/^(.*)$/gim, '<p>$1</p>')
      .replace(/<p><h/gim, '<h')
      .replace(/<\/h([1-6])><\/p>/gim, '</h$1>')
      .replace(/<p><li>/gim, '<ul><li>')
      .replace(/<\/li><\/p>/gim, '</li></ul>');
  };

  const scrollToBlog = () => {
    window.location.href = '/blog';
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || 'Blog Post',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Calculate read time
  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !post) {
    return (
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={scrollToBlog}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) return null;

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
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            <div className="flex items-center whitespace-nowrap">
              <User className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{post.author}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{calculateReadTime(post.content)}</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">Business Tips</span>
            </div>
          </div>

          {/* Description */}
          {post.description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              {post.description}
            </p>
          )}

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
        {post.image && (
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                >
                  #{tag.replace(/\s+/g, '').toLowerCase()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0 mx-auto sm:mx-0">
              BO
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {post.author}
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