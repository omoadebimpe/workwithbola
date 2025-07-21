import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  slug: string;
}

// Sample blog posts - these will be replaced by Netlify CMS content
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Your Website is Losing You Clients (And How to Fix It)',
    excerpt: 'Discover the 5 critical mistakes that make potential clients click away from your website and how to transform your online presence into a client magnet.',
    content: '',
    author: 'Bola Olaniyan',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'why-your-website-is-losing-clients'
  },
  {
    id: '2',
    title: 'The Small Business Guide to Looking Professional Online',
    excerpt: 'Learn the essential elements that make a business look credible and trustworthy online, from branding consistency to professional photography.',
    content: '',
    author: 'Bola Olaniyan',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'small-business-guide-professional-online'
  },
  {
    id: '3',
    title: '5 Digital Tools Every Local Business Needs in 2024',
    excerpt: 'From booking systems to customer management, discover the essential digital tools that will streamline your business operations and improve customer experience.',
    content: '',
    author: 'Bola Olaniyan',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Digital Tools',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'digital-tools-local-business-2024'
  }
];

const Blog = () => {
  const categories = ['All', 'Web Design', 'Branding', 'Digital Tools', 'Business Tips', 'Random Thoughts'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-blue-900/0 to-purple-900/0 dark:from-gray-900/20 dark:via-blue-900/10 dark:to-purple-900/20 transition-all duration-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Business Growth Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practical tips and strategies to help your business look professional, attract better clients, and grow smarter.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            >
              {/* Featured Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.slug}`}
                  className="group/link inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;