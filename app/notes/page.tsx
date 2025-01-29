import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchBlockContent, fetchDatabaseContent } from '@/lib/notion';
import { formatDate, generateSlug } from '@/lib/utils';
import Link from 'next/link';

export default async function Notes() {
  const notes = await fetchDatabaseContent(
    process.env.NOTION_NOTES_DATABASE_ID!,
  );

  return (
    <Container>
      <Intro title="Notes">
        A collection of unplugged thoughts, reflections and ideas. Dive in with
        a curious mind.
      </Intro>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {notes
          .filter(
            (note) => (note.properties.Status as any).select.name === 'Ready',
          )
          .map(async (note) => {
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
    </Container>
  );
}
