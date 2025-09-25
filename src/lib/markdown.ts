import type { Toc } from '@stefanprobst/rehype-extract-toc';
import type { Metadata } from 'next';

import { readdirSync } from 'node:fs';
import path from 'node:path';

/**
 * Filter TOC to exclude headings with depth 1, but preserve their children
 */
export function filterTocDepthOne(toc: Toc): Toc {
  const result: Toc = [];

  for (const item of toc) {
    if (item.depth === 1) {
      // If it's depth 1, add its children to the result (if any)
      if (item.children) {
        result.push(...filterTocDepthOne(item.children));
      }
    } else {
      // If it's not depth 1, keep the item and recursively filter its children
      result.push({
        ...item,
        children: item.children ? filterTocDepthOne(item.children) : undefined,
      });
    }
  }

  return result;
}

interface MarkdownMetadata extends Metadata {
  published?: string;
}

function getMarkdownFileNames(directory: string): string[] {
  return readdirSync(directory).filter((file) => path.extname(file) === '.mdx');
}

export async function getBlogPostData(file: string): Promise<{
  metadata: MarkdownMetadata;
  toc: Toc;
  Component: React.ComponentType;
}> {
  const {
    metadata,
    toc,
    default: Component,
  } = await import('~/markdown/blog/' + file);

  return { metadata, toc, Component };
}

async function getBlogPostsData(directory: string): Promise<
  {
    slug: string;
    metadata: Metadata;
    published?: Date;
    toc: Toc;
  }[]
> {
  const files = getMarkdownFileNames(directory);

  return await Promise.all(
    files.map(async (file) => {
      const {
        metadata: { published, ...metadata },
        toc,
      } = await getBlogPostData(file);

      return {
        slug: file.replace(/\.mdx?$/, ''),
        metadata,
        published: published ? new Date(published) : undefined,
        toc,
      };
    }),
  );
}

export async function getBlogPosts(): Promise<
  {
    slug: string;
    metadata: Metadata;
    published?: Date;
    toc: Toc;
  }[]
> {
  return await getBlogPostsData(
    path.join(process.cwd(), 'src', 'markdown', 'blog'),
  );
}
