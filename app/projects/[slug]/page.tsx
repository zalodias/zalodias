import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/lib/notion';
import { generateSlug } from '@/lib/utils';
import Image from 'next/image';

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const database = await fetchDatabaseContent(
    process.env.NOTION_PROJECTS_DATABASE_ID!,
  );

  const id = database.find(
    (project) =>
      generateSlug((project.properties.Name as any).title[0].plain_text) ===
      slug,
  )?.id;

  const page = await fetchPageContent(id!);
  const blocks = await fetchBlockContent(id!);

  return (
    <Container className="gap-10 pt-0 lg:pt-10">
      <section className="flex flex-col gap-10">
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-clip bg-background-neutral-faded lg:static lg:left-0 lg:order-1 lg:w-full lg:translate-x-0 lg:rounded-xl">
          <Image
            src={(page.cover as any).external.url}
            alt={(page.properties.Name as any).title[0].plain_text}
            width={1920}
            height={1440}
            className="object-cover"
          />
        </div>
        <header className="flex items-start justify-between gap-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-title-large-strong">
              {(page.properties.Tagline as any).rich_text[0].plain_text}
            </h1>
            <p className="text-body-large-default text-foreground-neutral-subtle">
              {(page.properties.Statement as any).rich_text[0].plain_text}
            </p>
          </div>
        </header>
        <section className="flex flex-wrap gap-10 md:gap-20">
          <div className="flex flex-col gap-2">
            <p className="text-body-small-subtle uppercase text-foreground-neutral-faded">
              Project
            </p>
            <p className="text-body-medium-subtle">
              {(page.properties.Name as any).title[0].plain_text}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-small-subtle uppercase text-foreground-neutral-faded">
              Year
            </p>
            <p className="text-body-medium-subtle">
              {(page.properties.Year as any).rich_text[0].plain_text}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-small-subtle uppercase text-foreground-neutral-faded">
              Deliverable
            </p>
            <p className="text-body-medium-subtle">
              {(page.properties.Deliverable as any).select.name}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-small-subtle uppercase text-foreground-neutral-faded">
              Skills
            </p>
            <p className="text-body-medium-subtle">
              {(page.properties.Skills as any).multi_select
                .map((skill: { name: string }) => skill.name)
                .join(', ')}
            </p>
          </div>
        </section>
      </section>
      <section>
        {blocks.map((block: any) => (
          <NotionBlock key={block.id} block={block} />
        ))}
      </section>
    </Container>
  );
}
