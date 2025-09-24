import { getBlogPostData, getBlogPosts } from '~/lib/markdown';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Component } = await getBlogPostData(`${slug}.mdx`);

  return <Component />;
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
  const { metadata } = await getBlogPostData(`${slug}.mdx`);

  return metadata;
}

export const dynamicParams = false;
