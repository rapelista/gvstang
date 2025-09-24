import type { Metadata } from 'next';

import { readdirSync } from 'node:fs';
import path from 'node:path';

interface MarkdownMetadata extends Metadata {
  excerpt?: string;
}

function getMarkdownFileNames(directory: string): string[] {
  return readdirSync(directory).filter((file) => path.extname(file) === '.mdx');
}

export async function getBlogPostsMetadata(
  file: string,
): Promise<MarkdownMetadata> {
  const { metadata } = await import('~/markdown/blog/' + file);

  return metadata;
}

async function getBlogPostsData(directory: string): Promise<
  {
    slug: string;
    metadata: Metadata;
  }[]
> {
  const files = getMarkdownFileNames(directory);

  return await Promise.all(
    files.map(async (file) => {
      const { excerpt, ...metadata } = await getBlogPostsMetadata(file);

      return {
        slug: file.replace(/\.mdx?$/, ''),
        metadata,
        excerpt,
      };
    }),
  );
}

export async function getBlogPosts(): Promise<
  {
    slug: string;
    metadata: Metadata;
    excerpt?: string;
  }[]
> {
  return await getBlogPostsData(
    path.join(process.cwd(), 'src', 'markdown', 'blog'),
  );
}
