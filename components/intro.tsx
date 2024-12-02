interface IntroProps {
  title: string;
  children: React.ReactNode;
}

export function Intro({ title, children }: IntroProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-title-large-strong">{title}</h1>
      <h2 className="text-body-large-default text-foreground-neutral-subtle">
        {children}
      </h2>
    </div>
  );
}
