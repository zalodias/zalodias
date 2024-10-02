import { AppIcon } from '@/components/app-icon';
import { Container } from '@/components/container';
import { ProjectCard } from '@/components/project-card';
import { Arc } from '@/icons/Arc';
import { Linear } from '@/icons/Linear';
import { Raycast } from '@/icons/Raycast';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <h1 className="flex-grow text-title-small-strong">
              Project Highlights
            </h1>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
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
        </div>
        <div className="flex flex-col gap-8 rounded-xl border border-border-neutral-faded p-6">
          <header className="flex flex-col gap-1">
            <h1 className="text-title-small-strong">Featured Dissections</h1>
            <p className="text-foreground-neutral-faded">
              Analysing the delightful details of software
            </p>
          </header>
          <div className="grid w-full grid-cols-2 gap-4">
            <AppIcon
              icon={<Linear />}
              title="Linear"
              description="8 details"
              className="w-full"
            />
            <AppIcon
              icon={<Arc />}
              title="Arc"
              description="5 details"
              className="w-full"
            />
            <AppIcon
              icon={<Raycast />}
              title="Raycast"
              description="3 details"
              className="w-full"
            />
            <AppIcon
              icon={<Linear />}
              title="Linear"
              description="8 details"
              className="w-full"
            />
          </div>
          <Link
            href="/dissections"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded px-5 py-3 text-body-medium-subtle text-foreground-neutral-faded duration-200 hover:bg-background-neutral-subtle hover:text-foreground-neutral-default disabled:pointer-events-none disabled:opacity-50"
          >
            View Dissections
          </Link>
        </div>
      </section>
    </Container>
  );
}
