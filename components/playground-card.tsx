interface PlaygroundCardProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

export function PlaygroundCard({ title, date, children }: PlaygroundCardProps) {
  return (
    <div className="bg-background-neutral-faded border-border-neutral-faded after:from-background-neutral-default relative isolate grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-t after:to-transparent">
      {children}
      <div className="absolute inset-x-4 bottom-4 z-20 flex justify-between">
        <span className="text-body-medium-subtle">{title}</span>
        <span className="text-body-medium-subtle text-foreground-neutral-subtle">
          {date}
        </span>
      </div>
    </div>
  );
}
