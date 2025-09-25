'use client';

import { Menu } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export function ToCWrapper({ children }: React.PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={ref}
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
        className={cn(
          'md:hidden',
          'fixed bottom-6 right-6 h-12 w-12 rounded-full',
        )}
        size="icon"
        variant="secondary"
        onClick={() => {
          if (ref.current) {
            const isHidden = ref.current.getAttribute('data-hidden') === 'true';

            if (isHidden) {
              ref.current.setAttribute('data-hidden', 'false');
            } else {
              ref.current.setAttribute('data-hidden', 'true');
            }
          }
        }}
      >
        <Menu />
      </Button>
    </>
  );
}
