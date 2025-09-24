'use client';

import { ThemeProvider } from './theme-provider';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
}
