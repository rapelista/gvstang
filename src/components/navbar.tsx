'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '~/lib/utils';

export function Navbar() {
  const segment = useSelectedLayoutSegment();
  const isActive = (path: string) => '/' + segment === path;

  return (
    <ul className="text-lg">
      <li>
        <Link className="inline-flex items-center gap-1" href="/blog">
          <span
            className={cn(
              'leading-0 pt-1.5 transition-colors duration-200',
              isActive('/blog') ? 'text-unset' : 'text-accent',
            )}
          >
            **
          </span>
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link className="inline-flex items-center gap-1" href="/projects">
          <span
            className={cn(
              'leading-0 pt-1.5 transition-colors duration-200',
              isActive('/projects') ? 'text-unset' : 'text-accent',
            )}
          >
            **
          </span>
          <span>Projects</span>
        </Link>
      </li>
    </ul>
  );
}
