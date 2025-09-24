'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '~/components/ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border w-fit rounded-md p-0.5">
      <Button
        size="icon-sm"
        variant={theme === 'system' ? 'secondary' : 'ghost'}
        onClick={() => setTheme('system')}
      >
        <Monitor />
      </Button>
      <Button
        size="icon-sm"
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        onClick={() => setTheme('dark')}
      >
        <Moon />
      </Button>
      <Button
        size="icon-sm"
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        onClick={() => setTheme('light')}
      >
        <Sun />
      </Button>
    </div>
  );
}
