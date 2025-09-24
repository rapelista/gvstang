import { getBlogPosts, getBlogPostsMetadata } from '~/lib/markdown';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`~/markdown/blog/${slug}.mdx`);

  return <Post />;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = await getBlogPostsMetadata(`${slug}.mdx`);

  return metadata;
}

export const dynamicParams = false;
