import { Handler } from '@netlify/functions';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const handler: Handler = async () => {
  const postsDir = path.resolve('content/blog');
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(raw);
      return { ...data, slug: file.replace('.md', '') };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(posts),
  };
};

export { handler };