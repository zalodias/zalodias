import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { WaveSine } from '@/components/wave-sine';
import { streams as meta } from '@/data/metadata';
import { fetchDatabaseContent } from '@/lib/notion';
import { generateSlug } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default async function Streams() {
  const streams = await fetchDatabaseContent(
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
      <Intro title={meta.title}>{meta.description}</Intro>
      <section className="group grid gap-4">
        {streams.map((stream) => (
          <Link
            key={stream.id}
            href={`/streams/${generateSlug((stream.properties.Name as any).title[0].plain_text)}`}
            className="py-1 transition group-hover:opacity-50 hover:opacity-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-background-neutral-faded border-border-neutral-faded hover:bg-background-neutral-subtle rounded-md border p-1">
                <WaveSine className="size-5" />
              </div>
              <p className="text-body-large-subtle grow">
                {(stream.properties.Name as any).title[0].plain_text}
              </p>
              <p className="text-body-medium-subtle text-foreground-neutral-faded">
                {new Date(
                  (stream.properties.Date as any).date.start,
                ).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                })}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </Container>
  );
}
