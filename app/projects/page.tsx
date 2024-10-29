import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  return (
    <Container>
      <section className="flex flex-col gap-20">
        <Intro
          title="Projects"
          description="Selected projects showcasing thoughtful design solutions in education, fitness, and social networking."
        />
        <section className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-20">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-4">
              <div className="relative block h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-title-small-strong">{project.title}</h2>
                <p className="text-body-medium-subtle text-foreground-neutral-faded">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </Container>
  );
}
