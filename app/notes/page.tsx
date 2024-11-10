import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { generateSlug } from '@/lib/utils';
import Link from 'next/link';

export default async function Notes() {
  const notes = await fetchDatabaseContent('12057c1e9612806bb6cef4c32590960f');

  return (
    <Container>
      <Intro
        title="Notes"
        description="A collection of crystallized thoughts and ideas."
      />
      <div className="flex flex-col gap-1">
        {notes.map((note) => (
          <Link
            key={note.id}
            href={`/notes/${generateSlug((note.properties.Name as any).title[0].plain_text)}`}
            className="flex flex-col gap-4"
          >
            <p className="text-body-large-strong">
              {(note.properties.Name as any).title[0].plain_text}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
