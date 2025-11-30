import { AnimatedCounter } from '@/components/animated-counter';
import { Container } from '@/components/container';
import { Greeting } from '@/components/greeting';
import { MovingArrow } from '@/components/moving-arrow';
import { Transition } from '@/components/transition';
import { home } from '@/data/metadata';
import { work } from '@/data/work';
import { fetchDatabaseContent } from '@/lib/notion';
import { getTotalUniqueVisitors } from '@/lib/umami';
import {
  extractFaviconFromUrl,
  formatDate,
  generateSlug,
  getRelativeTimeString,
} from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
};

export default async function Home() {
  const [bookmarks, notes] = await Promise.all([
    fetchDatabaseContent(process.env.NOTION_BOOKMARKS_DATABASE_ID!, {
      page_size: 6,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    }),
    fetchDatabaseContent(process.env.NOTION_NOTES_DATABASE_ID!, {
      page_size: 4,
      filter: {
        property: 'Status',
        status: {
          equals: 'Live',
        },
      },
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
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
              to={await getTotalUniqueVisitors()}
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
            <h1 className="text-title-medium-strong grow">Work</h1>
          </header>
          <div className="grid gap-5">
            {work.map((work) => (
              <a
                href={work.website}
                key={work.company}
                className="flex flex-col items-start gap-4 py-2 md:flex-row md:items-center"
              >
                <div className="overflow-hidden rounded-full">{work.image}</div>
                <div className="flex grow flex-col">
                  <div className="group flex items-center gap-2">
                    <h4 className="text-body-large-strong">{work.company}</h4>
                    <ArrowUpRight
                      width={16}
                      className="scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-body-large-default text-foreground-neutral-faded whitespace-nowrap">
                    {work.description}
                  </p>
                </div>
                <span className="bg-background-neutral-subtle hidden h-px w-px md:block" />
                <time className="text-body-medium-subtle text-foreground-neutral-faded whitespace-nowrap">
                  {work.date}
                </time>
              </a>
            ))}
          </div>
        </section>
      </Transition>
      <Transition delay={0.4}>
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
      <Transition delay={0.4}>
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
    </Container>
  );
}
