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
      className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-foreground-neutral-faded transition hover:text-foreground-neutral-default aria-[current=page]:border-border-neutral-subtle aria-[current=page]:bg-background-neutral-subtle aria-[current=page]:text-foreground-neutral-default"
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
