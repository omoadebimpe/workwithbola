// src/utils/blogData.js
import matter from 'gray-matter';

export async function getBlogPosts() {
  try {
    // Import all markdown files from your content directory
    // Adjust the path based on where your Netlify CMS saves files
    const modules = import.meta.glob('/content/blog/*.md', { 
      as: 'raw', 
      eager: true 
    });
    
    const posts = Object.entries(modules).map(([filepath, content]) => {
      // Parse the markdown frontmatter
      const { data: frontmatter, content: markdownContent } = matter(content);
      
      // Extract filename for slug if not provided in frontmatter
      const filename = filepath.split('/').pop().replace('.md', '');
      const slug = frontmatter.slug || filename;
      
      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = markdownContent.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);
      
      return {
        id: slug,
        title: frontmatter.title || 'Untitled',
        excerpt: frontmatter.excerpt || frontmatter.description || '',
        content: markdownContent,
        author: frontmatter.author || '',
        date: frontmatter.date,
        readTime: `${readTime} min read`,
        category: frontmatter.category || 'Uncategorized',
        image: frontmatter.image || frontmatter.featured_image || '',
        slug: slug,
        filepath: filepath
      };
    });
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Alternative method if your content is in public folder
export async function getBlogPostsFromPublic() {
  try {
    // This method fetches from public folder during runtime
    const response = await fetch('/api/posts'); // You'd need to create this API endpoint
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}