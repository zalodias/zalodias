import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { generateSlug } from '@/lib/utils';

export async function generateStaticParams() {
  const streams = await fetchDatabaseContent(
    process.env.NOTION_STREAMS_DATABASE_ID!,
    { filter: { property: 'Status', status: { equals: 'Live' } } },
  );

  return streams
    .map((stream) => {
      const title = (stream.properties as any).Name?.title?.[0]?.plain_text;

      return {
        slug: generateSlug(title),
      };
    })
    .filter(Boolean) as { slug: string }[];
}

async function getPageData(slug: string) {
  const database = await fetchDatabaseContent(
    process.env.NOTION_STREAMS_DATABASE_ID!,
  );

  const id = database.find(
    (stream) =>
      generateSlug((stream.properties.Name as any).title[0].plain_text) ===
      slug,
  )?.id;

  const page = await fetchPageContent(id!);

  return { page, id };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { page } = await getPageData(slug);

  return {
    title: (page.properties.Name as any).title[0].plain_text,
  };
}

export default async function Stream({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { page, id } = await getPageData(slug);
  const blocks = await fetchBlockContent(id!);

  return (
    <Container>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-title-small-strong">
            {(page.properties.Name as any).title[0].plain_text}
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          {blocks.map((block) => (
            <NotionBlock key={block.id} block={block} />
          ))}
        </div>
      </section>
    </Container>
  );
}
