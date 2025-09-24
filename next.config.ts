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
    remarkPlugins: ['remark-frontmatter'],
  },
});

export default withMdx(nextConfig);
