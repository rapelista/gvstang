import type { MDXComponents } from 'mdx/types';

import { CodePreview } from '~/components/code-preview';

const components = {
  pre: CodePreview,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
