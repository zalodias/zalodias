import { Container } from '@/components/container';
import { Intro } from '@/components/intro';
import { fetchDatabaseContent } from '@/lib/notion';
import { generateSlug } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
  const projects = await fetchDatabaseContent(
    process.env.NOTION_PROJECTS_DATABASE_ID!,
  );

  return (
    <Container>
      <Intro title="Projects">
        A showcase of my latest design work. Currently designing digital health
        solutions at{' '}
        <a
          href="https://www.swordhealth.com"
          className="text-body-large-subtle text-foreground-brand-default hover:underline hover:underline-offset-2"
          target="_blank"
        >
          Sword Health
        </a>
        .
      </Intro>
      <section className="grid gap-20 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {projects
          .filter(
            (project) =>
              (project.properties.Status as any).select.name === 'Ready',
          )
          .reverse()
          .map((project) => (
            <Link
              key={project.id}
              className="flex flex-col gap-4"
              href={`/projects/${generateSlug((project.properties.Name as any).title[0].plain_text)}`}
            >
              <div className="relative block w-full overflow-clip rounded-xl bg-background-neutral-faded">
                <Image
                  src={(project.cover as any).external.url}
                  alt={(project.properties.Name as any).title[0].plain_text}
                  width={1920}
                  height={1440}
                  className="object-cover duration-200 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-title-small-strong">
                  {(project.properties.Name as any).title[0].plain_text}
                </h2>
                <p className="text-body-large-default text-foreground-neutral-faded">
                  {
                    (project.properties.Description as any).rich_text[0]
                      .plain_text
                  }
                </p>
              </div>
            </Link>
          ))}
      </section>
    </Container>
  );
}
