import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <main className="md:col-span-2 space-y-6">
      <hr className="md:hidden" />

      <h1 className="text-4xl font-medium">Projects</h1>

      <hr />

      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="h-40 aspect-video bg-accent animate-pulse" />
      ))}
    </main>
  );
}
