'use client';

import { Clock } from '@/components/clock';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import { Dribbble } from '@/icons/Dribbble';
import { LinkedIn } from '@/icons/LinkedIn';
import { X } from '@/icons/X';
import { getCurrentTime, getWikiFromLocation } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState(
    getCurrentTime(profile.timezone),
  );

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getCurrentTime(profile.timezone));
    };

    const now = new Date();
    const nextMinute = new Date(now.getTime() + (60 - now.getSeconds()) * 1000);
    const timeUntilNextMinute = nextMinute.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      updateCurrentTime();
      const interval = setInterval(updateCurrentTime, 60000);

      return () => clearInterval(interval);
    }, timeUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <aside className="flex w-80 flex-col gap-8 border-r border-border-neutral-default bg-background-neutral-faded px-6 py-4">
      <div className="flex gap-4">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-12 w-12 rounded-full border border-border-neutral-default"
          />
          <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-background-positive-default" />
        </div>
        <div className="flex flex-col">
          <p className="text-body-large-strong">{profile.name}</p>
          <p className="text-foreground-neutral-faded">{profile.title}</p>
        </div>
      </div>
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
      <div className="flex flex-col gap-5">
        <p className="text-foreground-neutral-faded">{profile.bio}</p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-background-positive-default" />
          <p className="text-foreground-neutral-faded">
            <a href={getWikiFromLocation(profile.location)}>
              {profile.location}
            </a>
            {`, `}
            <Clock />
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
        </div>
      </div>
    </aside>
  );
}
