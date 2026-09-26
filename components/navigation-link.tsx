'use client';

import { NavigationItem } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationLink({
  path,
  label,
  children,
}: NavigationItem & { children?: React.ReactNode }) {
  const pathname = usePathname();
  const isActive =
    pathname === path || (path !== '/' && pathname.startsWith(`${path}/`));

  return (
    <Link
      href={path}
      className="text-foreground-neutral-faded hover:text-foreground-neutral-default aria-[current=page]:text-foreground-neutral-default flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors"
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
