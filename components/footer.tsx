'use client';

import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  return (
    <nav className="border-border-neutral-faded from-background-neutral-default to-background-neutral-default/80 fixed inset-x-0 bottom-0 z-10 grid grid-flow-col border-t bg-linear-to-t backdrop-blur-sm lg:hidden">
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
