export default function Page() {
  return (
    <main className="md:col-span-2 space-y-6">
      <h1 className="text-4xl font-medium">Home</h1>

      <hr className="opacity-10" />

      <h3 className="text-xl font-medium">About</h3>

      <p>
        My name is <span className="font-semibold">Akmal</span>, a software
        engineer based in Malang, Indonesia. I love building things for the web.{" "}
        <i>Write code, read books, and play games.</i>
      </p>

      <h3 className="text-xl font-medium mt-12">Recent Posts</h3>

      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="h-40 aspect-video bg-white/10 animate-pulse"
        ></div>
      ))}

      <h3 className="text-xl font-medium mt-12">Curated Projects</h3>

      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="h-40 aspect-video bg-white/10 animate-pulse"
        ></div>
      ))}
    </main>
  );
}
