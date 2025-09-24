import { getMarkdownFileNames } from '~/lib/markdown';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`~/markdown/blog/${slug}.md`);

  return <Post />;
}

export function generateStaticParams() {
  const slugs = getMarkdownFileNames();

  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
