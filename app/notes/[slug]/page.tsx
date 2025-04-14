import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { getVisitorCount } from '@/lib/umami';
import { formatDate, generateSlug } from '@/lib/utils';

async function getPageData(slug: string) {
  const database = await fetchDatabaseContent(
    process.env.NOTION_NOTES_DATABASE_ID!,
  );

  const id = database.find(
    (project) =>
      generateSlug((project.properties.Name as any).title[0].plain_text) ===
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
    description: (page.properties.Summary as any).rich_text[0].plain_text,
  };
}

export default async function Note({
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
          <h1 className="text-title-large-strong">
            {(page.properties.Name as any).title[0].plain_text}
          </h1>
          <div className="flex items-center gap-2 text-body-medium-default text-foreground-neutral-subtle">
            <p>
              {formatDate((page.properties.Date as any).date.start, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <span className="text-title-small-strong text-foreground-neutral-subtle">
              ·
            </span>
            <p>{(await getVisitorCount(`/notes/${slug}`)) ?? 0} views</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {blocks.map((block: any) => (
            <NotionBlock key={block.id} block={block} />
          ))}
        </div>
      </section>
    </Container>
  );
}
