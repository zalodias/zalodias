interface NoteCardProps {
  title: string;
  timestamp: string;
}

export function NoteCard({ title, timestamp }: NoteCardProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded p-4 hover:bg-background-neutral-subtle"
    >
      <p className="flex-grow text-body-large-subtle text-foreground-neutral-subtle">
        {title}
      </p>
      <p className="text-body-medium-default text-foreground-neutral-faded">
        {timestamp}
      </p>
    </a>
  );
}
