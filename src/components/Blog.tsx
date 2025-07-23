import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  slug: string;
  category?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try Netlify function first
        const response = await fetch('/.netlify/functions/get-posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const navigateToPost = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  if (loading) {
    return (
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Business Growth Insights</h1>
        <div className="space-y-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="flex space-x-4">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Business Growth Insights</h1>
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Business Growth Insights</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No blog posts found.</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Posts will appear here once published through Netlify CMS.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {posts.map(p => (
            <article 
              key={p.slug} 
              className="border-b border-gray-200 dark:border-gray-700 pb-8 cursor-pointer group"
              onClick={() => navigateToPost(p.slug)}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover rounded mb-4 group-hover:opacity-90 transition-opacity"
                />
              )}
              
              {p.category && (
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {p.category}
                </span>
              )}
              
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {p.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{p.author}</span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {new Date(p.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {p.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;