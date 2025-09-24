import Link from 'next/link';
import { Suspense } from 'react';

import { BrandLoading } from '~/components/brand-loading';
import { BrandWrapper } from '~/components/brand-wrapper';
import { ThemeProvider } from '~/components/theme-provider';
import { ThemeSwitcher } from '~/components/theme-switcher';
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
    <html
      suppressHydrationWarning
      className={cn(fontSans.variable, fontMono.variable)}
      lang="en"
    >
      <body>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
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

                <ul className="text-lg">
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                </ul>

                <ThemeSwitcher />
              </div>

              {children}
            </div>
          </div>
        </ThemeProvider>

        <footer className="max-w-sm mx-auto text-center text-sm pb-8 md:pb-12">
          Made with ♥ by Gvstang &mdash; 2025
        </footer>
      </body>
    </html>
  );
}
