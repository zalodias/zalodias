'use client';

import { Dribbble } from '@/assets/icons/Dribbble';
import { GitHub } from '@/assets/icons/GitHub';
import { LinkedIn } from '@/assets/icons/LinkedIn';
import { Twitter } from '@/assets/icons/Twitter';
import { Hotkey } from '@/components/hotkey';
import { Profile } from '@/components/profile';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { getWikiFromLocation } from '@/lib/utils';
import { NavigationLink } from './navigation-link';

export function Sidebar() {
  const currentTime = useCurrentTime();

  return (
    <aside className="sticky top-0 z-10 hidden h-screen w-80 flex-col gap-8 border-r border-border-neutral-faded bg-background-neutral-faded px-6 py-4 lg:flex">
      <Profile />
      <nav className="flex flex-grow flex-col gap-2">
        {navigation.map((item) => {
          return (
            <NavigationLink
              key={item.path}
              path={item.path}
              shortcut={item.shortcut}
              label={item.label}
              icon={item.icon}
            >
              {item.icon}
              <p className="flex-grow text-body-large-subtle">{item.label}</p>
              <Hotkey>{item.shortcut}</Hotkey>
            </NavigationLink>
          );
        })}
      </nav>
      <div className="flex flex-col gap-5">
        <p className="whitespace-pre-line text-balance text-foreground-neutral-faded">
          {profile.tagline}
        </p>
        <div className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-background-positive-default opacity-80" />
            <span className="relative inline-flex size-full rounded-full bg-background-positive-default" />
          </span>
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
            className="p-2 text-foreground-neutral-faded transition hover:text-foreground-neutral-default"
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            href={`https://linkedin.com/in/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded transition hover:text-foreground-neutral-default"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href={`https://dribbble.com/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded transition hover:text-foreground-neutral-default"
            target="_blank"
          >
            <Dribbble />
          </a>
          <a
            href={`https://github.com/${profile.handle}`}
            className="p-2 text-foreground-neutral-faded transition hover:text-foreground-neutral-default"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </aside>
  );
}
