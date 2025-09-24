'use client';

import { useState } from 'react';

import { WORDS } from '~/lib/constants';
import { getRandomInt } from '~/lib/utils';

import { BrandLink } from './brand-link';

interface BrandProps {
  initialIndex: number;
}

export function Brand({ initialIndex }: BrandProps) {
  const [index, setIndex] = useState<number | null>(null);
  const word = WORDS[index || initialIndex];

  return (
    <div>
      <BrandLink
        onClick={() => {
          setIndex((prev) => {
            let index = null;

            do {
              index = getRandomInt(WORDS.length);
            } while (index === prev);

            return index;
          });
        }}
      />

      <pre className="font-light italic">{word}</pre>
    </div>
  );
}
