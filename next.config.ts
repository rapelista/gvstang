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
      'remark-heading-id',
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'metadata' }],
      'remark-gfm',
      'remark-toc',
    ],
  },
});

export default withMdx(nextConfig);
