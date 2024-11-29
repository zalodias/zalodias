'use client';

import { Profile } from '@/components/profile';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { Dribbble } from '@/icons/Dribbble';
import { GitHub } from '@/icons/GitHub';
import { LinkedIn } from '@/icons/LinkedIn';
import { X } from '@/icons/X';
import { getWikiFromLocation } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const currentTime = useCurrentTime();

  return (
    <aside className="sticky top-0 z-10 hidden h-screen w-80 flex-col gap-8 border-r border-border-neutral-faded bg-background-neutral-faded px-6 py-4 lg:flex">
      <Profile />
      <nav className="flex flex-grow flex-col gap-2">
        {navigation.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex gap-3 rounded-lg border px-3 py-2 ${
                isActive
                  ? 'border-border-neutral-subtle bg-background-neutral-subtle text-foreground-neutral-default'
                  : 'border-transparent text-foreground-neutral-faded hover:text-foreground-neutral-default'
              }`}
            >
              {item.icon}
              <p className="text-body-large-subtle">{item.label}</p>
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-5">
        <p className="whitespace-pre-line text-balance text-foreground-neutral-faded">
          {profile.bio}
        </p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-background-positive-default" />
          <p className="text-foreground-neutral-faded">
            <a
              className="hover:text-foreground-neutral-default"
              href={getWikiFromLocation(profile.location)}
              target="_blank"
            >
              {profile.location}
            </a>
            {`, `}
            <span>{currentTime}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={`https://x.com/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            <X />
          </a>
          <a
            href={`https://linkedin.com/in/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            <LinkedIn />
          </a>
          <a
            href={`https://dribbble.com/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            <Dribbble />
          </a>
          <a
            href={`https://github.com/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </aside>
  );
}
