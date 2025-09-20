"use client";

import Link from "next/link";
import { useState } from "react";
import { WORDS } from "~/lib/constants";
import { getRandomInt } from "~/lib/utils";

interface BrandProps {
  initialIndex: number;
}

export function Brand({ initialIndex }: BrandProps) {
  const [index, setIndex] = useState<number | null>(null);
  const word = WORDS[index || initialIndex];

  return (
    <div>
      <Link
        href="/"
        className="text-2xl font-medium"
        onClick={() => {
          setIndex((prev) => {
            let index = null;

            do {
              index = getRandomInt(WORDS.length);
            } while (index === prev);

            return index;
          });
        }}
      >
        Gvstang
      </Link>
      <pre className="font-light italic">{word}</pre>
    </div>
  );
}
