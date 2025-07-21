import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  slug: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visible, setVisible] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  /* -------------------------------- fetch CMS posts --------------------------- */
  useEffect(() => {
    fetch('/api/get-posts')
      .then((r) => r.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  /* -------------------------------- categories ------------------------------- */
  const categories = [
    'All',
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  /* -------------------------------- render ----------------------------------- */
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-blue-900/0 to-purple-900/0 dark:from-gray-900/20 dark:via-blue-900/10 dark:to-purple-900/20 transition-all duration-1000"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Business Growth Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practical tips and strategies to help your business look professional,
            attract better clients, and grow smarter.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisible(6); // reset pagination
              }}
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
          {filteredPosts.slice(0, visible).map((post) => (
            <article
              key={post.slug}
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
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

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
        {visible < filteredPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;