import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';

export default async function Stack() {
  const stack = await fetchDatabaseContent('15d57c1e961280d1b3ccc835fa7a054b');

  return (
    <Container>
      <Intro title="Stack">A collection of my favorite working tools</Intro>
      <div className="grid gap-5 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {stack.map((resource) => (
          <div
            key={resource.id}
            className="flex flex-col gap-4 rounded-xl border border-border-neutral-faded bg-background-neutral-faded p-4"
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
          </div>
        ))}
      </div>
    </Container>
  );
}
