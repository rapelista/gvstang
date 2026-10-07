import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <main className="min-md:max-lg:col-span-full lg:col-span-2 space-y-6">
      <hr className="md:hidden" />

      <h1 className="text-4xl font-medium">Projects</h1>

      <hr />

      <p className="text-2xl font-medium">Coming Soon</p>
      <p className="text-muted-foreground">
        Sesuatu yang menarik sedang saya racik. Nantikan proyek-proyek terbaik
        saya di sini.
      </p>
    </main>
  );
}
