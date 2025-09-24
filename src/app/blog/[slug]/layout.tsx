import { cn } from '~/lib/utils';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        'prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white',
        'md:col-span-2',
        'prose-h1:first-of-type:mt-0',
      )}
    >
      {children}
    </div>
  );
}
