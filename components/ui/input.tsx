import { mergeTailwindClassNames as cn } from '@/lib/utils';

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'ring-border-neutral-subtle bg-background-neutral-faded hover:bg-background-neutral-subtle text-body-large-subtle placeholder:text-foreground-neutral-faded focus:ring-border-neutral-default min-w-0 grow rounded-lg px-4 py-3 ring-1 transition outline-none ring-inset disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
