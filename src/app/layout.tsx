import type { Metadata } from "next";
import { DM_Sans, Forum, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const forumSerif = Forum({
  variable: "--font-forum-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akmal",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${forumSerif.variable} ${dmSans.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
