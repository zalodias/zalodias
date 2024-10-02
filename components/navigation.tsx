import { NavigationTabs } from '@/components/navigation-tabs';
import { profile } from '@/data/profile';
import { Dribbble } from '@/icons/Dribbble';
import { LinkedIn } from '@/icons/LinkedIn';
import { X } from '@/icons/X';

export function Navigation() {
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
      <NavigationTabs />
      <div className="flex flex-col gap-5">
        <p className="text-foreground-neutral-faded">{profile.bio}</p>
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
