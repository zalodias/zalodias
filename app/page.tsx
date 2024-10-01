import { Container } from '@/components/container';
import { ProjectCard } from '@/components/project-card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col gap-6">
        <div className="flex gap-4">
          <h1 className="text-title-small-strong flex-grow">
            Project Highlights
          </h1>
          <Link
            href="/projects"
            className="text-body-medium-subtle flex items-center gap-2 text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            View All
            <ArrowUpRight width={16} />
          </Link>
        </div>
        <div className="grid grid-flow-col gap-10">
          <ProjectCard
            title="Autumnal Peach"
            description="A project made with love, and a lot of coffee."
            image="https://picsum.photos/seed/picsum/960/640"
            link="/projects/autumnal-peach"
          />
          <ProjectCard
            image="https://picsum.photos/seed/picsum/960/640"
            title="Autumnal Peach"
            description="A project made with love, and a lot of coffee."
            link="/projects/autumnal-peach"
          />
        </div>
      </section>
    </Container>
  );
}
