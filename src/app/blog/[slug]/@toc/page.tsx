import Link from 'next/link';

import { filterTocDepthOne, getBlogPostData } from '~/lib/markdown';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { toc } = await getBlogPostData(`${slug}.mdx`);

  // Filter out headings with depth 1
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
    <>
      <h3>Table of Contents</h3>
      {renderToc(filteredToc)}
    </>
  );
}
