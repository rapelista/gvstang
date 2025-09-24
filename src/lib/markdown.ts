import type { Metadata } from 'next';

import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

function getMarkdownFiles(directory: string): string[] {
  return readdirSync(directory).filter((file) => path.extname(file) === '.md');
}

function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Record<string, string> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();

    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim()] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function readMarkdownFile(path: string): {
  metadata: Metadata;
  content: string;
} {
  const rawContent = readFileSync(path, 'utf-8');

  return parseFrontmatter(rawContent);
}

function getMarkdownData(directory: string): {
  slug: string;
  metadata: Metadata;
  content: string;
}[] {
  const files = getMarkdownFiles(directory);

  return files.map((file) => {
    const { metadata, content } = readMarkdownFile(path.join(directory, file));
    const slug = path.basename(file, path.extname(file));

    return {
      slug,
      metadata,
      content,
    };
  });
}

export function getBlogPosts(): {
  slug: string;
  metadata: Metadata;
  content: string;
}[] {
  return getMarkdownData(path.join(process.cwd(), 'src', 'markdown', 'blog'));
}
