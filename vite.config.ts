import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    __BLOG_POSTS__: JSON.stringify(getBlogPosts()),
  },
});

function getBlogPosts() {
  try {
    const files = glob.sync('content/blog/*.md');
    return files.map(file => {
      const content = fs.readFileSync(file, 'utf-8');
      const { data } = matter(content);
      return {
        ...data,
        slug: path.basename(file, '.md')
      };
    });
  } catch (error) {
    console.warn('Could not load blog posts:', error);
    return [];
  }
}
