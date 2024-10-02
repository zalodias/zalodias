import { cn } from '@/lib/utils';

interface AppIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function AppIcon({ icon, title, description, className }: AppIconProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="rounded-xl border border-border-neutral-faded bg-background-neutral-faded p-2">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-body-medium-strong">{title}</p>
        <p className="text-body-medium-default text-foreground-neutral-faded">
          {description}
        </p>
      </div>
    </div>
  );
}
