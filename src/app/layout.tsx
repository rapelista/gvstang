import { Suspense } from 'react';

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(fontSans.variable, fontMono.variable, 'dark')}>
        <div className="container mx-auto max-w-[1440px]">
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
            </div>

            {children}
          </div>
        </div>

        <footer className="max-w-sm mx-auto text-center text-sm pb-8 md:pb-12">
          Made with ♥ by Gvstang &mdash; 2025
        </footer>
      </body>
    </html>
  );
}
