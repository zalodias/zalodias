import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { formatDate, generateSlug } from '@/lib/utils';

export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const database = await fetchDatabaseContent(
    process.env.NOTION_NOTES_DATABASE_ID!,
  );

  const id = database.find(
    (project) =>
      generateSlug((project.properties.Name as any).title[0].plain_text) ===
      slug,
  )?.id;

  const page = await fetchPageContent(id!);
  const blocks = await fetchBlockContent(id!);

  return (
    <Container>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-title-large-strong">
            {(page.properties.Name as any).title[0].plain_text}
          </h1>
          <p className="text-body-medium-default text-foreground-neutral-subtle">
            {formatDate(page.created_time, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
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
