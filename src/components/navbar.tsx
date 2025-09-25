import { cn } from '~/lib/utils';

export function Navbar({ children }: React.PropsWithChildren) {
  return (
    <div className={cn('space-y-6', 'min-md:max-lg:col-span-3')}>
      {children}
    </div>
  );
}
