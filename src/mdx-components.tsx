import type { MDXComponents } from 'mdx/types';

const components = {
  wrapper: (props) => <div className="mdx-wrapper" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
