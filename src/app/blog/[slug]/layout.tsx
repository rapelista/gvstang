import { ToCWrapper } from '~/components/toc/wrapper';
import { cn } from '~/lib/utils';

export default function Layout({
  children,
  toc,
}: React.PropsWithChildren<{
  toc: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:hidden px-4 w-full">
        <hr />
      </div>

      <div
        className={cn(
          'max-w-screen',
          'prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white',
          'prose-h1:first-of-type:mt-0',
          'md:col-span-2',
        )}
      >
        {children}
      </div>

      <ToCWrapper>
        <h3 className="text-xl font-semibold">Table of Contents</h3>
        <div className="h-full overflow-y-scroll">{toc}</div>
      </ToCWrapper>
    </>
  );
}
