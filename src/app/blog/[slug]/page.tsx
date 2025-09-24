import { getBlogPosts } from '~/lib/markdown';

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
  const slugs = getBlogPosts().map((post) => post.slug);

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) return;

  return post.metadata;
}

export const dynamicParams = false;
