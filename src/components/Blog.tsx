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
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/get-posts')
      .then(r => r.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Business Growth Insights</h1>

      <div className="space-y-12">
        {posts.map(p => (
          <article key={p.slug} className="border-b pb-8">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{p.author}</span>
              <span className="flex items-center"><Calendar size={14} className="mr-1" />{new Date(p.date).toLocaleDateString()}</span>
              <span className="flex items-center"><Clock size={14} className="mr-1" />{p.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;