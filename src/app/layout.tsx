import Link from "next/link";
import { Suspense } from "react";
import { BrandLoading } from "~/components/brand-loading";
import { BrandWrapper } from "~/components/brand-wrapper";
import { fontMono, fontSans } from "~/configs/fonts";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export { metadata } from "~/configs/site";

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable)}>
      <body>
        <div className="container mx-auto max-w-[1440px]">
          <div
            className={cn(
              "grid md:grid-cols-3 lg:grid-cols-4",
              "pt-4 [&>*]:px-6 gap-y-6",
              "md:pt-8 md:[&>*]:px-12 md:gap-y-12"
            )}
          >
            <div className="space-y-6">
              <Suspense fallback={<BrandLoading />}>
                <BrandWrapper />
              </Suspense>

              <ul className="text-lg">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Projects</Link>
                </li>
              </ul>
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
