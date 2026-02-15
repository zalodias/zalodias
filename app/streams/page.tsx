import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { streams } from '@/data/metadata';
import { fetchDatabaseContent } from '@/lib/notion';
import { formatDate, generateSlug } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: streams.title,
  description: streams.description,
};

export default async function Streams() {
  const streamsList = await fetchDatabaseContent(
    process.env.NOTION_STREAMS_DATABASE_ID!,
    {
      filter: {
        property: 'Status',
        status: {
          equals: 'Live',
        },
      },
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    },
  );

  return (
    <Container>
      <Intro title="Streams">{streams.description}</Intro>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {streamsList.map((stream) => (
          <Link
            key={stream.id}
            href={`/streams/${generateSlug((stream.properties.Name as any).title[0].plain_text)}`}
            className="border-border-neutral-faded bg-background-neutral-faded hover:bg-background-neutral-subtle flex flex-col gap-4 rounded-lg border p-4 transition active:scale-[0.98]"
          >
            <div className="flex flex-col gap-2">
              <p className="text-title-small-strong grow">
                {(stream.properties.Name as any).title[0].plain_text}
              </p>
            </div>
            {(stream.properties.Date as any)?.date?.start && (
              <span className="text-body-medium-subtle text-foreground-neutral-faded">
                {formatDate((stream.properties.Date as any).date.start, {
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </Link>
        ))}
      </section>
    </Container>
  );
}
