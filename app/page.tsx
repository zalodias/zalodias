import { AppIcon } from '@/components/app-icon';
import { BookmarkCard } from '@/components/bookmark-card';
import { Container } from '@/components/container';
import { MovingArrow } from '@/components/moving-arrow';
import { NoteCard } from '@/components/note-card';
import { ProjectCard } from '@/components/project-card';
import { Arc } from '@/icons/Arc';
import { Linear } from '@/icons/Linear';
import { Raycast } from '@/icons/Raycast';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <h1 className="flex-grow text-title-small-strong">
              Featured Projects
            </h1>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
            >
              View All
              <MovingArrow />
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
            <h1 className="text-title-small-strong">Dissections</h1>
            <p className="text-foreground-neutral-faded">
              Analysing the delightful details of my favorite software
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded px-5 py-3 text-body-medium-subtle text-foreground-neutral-faded hover:bg-background-neutral-subtle hover:text-foreground-neutral-default disabled:pointer-events-none disabled:opacity-50"
          >
            View Dissections
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <h1 className="flex-grow text-title-small-strong">Bookmarks</h1>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
            >
              View All
              <MovingArrow />
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
          </div>
        </div>
        <div className="rounded-xl border border-border-neutral-faded p-6">
          <header className="flex flex-col gap-5">
            <h1 className="text-title-small-strong">Recent Notes</h1>
            <div className="flex flex-col gap-3">
              <NoteCard
                title="Moebius-style post-processing"
                timestamp="Just now"
              />
              <NoteCard
                title="Docker container management tools"
                timestamp="20 minutes ago"
              />
              <NoteCard
                title="Moebius-style post-processing"
                timestamp="1 week ago"
              />
              <NoteCard
                title="Consistent toolset for manipulating JavaScript dates"
                timestamp="2 months ago"
              />
            </div>
          </header>
        </div>
      </section>
    </Container>
  );
}
