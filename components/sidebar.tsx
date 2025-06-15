'use client';

import { Dribbble } from '@/assets/icons/Dribbble';
import { GitHub } from '@/assets/icons/GitHub';
import { LinkedIn } from '@/assets/icons/LinkedIn';
import { Twitter } from '@/assets/icons/Twitter';
import { Hotkey } from '@/components/hotkey';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { getWikiFromLocation } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavigationLink } from './navigation-link';

export function Sidebar() {
  const currentTime = useCurrentTime();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
        e.preventDefault();

        setIsCollapsed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      isCollapsed ? '5rem' : '20rem',
    );
  }, [isCollapsed]);

  return (
    <aside
      className={`border-border-neutral-faded bg-background-neutral-faded sticky top-0 z-10 hidden h-screen flex-col gap-8 border-r px-4 py-4 transition-[width] duration-320 lg:flex ${
        isCollapsed ? 'w-20' : 'w-80'
      }`}
    >
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img
              src={profile.avatar}
              alt={profile.name}
              className={`border-border-neutral-faded w-full rounded-full border transition-all ${isCollapsed ? 'size-10' : 'size-12'}`}
            />
          </div>
          <div
            className={`flex flex-col whitespace-nowrap transition-opacity duration-160 ${isCollapsed ? 'opacity-0 delay-0' : 'opacity-100 delay-200'}`}
          >
            <p className="text-body-large-strong">{profile.name}</p>
            <p className="text-foreground-neutral-faded">{profile.title}</p>
          </div>
        </div>
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className={`text-foreground-neutral-faded hover:text-foreground-neutral-default bg-background-neutral-subtle border-border-neutral-subtle absolute -right-[30px] cursor-pointer rounded-full border p-1`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronLeft
            size={16}
            className={`transition-transform duration-320 ${isCollapsed && 'rotate-180'}`}
          />
        </button>
      </div>
      <nav className="flex grow flex-col items-start gap-2">
        {navigation.map((item) => {
          return (
            <NavigationLink
              key={item.path}
              path={item.path}
              shortcut={item.shortcut}
              label={item.label}
              icon={item.icon}
            >
              <div className="flex grow items-center gap-3">
                {item.icon}
                <div
                  className={`transition-opacity duration-160 ${isCollapsed ? 'opacity-0' : 'opacity-100 delay-200'}`}
                >
                  <p className="text-body-large-subtle whitespace-nowrap">
                    {item.label}
                  </p>
                </div>
              </div>
              <div
                className={`transition-opacity duration-160 ${isCollapsed ? 'opacity-0' : 'opacity-100 delay-200'}`}
              >
                <Hotkey>{item.shortcut}</Hotkey>
              </div>
            </NavigationLink>
          );
        })}
      </nav>
      <div
        className={`flex flex-col gap-5 transition-opacity duration-160 ${isCollapsed ? 'opacity-0' : 'opacity-100 delay-200'}`}
      >
        <p className="text-foreground-neutral-faded text-balance whitespace-pre-line">
          {profile.tagline}
        </p>
        <div className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="bg-background-positive-default absolute inline-flex size-full animate-ping rounded-full opacity-80" />
            <span className="bg-background-positive-default relative inline-flex size-full rounded-full" />
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
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default p-2 transition"
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            href={`https://linkedin.com/in/${profile.handle}`}
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default p-2 transition"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href={`https://dribbble.com/${profile.handle}`}
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default p-2 transition"
            target="_blank"
          >
            <Dribbble />
          </a>
          <a
            href={`https://github.com/${profile.handle}`}
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default p-2 transition"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </aside>
  );
}
