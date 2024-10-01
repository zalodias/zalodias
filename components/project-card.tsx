import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="relative overflow-hidden rounded-xl border border-border-neutral-faded bg-background-neutral-faded"
    >
      <div className="overflow-hidden">
        <img src={image} alt={title} className="duration-200 hover:scale-105" />
      </div>
      <div className="gap-4 p-4">
        <h2 className="text-body-large-strong">{title}</h2>
        <p className="text-foreground-neutral-faded">{description}</p>
      </div>
    </Link>
  );
}
