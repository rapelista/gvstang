import { Geist_Mono as Mono, Geist as Sans } from "next/font/google";

export const fontSans = Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
