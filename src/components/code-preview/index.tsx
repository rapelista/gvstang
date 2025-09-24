import { codeToHtml } from 'shiki';

export function CodePreview(props: React.ComponentProps<'pre'>) {
  const child = props.children as React.ReactElement;
  const childProps = child.props as React.ComponentProps<'code'>;
  const childClassName = childProps.className || '';
  const language = childClassName.replace('language-', '');
  const sourceCode = childProps.children?.toString();

  return <Shiki lang={language}>{sourceCode}</Shiki>;
}

interface ShikiProps extends React.ComponentProps<'div'> {
  lang: string;
}

async function Shiki({ lang, ...props }: ShikiProps) {
  const out = await codeToHtml(props.children?.toString() || '', {
    lang,
    theme: 'github-dark',
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
