interface ProjectMetadataProps {
  title: string;
  description: string;
}

export function ProjectMetadata({ title, description }: ProjectMetadataProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-small-subtle text-foreground-neutral-faded uppercase">
        {title}
      </p>
      <p className="text-body-medium-subtle">{description}</p>
    </div>
  );
}
