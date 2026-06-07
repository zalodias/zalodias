import { mergeTailwindClassNames as cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        className,
        'mx-auto flex w-full max-w-(--breakpoint-lg) grow flex-col gap-15 px-5 pt-10 pb-30 md:gap-20 lg:px-15 lg:pt-15 lg:pb-15',
      )}
    >
      {children}
    </main>
  );
}
