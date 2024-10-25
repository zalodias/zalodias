import { Profile } from '@/components/profile';
import { Bell } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex gap-5 border-b border-border-neutral-default bg-gradient-to-b from-background-neutral-default to-background-neutral-default/80 p-5 backdrop-blur lg:hidden">
      <Profile className="flex-grow" />
      <Link
        href="/dissections"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border-neutral-faded bg-background-neutral-faded text-body-medium-subtle text-foreground-neutral-faded hover:bg-background-neutral-subtle hover:text-foreground-neutral-default disabled:pointer-events-none disabled:opacity-50"
      >
        <Bell width={20} />
      </Link>
    </div>
  );
}
