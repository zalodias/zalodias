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
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.key);

      if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
        e.preventDefault();

        setIsCollapsed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <aside className="border-border-neutral-faded bg-background-neutral-faded sticky top-0 z-10 hidden h-screen w-80 flex-col gap-8 border-r px-6 py-4 lg:flex">
      <Profile />
      <nav className="flex grow flex-col gap-2">
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
              <p className="text-body-large-subtle grow">{item.label}</p>
              <Hotkey>{item.shortcut}</Hotkey>
            </NavigationLink>
          );
        })}
      </nav>
      <div className="flex flex-col gap-5">
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
