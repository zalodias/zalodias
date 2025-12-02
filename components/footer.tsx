'use client';

import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  return (
    <nav className="from-background-neutral-default to-background-neutral-default/80 ring-border-neutral-faded fixed inset-x-0 bottom-0 z-10 grid grid-flow-col bg-linear-to-t ring backdrop-blur-sm lg:hidden">
      {navigation.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            aria-label={item.label}
            className={`grid w-full justify-center pt-4 pb-8 ${
              isActive
                ? 'text-foreground-neutral-default'
                : 'text-foreground-neutral-faded hover:text-foreground-neutral-default'
            }`}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
}
