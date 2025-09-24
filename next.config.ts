import type { NextConfig } from 'next';

import createMdx from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    ppr: 'incremental',
  },
};

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'metadata' }],
      'remark-gfm',
    ],
    rehypePlugins: [
      'rehype-slug',
      '@stefanprobst/rehype-extract-toc',
      ['@stefanprobst/rehype-extract-toc/mdx', { name: 'toc' }],
    ],
  },
});

export default withMdx(nextConfig);
