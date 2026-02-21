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
        'border-border-neutral-subtle bg-background-neutral-faded hover:bg-background-neutral-subtle text-body-large-default placeholder:text-foreground-neutral-faded focus:border-border-neutral-default min-w-0 grow rounded-lg border px-4 py-3 transition outline-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
