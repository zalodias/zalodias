import { profile } from '@/data/profile';

export function Header() {
  return (
    <div className="border-border-neutral-faded from-background-neutral-default to-background-neutral-default/80 sticky top-0 z-10 flex gap-5 border-b bg-linear-to-b p-5 backdrop-blur-sm lg:hidden">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="border-border-neutral-faded size-12 rounded-full border"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-body-large-strong">{profile.name}</p>
          <p className="text-foreground-neutral-faded">{profile.title}</p>
        </div>
      </div>
    </div>
  );
}
