import { Container } from '@/components/container';
import { Greeting } from '@/components/greeting';
import { MovingArrow } from '@/components/moving-arrow';
import { fetchBlockContent, retrieveDatabase } from '@/lib/notion';
import { getPageVisitorCount } from '@/lib/umami';
import {
  extractFaviconFromUrl,
  formatDate,
  generateSlug,
  getRelativeTimeString,
} from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const [projects, bookmarks, notes] = await Promise.all([
    retrieveDatabase('13157c1e961280e99dfffd55147e74b3'),
    retrieveDatabase('12057c1e961280329ebad0ecdf335eb7'),
    retrieveDatabase('12057c1e9612806bb6cef4c32590960f'),
  ]);

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <Greeting />
        <p className="text-body-large-default text-foreground-neutral-faded">
          Welcome to my corner of the internet. You are visitor{' '}
          <span className="text-body-large-strong text-foreground-neutral-default">
            {getPageVisitorCount()}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <header className="flex gap-4">
          <h1 className="flex-grow text-title-medium-strong">Featured Work</h1>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            View All
            <MovingArrow />
          </Link>
        </header>
        <section className="grid gap-10 md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
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
                <div className="relative block w-full overflow-clip rounded-xl bg-background-neutral-faded">
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
        </section>
      </div>
      <section className="flex flex-col gap-6">
        <header className="flex gap-4">
          <h1 className="flex-grow text-title-medium-strong">
            Latest Bookmarks
          </h1>
          <Link
            href="/bookmarks"
            className="group flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            View All
            <MovingArrow />
          </Link>
        </header>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {bookmarks.slice(0, 6).map((bookmark) => (
            <a
              className="group relative flex flex-grow flex-col gap-3 rounded-lg border border-border-neutral-faded bg-background-neutral-faded px-4 py-3 transition hover:bg-background-neutral-subtle"
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
              <div className="flex flex-grow flex-col justify-between gap-2">
                <p className="line-clamp-2 text-body-large-strong">
                  {(bookmark.properties.Name as any).title[0].plain_text}
                </p>
                <p className="text-body-medium-subtle text-foreground-neutral-faded">
                  {getRelativeTimeString(new Date(bookmark.created_time))}
                </p>
              </div>
              <ArrowUpRight
                width={16}
                className="absolute right-2 top-2 scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <header className="flex gap-4">
          <h1 className="flex-grow text-title-medium-strong">Notes</h1>
          <Link
            href="/notes"
            className="group flex items-center gap-2 text-body-medium-subtle text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            View All
            <MovingArrow />
          </Link>
        </header>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
          {notes.slice(0, 4).map(async (note) => {
            const noteContent = await fetchBlockContent(note.id);
            const textContent = noteContent.map((block: any) => {
              return block.paragraph?.rich_text.map(
                ({ text }: any) => text.content,
              );
            });
            return (
              <Link
                key={note.id}
                href={`/notes/${generateSlug((note.properties.Name as any).title[0].plain_text)}`}
                className="group flex flex-col gap-2 rounded-lg border border-border-neutral-faded bg-background-neutral-faded p-4 hover:bg-background-neutral-subtle"
              >
                <div className="flex items-center">
                  <p className="flex-grow text-title-small-strong">
                    {(note.properties.Name as any).title[0].plain_text}
                  </p>
                  <span className="translate-y-1 text-body-medium-subtle text-foreground-neutral-faded opacity-0 blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0">
                    {formatDate(note.created_time, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="line-clamp-2 text-body-large-default text-foreground-neutral-subtle">
                  {textContent}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
