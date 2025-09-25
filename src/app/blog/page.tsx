import type { Metadata } from 'next';

import Link from 'next/link';

import { Badge } from '~/components/ui/badge';
import { getOrderedPosts } from '~/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const posts = await getOrderedPosts();

  return (
    <main className="min-md:max-lg:col-span-full lg:col-span-2 space-y-6">
      <hr className="md:hidden" />

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
                <p className="text-3xl font-semibold max-w-11/12 text-wrap line-clamp-2">
                  {post.metadata.title?.toString()}
                </p>

                <p className="line-clamp-3 text-accent-foreground/90 group-hover:text-accent-foreground transition-colors duration-200">
                  {post.metadata.description ||
                    'Oops, no description available.'}
                </p>
              </Link>

              <div className="flex items-center justify-between">
                {keywords.length > 0 ? (
                  <div className="flex gap-2">
                    {keywords.map((keyword, key) => (
                      <Badge key={key} className="capitalize" variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                ) : null}

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
    </main>
  );
}
