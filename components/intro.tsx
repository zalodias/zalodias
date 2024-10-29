interface IntroProps {
  title: string;
  description: string;
}

export function Intro({ title, description }: IntroProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-title-large-strong">{title}</h1>
      <h2 className="text-body-large-default text-foreground-neutral-subtle">
        {description}
      </h2>
    </div>
  );
}
