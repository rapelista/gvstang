"use client";

import { Hero } from "./-components/hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <div className="container mx-auto my-54 px-8 flex items-center justify-center">
        <p className="text-4xl text-center font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex similique
          eius quae harum modi quam temporibus vitae, consequatur illo non neque
          beatae explicabo totam praesentium est dolore, dolores assumenda enim.
        </p>
      </div>
    </div>
  );
}
