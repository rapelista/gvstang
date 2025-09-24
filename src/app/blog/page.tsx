import type { Metadata } from 'next';

import Link from 'next/link';

import { getBlogPosts } from '~/lib/markdown';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  const posts = getBlogPosts();

  return (
    <main className="md:col-span-2 space-y-6">
      <h1 className="text-4xl font-medium">Blog</h1>

      <hr className="opacity-10" />

      <ul>
        {posts.map((post, key) => (
          <li key={key}>
            <Link className="capitalize" href={`/blog/${post.slug}`}>
              {post.metadata.title?.toString()}
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
