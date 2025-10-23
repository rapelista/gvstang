import { BrandWrapper } from '~/components/brand-wrapper';
import { Navbar } from '~/components/navbar';
import { Navlink } from '~/components/navlink';
import { Social } from '~/components/social';
import { fontMono, fontSans } from '~/configs/fonts';
import { cn } from '~/lib/utils';

import '~/styles/globals.css';

export { metadata } from '~/configs/site';

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
            <Navbar>
              <BrandWrapper />

              <Navlink />

              <Social />
            </Navbar>

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
