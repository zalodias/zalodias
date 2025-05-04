import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { formatDate, generateSlug } from '@/lib/utils';
import Link from 'next/link';

export default async function Notes() {
  const notes = await fetchDatabaseContent(
    process.env.NOTION_NOTES_DATABASE_ID!,
  );

  return (
    <Container>
      <Intro title="Notes">
        Unplugged thoughts & ideas on design, technology, and everything in
        between.
      </Intro>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {notes
          .filter(
            (note) => (note.properties.Status as any).select.name === 'Ready',
          )
          .map((note) => (
            <Link
              key={note.id}
              href={`/notes/${generateSlug((note.properties.Name as any).title[0].plain_text)}`}
              className="border-border-neutral-faded bg-background-neutral-faded hover:bg-background-neutral-subtle flex flex-col gap-4 rounded-lg border p-4 transition"
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
      </section>
    </Container>
  );
}
