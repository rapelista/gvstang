'use client';

import { Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export function ToCWrapper({ children }: React.PropsWithChildren) {
  const tocRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!tocRef.current) return;
      if (!buttonRef.current) return;

      if (tocRef.current.contains(event.target as Node)) return;
      if (buttonRef.current.contains(event.target as Node)) return;

      const opened = tocRef.current.getAttribute('data-hidden') === 'false';

      if (opened) {
        tocRef.current.setAttribute('data-hidden', 'true');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={tocRef}
        className={cn(
          'sticky top-8 max-h-[calc(100svh-64px)] space-y-2 overflow-hidden',
          'max-md:fixed max-md:bottom-24 max-md:right-6 max-md:backdrop-blur-xl max-md:pt-6 max-md:border max-md:rounded-xl max-md:max-w-[calc(100svw-48px)] max-md:data-[hidden=true]:opacity-0 max-md:data-[hidden=true]:pointer-events-none max-md:transition-opacity max-md:duration-200',
          'pb-16 space-y-4',
        )}
        data-hidden="true"
      >
        {children}
      </div>

      <Button
        ref={buttonRef}
        className={cn(
          'md:hidden',
          'fixed bottom-6 right-6 h-12 w-12 rounded-full',
        )}
        size="icon"
        variant="secondary"
        onClick={() => {
          if (tocRef.current) {
            const isHidden =
              tocRef.current.getAttribute('data-hidden') === 'true';

            if (isHidden) {
              tocRef.current.setAttribute('data-hidden', 'false');
            } else {
              tocRef.current.setAttribute('data-hidden', 'true');
            }
          }
        }}
      >
        <Menu />
      </Button>
    </>
  );
}
