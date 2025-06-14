import { mergeTailwindClassNames as cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'from-background-neutral-faded to-background-neutral-subtle text-body-medium-subtle inset-shadow-foreground-neutral-default/10 inline-flex items-center rounded-full bg-linear-to-b px-2 py-0.5 inset-shadow-xs',
        className,
      )}
    >
      {children}
    </span>
  );
}
