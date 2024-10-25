'use client';

import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 grid grid-flow-col border-t border-border-neutral-default bg-background-neutral-default/80 backdrop-blur lg:hidden">
      {navigation.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`grid w-full justify-center pb-8 pt-4 ${
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
