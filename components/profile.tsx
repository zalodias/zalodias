import { profile } from '@/data/profile';

export function Profile() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="size-12 rounded-full border border-border-neutral-default"
        />
        <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-background-positive-default" />
      </div>
      <div className="flex flex-col">
        <p className="text-body-large-strong">{profile.name}</p>
        <p className="text-foreground-neutral-faded">{profile.title}</p>
      </div>
    </div>
  );
}
