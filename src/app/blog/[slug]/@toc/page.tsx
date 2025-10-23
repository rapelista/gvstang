import Link from 'next/link';

import {
  filterTocDepthOne,
  getBlogPostData,
  getBlogPosts,
} from '~/lib/markdown';
import { cn } from '~/lib/utils';

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { toc } = await getBlogPostData(`${slug}.mdx`);

  const filteredToc = filterTocDepthOne(toc);

  const renderToc = (items: typeof toc) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id || ''}`}>{item.value}</Link>
            {item.children && renderToc(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={cn(
        'prose prose-li:text-sm prose-a:no-underline prose-a:text-accent-foreground/90 prose-a:hover:text-accent-foreground dark:prose-invert prose-headings:font-semibold prose-headings:text-black prose-h3:text-3xl dark:prose-headings:text-white',
      )}
    >
      {renderToc(filteredToc)}
    </div>
  );
}
