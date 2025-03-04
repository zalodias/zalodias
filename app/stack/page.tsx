import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { ArrowUpRight } from 'lucide-react';

export default async function Stack() {
  const stack = await fetchDatabaseContent(
    process.env.NOTION_STACK_DATABASE_ID!,
  );

  return (
    <Container>
      <Intro title="Stack">
        The essential tools powering my daily workflow and helping me bring
        ideas to life.
      </Intro>
      <section className="grid gap-5 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {stack.map((resource) => (
          <a
            key={resource.id}
            href={(resource.properties.Link as any).url}
            target="_blank"
            className="group relative flex flex-col gap-4 rounded-xl border border-border-neutral-faded bg-background-neutral-faded p-4 transition hover:bg-background-neutral-subtle"
          >
            <div className="size-14">
              <img
                src={(resource.properties.Image as any).url}
                className="rounded-xl border border-border-neutral-subtle"
              ></img>
            </div>
            <div className="grid gap-0.5">
              <span className="text-body-large-strong">
                {(resource.properties.Name as any).title[0].plain_text}
              </span>
              <p className="text-body-large-default text-foreground-neutral-subtle">
                {
                  (resource.properties.Description as any).rich_text[0]
                    .plain_text
                }
              </p>
            </div>
            <ArrowUpRight
              width={20}
              className="absolute right-3 top-3 scale-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            />
          </a>
        ))}
      </section>
    </Container>
  );
}
