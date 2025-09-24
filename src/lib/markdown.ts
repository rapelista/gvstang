import { readdirSync } from 'node:fs';
import path from 'node:path';

export function getMarkdownFileNames(): string[] {
  const blogPostsDir = path.join(process.cwd(), 'src/markdown/blog');

  return readdirSync(blogPostsDir).map((file) => file.replace(/\.md?$/, ''));
}
