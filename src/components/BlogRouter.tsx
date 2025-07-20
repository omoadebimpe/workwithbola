import React from 'react';
import Blog from './Blog';
import BlogPost from './BlogPost';

interface BlogRouterProps {
  path: string;
}

const BlogRouter: React.FC<BlogRouterProps> = ({ path }) => {
  // Simple routing logic
  if (path === '/blog') {
    return <Blog />;
  }
  
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return <BlogPost slug={slug} />;
  }
  
  // Default to blog listing
  return <Blog />;
};

export default BlogRouter;