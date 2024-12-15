'use client';

import { NavigationItem } from '@/data/navigation';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function NavigationLink({
  path,
  shortcut,
  label,
  children,
}: NavigationItem & { children?: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === shortcut) {
        e.preventDefault();
        router.push(path);
      }
    });
  }, [router]);

  return (
    <Link
      href={path}
      className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${
        isActive
          ? 'border-border-neutral-subtle bg-background-neutral-subtle text-foreground-neutral-default'
          : 'border-transparent text-foreground-neutral-faded hover:text-foreground-neutral-default'
      }`}
      aria-label={label}
    >
      {children}
    </Link>
  );
}
