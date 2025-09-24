import type { Metadata } from 'next';

import { readdirSync } from 'node:fs';
import path from 'node:path';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  const blogPostsDir = path.join(process.cwd(), 'src/markdown/blog');
  const files = readdirSync(blogPostsDir).map((file) =>
    file.replace(/\.md?$/, ''),
  );

  return (
    <main className="md:col-span-2 space-y-6">
      <h1 className="text-4xl font-medium">Blog</h1>

      <hr className="opacity-10" />

      <ul>
        {files.map((file, key) => (
          <li key={key}>
            <Link className="capitalize" href={`/blog/${file}`}>
              {file}
            </Link>
          </li>
        ))}
      </ul>

      <hr className="opacity-10" />

      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="h-40 aspect-video bg-accent animate-pulse" />
      ))}
    </main>
  );
}
