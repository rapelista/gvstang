import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gvstang',
    short_name: 'Gvstang',
    description: 'A technical blog about Frontend, Typescript, and React.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
  };
}
