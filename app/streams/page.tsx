import { WaveSine } from '@/assets/icons/wave-sine';
import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { streams as meta } from '@/data/metadata';
import { fetchBlockContent, fetchDatabaseContent } from '@/lib/notion';
import {
  extractTextFromBlocks,
  generateSlug,
  getRelativeTimeString,
} from '@/lib/utils';
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

  const data = await Promise.all(
    streams.map(async (stream) => {
      const blocks = await fetchBlockContent(stream.id);
      const preview = extractTextFromBlocks(blocks.slice(0, 1));
      const last = blocks[blocks.length - 1]?.created_time;
      return { preview, last };
    }),
  );

  return (
    <Container>
      <Intro title={meta.title}>{meta.description}</Intro>
      <section className="grid gap-4">
        {streams.map((stream, index) => (
          <Link
            key={stream.id}
            href={`/streams/${generateSlug((stream.properties.Name as any).title[0].plain_text)}`}
            className="group before:bg-background-neutral-faded relative flex w-full flex-col gap-3 py-4 transition before:absolute before:-inset-x-6 before:inset-y-0 before:-z-10 before:scale-[0.98] before:rounded-lg before:opacity-0 before:transition-all before:content-[''] hover:before:scale-100 hover:before:opacity-100 active:scale-[0.98] md:flex-row"
          >
            <div className="flex grow flex-col gap-1">
              <h3 className="text-title-small-strong">
                {(stream.properties.Name as any).title[0].plain_text}
              </h3>
              <p className="text-foreground-neutral-subtle">
                {data[index].preview}…
              </p>
            </div>
            <span className="text-body-medium-subtle group-hover:text-foreground-neutral-default text-foreground-neutral-faded flex items-center gap-1 transition">
              Last <WaveSine className="size-5" />
              {getRelativeTimeString(new Date(data[index].last))}
            </span>
          </Link>
        ))}
      </section>
    </Container>
  );
}
