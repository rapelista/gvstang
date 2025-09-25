import Link from 'next/link';
import { Suspense } from 'react';

import { GitHub } from '~/assets/svg/github';
import { LinkedIn } from '~/assets/svg/linked-in';
import { BrandLoading } from '~/components/brand-loading';
import { BrandWrapper } from '~/components/brand-wrapper';
import { Navbar } from '~/components/navbar';
import { fontMono, fontSans } from '~/configs/fonts';
import { cn } from '~/lib/utils';

import '~/styles/globals.css';

export { metadata } from '~/configs/site';

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning={true}>
      <body className={cn(fontSans.variable, fontMono.variable)}>
        <div className="container mx-auto max-w-[1440px] min-h-[calc(100svh-3.25rem)] md:min-h-[calc(100svh-4.25rem)]">
          <div
            className={cn(
              'grid md:grid-cols-3 lg:grid-cols-4',
              'pt-4 pb-8 [&>*]:px-6 gap-y-6',
              'md:pt-8 md:pb-12 md:[&>*]:px-12 md:gap-y-12',
            )}
          >
            <div className="space-y-6">
              <Suspense fallback={<BrandLoading />}>
                <BrandWrapper />
              </Suspense>

              <Navbar />

              <ul className="flex gap-2">
                <li>
                  <Link href="https://github.com/rapelista" target="_blank">
                    <GitHub height={16} width={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/farihakmal"
                    target="_blank"
                  >
                    <LinkedIn height={16} width={16} />
                  </Link>
                </li>
              </ul>
            </div>

            {children}
          </div>
        </div>

        <footer className="max-w-sm mx-auto text-center text-sm h-13 md:h-17">
          Made with ♥ by Gvstang &mdash; 2025
        </footer>
      </body>
    </html>
  );
}
