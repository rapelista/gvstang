import { Brand } from "~/components/brand";
import { fontMono, fontSans } from "~/configs/fonts";
import { WORDS } from "~/lib/constants";
import { cn, getRandomInt } from "~/lib/utils";

import "~/styles/globals.css";

export { metadata } from "~/configs/site";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialIndex = getRandomInt(WORDS.length);

  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable)}>
      <body>
        <div className="container mx-auto max-w-[1440px]">
          <Brand initialIndex={initialIndex} />

          {children}
        </div>
      </body>
    </html>
  );
}
