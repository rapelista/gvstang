import { getBlogPosts } from './markdown';

export async function getOrderedPosts() {
  const posts = await getBlogPosts();

  return posts.sort((a, b) => {
    if (a.published && b.published) {
      return b.published.getTime() - a.published.getTime();
    }

    if (a.published) return -1;
    if (b.published) return 1;

    return 0;
  });
}

export async function getRecentPosts() {
  const orderedPosts = await getOrderedPosts();

  return orderedPosts.slice(0, 3);
}
