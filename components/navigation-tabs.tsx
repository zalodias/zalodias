'use client';

import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-grow flex-col gap-2">
      {navigation.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex gap-3 rounded-lg border px-3 py-2 ${
              isActive
                ? 'border-border-neutral-default bg-background-neutral-subtle text-foreground-neutral-default'
                : 'border-transparent text-foreground-neutral-faded hover:text-foreground-neutral-default'
            }`}
          >
            {item.icon}
            <p className="text-body-large-subtle">{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}
