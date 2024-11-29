interface NoteCardProps {
  title: string;
  description: string;
  timestamp: string;
}

export function NoteCard({ title, description, timestamp }: NoteCardProps) {
  return (
    <a
      href="#"
      className="flex flex-col gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded p-4 hover:bg-background-neutral-subtle"
    >
      <div className="flex flex-col gap-2">
        <p className="flex-grow text-title-small-strong text-foreground-neutral-default">
          {title}
        </p>
        <p className="line-clamp-2 flex-grow text-body-large-default text-foreground-neutral-subtle">
          {description}
        </p>
      </div>
    </a>
  );
}
