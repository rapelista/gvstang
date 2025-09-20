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
          <Suspense fallback={<BrandLoading />}>
            <BrandWrapper />
          </Suspense>

          {children}
        </div>
      </body>
    </html>
  );
}
