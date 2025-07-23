const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async (event, context) => {
  try {
    const { slug } = event.queryStringParameters || {};
    
    if (!slug) {
      return {
        statusCode: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Slug parameter is required' }),
      };
    }

    const postsDir = path.resolve('content/blog');
    const files = fs.readdirSync(postsDir);
    
    // Find the file that ends with the slug
    const matchingFile = files.find(file => 
      file.endsWith('.md') && file.includes(slug)
    );

    if (!matchingFile) {
      return {
        statusCode: 404,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Post not found' }),
      };
    }

    const raw = fs.readFileSync(path.join(postsDir, matchingFile), 'utf8');
    const { data, content } = matter(raw);
    
    // Calculate read time
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    const post = {
      ...data,
      content,
      slug: matchingFile.replace('.md', ''),
      readTime: data.readTime || `${readTime} min read`
    };

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(post),
    };
  } catch (error) {
    console.error('Error in get-post function:', error);
    return {
      statusCode: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to fetch post' }),
    };
  }
};