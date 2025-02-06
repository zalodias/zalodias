import { Profile } from '@/components/profile';

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex gap-5 border-b border-border-neutral-faded bg-linear-to-b from-background-neutral-default to-background-neutral-default/80 p-5 backdrop-blur-sm lg:hidden">
      <Profile className="grow" />
    </div>
  );
}
