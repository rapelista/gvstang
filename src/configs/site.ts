import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s — Gvstang',
    default: 'Gvstang',
  },

  description: 'A technical blog about Frontend, Typescript, and React.',

  keywords: [
    'gvstang',
    'blog',
    'frontend',
    'typescript',
    'react',
    'javascript',
    'web development',
    'programming',
    'software engineering',
    'coding',
  ],

  authors: [
    {
      name: 'Farih Akmal Haqiqi',
      url: 'https://www.gvstang.com',
    },
  ],

  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://www.gvstang.com')
      : undefined,

  twitter: {
    card: 'summary_large_image',
  },

  openGraph: {
    siteName: 'Gvstang',
    type: 'website',
    url: 'https://www.gvstang.com',
  },
};
