const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async (event, context) => {
  try {
    const postsDir = path.resolve('content/blog');
    
    // Check if directory exists
    if (!fs.existsSync(postsDir)) {
      return {
        statusCode: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify([]),
      };
    }

    const files = fs.readdirSync(postsDir);

    const posts = files
      .filter((f) => f.endsWith('.md'))
      .map((file) => {
        try {
          const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
          const { data, content } = matter(raw);
          
          // Calculate read time
          const wordCount = content.split(/\s+/).length;
          const readTime = Math.ceil(wordCount / 200);
          
          return { 
            ...data, 
            slug: file.replace('.md', ''),
            readTime: data.readTime || `${readTime} min read`,
            content: content.substring(0, 200) + '...' // Preview only
          };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(posts),
    };
  } catch (error) {
    console.error('Error in get-posts function:', error);
    return {
      statusCode: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to fetch posts' }),
    };
  }
};