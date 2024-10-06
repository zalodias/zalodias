interface ProjectMetadataProps {
  title: string;
  description: string;
}

export function ProjectMetadata({ title, description }: ProjectMetadataProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-small-subtle uppercase text-foreground-neutral-faded">
        {title}
      </p>
      <p className="text-body-medium-subtle">{description}</p>
    </div>
  );
}
