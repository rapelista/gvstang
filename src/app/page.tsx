import type { Metadata } from 'next';

import Link from 'next/link';

import { Badge } from '~/components/ui/badge';
import { getRecentPosts } from '~/lib/posts';

export const metadata: Metadata = {
  title: 'Home — Gvstang',
};

export default async function Page() {
  const recentPosts = await getRecentPosts();

  return (
    <main className="md:col-span-2 space-y-6">
      <hr className="md:hidden" />

      <h1 className="text-4xl font-medium">Home</h1>

      <hr />

      <h2 className="text-xl font-medium">About</h2>

      <p>
        My name is <span className="font-semibold">Akmal</span>, a software
        engineer based in Malang, Indonesia. I love building things for the web.{' '}
        <i>Write code, read books, and play games.</i>
      </p>

      <h2 className="text-xl font-medium mt-12">Recent Posts</h2>

      <ul className="space-y-6 [&>li]:not-last-of-type:pb-6 divide-y">
        {recentPosts.map((post, key) => {
          const keywords = Array.from(post.metadata.keywords || []);

          return (
            <li key={key} className="space-y-4">
              <Link
                className="space-y-4 block group"
                href={`/blog/${post.slug}`}
              >
                <p className="line-clamp-2 text-lg">
                  {post.metadata.title?.toString()}
                </p>

                <p className="text-accent-foreground/90 hover:text-accent-foreground transition-colors duration-200 line-clamp-3">
                  {post.metadata.description?.toString()}
                </p>
              </Link>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {keywords.map((keyword, key) => (
                    <Badge key={key} className="capitalize" variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>

                <span className="inline-block text-accent-foreground/90 text-sm font-light">
                  {new Date(post.published || '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* <h2 className="text-xl font-medium mt-12">Curated Projects</h2>

      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="h-40 aspect-video bg-accent animate-pulse" />
      ))} */}
    </main>
  );
}
