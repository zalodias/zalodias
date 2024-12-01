import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { generateSlug } from '@/lib/utils';

export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const database = await fetchDatabaseContent(
    '12057c1e9612806bb6cef4c32590960f',
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
      <section className="flex flex-col gap-10">
        <h1 className="text-title-large-strong">
          {(page.properties.Name as any).title[0].plain_text}
        </h1>
        <div className="flex flex-col gap-2">
          {blocks.map((block: any) => (
            <NotionBlock key={block.id} block={block} />
          ))}
        </div>
      </section>
    </Container>
  );
}
