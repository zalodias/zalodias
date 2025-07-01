import { AnimatedCounter } from '@/components/animated-counter';
import { Container } from '@/components/container';
import { Greeting } from '@/components/greeting';
import { MovingArrow } from '@/components/moving-arrow';
import { Transition } from '@/components/transition';
import { home } from '@/data/metadata';
import { fetchDatabaseContent } from '@/lib/notion';
import { getVisitorCount } from '@/lib/umami';
import {
  extractFaviconFromUrl,
  formatDate,
  generateSlug,
  getRelativeTimeString,
} from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
};

export default async function Home() {
  const [projects, bookmarks, notes] = await Promise.all([
    fetchDatabaseContent(process.env.NOTION_PROJECTS_DATABASE_ID!),
    fetchDatabaseContent(process.env.NOTION_BOOKMARKS_DATABASE_ID!, {
      page_size: 6,
    }),
    fetchDatabaseContent(process.env.NOTION_NOTES_DATABASE_ID!, {
      page_size: 4,
      filter: {
        property: 'Status',
        status: {
          equals: 'Live',
        },
      },
    }),
  ]);

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <Transition delay={0.2}>
          <Greeting />
        </Transition>
        <Transition delay={0.3}>
          <p className="text-foreground-neutral-faded">
            Welcome to my corner of the internet. You are visitor{' '}
            <AnimatedCounter
              from={0}
              to={(await getVisitorCount()) ?? 0}
              duration={0.8}
              delay={0.4}
              className="text-foreground-neutral-default font-semibold"
            />
          </p>
        </Transition>
      </div>
      <Transition delay={0.4}>
        <section className="flex flex-col gap-6">
          <header className="flex gap-4">
            <h1 className="text-title-medium-strong grow">Featured Work</h1>
            <Link
              href="/projects"
              className="group text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default flex items-center gap-2"
            >
              View All
              <MovingArrow />
            </Link>
          </header>
          <div className="grid gap-10 md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
            {projects
              .filter(
                (project) =>
                  (project.properties.Status as any).select.name === 'Ready',
              )
              .reverse()
              .map((project) => (
                <Link
                  key={project.id}
                  className="flex flex-col gap-4"
                  href={`/projects/${generateSlug((project.properties.Name as any).title[0].plain_text)}`}
                >
                  <div className="bg-background-neutral-faded relative block w-full overflow-clip rounded-xl">
                    <Image
                      src={(project.cover as any).external.url}
                      alt={(project.properties.Name as any).title[0].plain_text}
                      width={1920}
                      height={1440}
                      className="object-cover duration-200 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-title-small-strong">
                      {(project.properties.Name as any).title[0].plain_text}
                    </h2>
                    <p className="text-body-large-default text-foreground-neutral-faded">
                      {
                        (project.properties.Description as any).rich_text[0]
                          .plain_text
                      }
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </Transition>
      <Transition delay={0.2}>
        <section className="flex flex-col gap-6">
          <header className="flex gap-4">
            <h1 className="text-title-medium-strong grow">Latest Bookmarks</h1>
            <Link
              href="/bookmarks"
              className="group text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default flex items-center gap-2"
            >
              View All
              <MovingArrow />
            </Link>
          </header>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {bookmarks.map((bookmark) => (
              <a
                className="group border-border-neutral-faded bg-background-neutral-faded hover:bg-background-neutral-subtle relative flex grow flex-col gap-3 rounded-lg border px-4 py-3 transition active:scale-[0.98]"
                href={(bookmark.properties.Link as any).url}
                key={bookmark.id}
                target="_blank"
              >
                <img
                  src={extractFaviconFromUrl(
                    (bookmark.properties.Link as any).url,
                    64,
                  )}
                  alt="favicon"
                  className="size-4"
                />
                <div className="flex grow flex-col justify-between gap-2">
                  <p className="text-body-large-strong line-clamp-2">
                    {(bookmark.properties.Name as any).title[0].plain_text}
                  </p>
                  <p className="text-body-medium-subtle text-foreground-neutral-faded">
                    {getRelativeTimeString(new Date(bookmark.created_time))}
                  </p>
                </div>
                <ArrowUpRight
                  width={16}
                  className="absolute top-2 right-2 scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </section>
      </Transition>
      <Transition delay={0.2}>
        <section className="flex flex-col gap-6">
          <header className="flex gap-4">
            <h1 className="text-title-medium-strong grow">Notes</h1>
            <Link
              href="/notes"
              className="group text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default flex items-center gap-2"
            >
              View All
              <MovingArrow />
            </Link>
          </header>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
            {notes.map((note) => (
              <Link
                key={note.id}
                href={`/notes/${generateSlug((note.properties.Name as any).title[0].plain_text)}`}
                className="border-border-neutral-faded bg-background-neutral-faded hover:bg-background-neutral-subtle flex flex-col gap-4 rounded-lg border p-4 transition active:scale-[0.98]"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-title-small-strong grow">
                    {(note.properties.Name as any).title[0].plain_text}
                  </p>
                  <p className="text-foreground-neutral-subtle">
                    {(note.properties.Summary as any).rich_text[0].plain_text}
                  </p>
                </div>
                <span className="text-body-medium-subtle text-foreground-neutral-faded">
                  {formatDate((note.properties.Date as any).date.start, {
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </Transition>
      <Transition delay={0.2}>
        <div className="bg-background-neutral-faded border-border-neutral-faded grid gap-10 rounded-lg border px-6 py-5 md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          <div className="flex flex-col gap-2">
            <h2 className="text-body-large-strong">Join me every month</h2>
            <p className="text-foreground-neutral-faded text-body-medium-default">
              Life updates, work in progress, and things I'm curious about. No
              ads. No sponsors. No spam.
            </p>
          </div>
          <form
            method="post"
            action={`https://app.loops.so/api/newsletter-form/${process.env.LOOPS_FORM_ID}`}
            className="flex items-center gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="border-border-neutral-subtle placeholder:text-foreground-neutral-faded text-body-medium-default w-full min-w-50 rounded-lg border px-4 py-3 transition"
            />
            <input type="hidden" name="userGroup" value="Newsletter" />
            <button
              type="submit"
              className="bg-background-neutral-inverse/80 hover:bg-background-neutral-inverse text-foreground-neutral-inverse text-body-medium-subtle rounded-lg border px-5 py-3 transition active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Transition>
    </Container>
  );
}
