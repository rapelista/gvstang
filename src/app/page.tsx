import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home — Gvstang',
};

export default function Page() {
  return (
    <main className="md:col-span-2 space-y-6">
      <hr className="md:hidden" />

      <h1 className="text-4xl font-medium">Home</h1>

      <hr />

      <h3 className="text-xl font-medium">About</h3>

      <p>
        My name is <span className="font-semibold">Akmal</span>, a software
        engineer based in Malang, Indonesia. I love building things for the web.{' '}
        <i>Write code, read books, and play games.</i>
      </p>

      <h3 className="text-xl font-medium mt-12">Recent Posts</h3>

      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="h-40 aspect-video bg-accent animate-pulse" />
      ))}

      <h3 className="text-xl font-medium mt-12">Curated Projects</h3>

      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="h-40 aspect-video bg-accent animate-pulse" />
      ))}
    </main>
  );
}
