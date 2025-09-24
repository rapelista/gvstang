import type { Metadata } from 'next';

import Link from 'next/link';

import { Badge } from '~/components/ui/badge';
import { getBlogPosts } from '~/lib/markdown';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="md:col-span-2 space-y-6">
      <h1 className="text-4xl font-medium">Blog</h1>

      <hr />

      <ul className="space-y-8">
        {posts.map((post, key) => {
          const keywords = Array.from(post.metadata.keywords || []);

          return (
            <li key={key} className="space-y-4">
              <Link
                className="group block space-y-2"
                href={`/blog/${post.slug}`}
              >
                <p className="text-3xl font-semibold max-w-3/4 text-wrap line-clamp-2">
                  {post.metadata.title?.toString()}
                </p>

                <p className="line-clamp-3 text-accent-foreground/90 group-hover:text-accent-foreground transition-colors duration-200">
                  {post.excerpt || 'Oops, no excerpt available.'}
                </p>
              </Link>

              {keywords.length > 0 ? (
                <div className="flex gap-2">
                  {keywords.map((keyword, key) => (
                    <Badge key={key} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
