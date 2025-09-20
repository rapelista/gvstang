import { fontMono, fontSans } from "~/configs/fonts";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export { metadata } from "~/configs/site";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
